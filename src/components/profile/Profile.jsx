import PropTypes from 'prop-types';

import styled from './Profile.module.css';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <div className={styled.wrapper}>
      <div className={styled.wrap}>
        <div className={styled.foto}>
          <img
            className={styled.avatar}
            src={avatar}
            alt={`avatar of ${username}`}
          />
        </div>
        <h1 className={styled.name}>{username}</h1>

        <p className={styled.tag}>@{tag}</p>
        <p className={styled.location}>{location}</p>
      </div>
      <ul className={styled.stats}>
        <li className={styled.statsList}>
          <span className={styled.label}>Followers</span>
          <span className={styled.percentage}>{stats.followers}</span>
        </li>
        <li className={styled.statsList}>
          <span className={styled.label}>Views</span>
          <span className={styled.percentage}>{stats.views}</span>
        </li>
        <li className={styled.statsList}>
          <span className={styled.label}>Likes</span>
          <span className={styled.percentage}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.object.isRequired,
};

export default Profile;
