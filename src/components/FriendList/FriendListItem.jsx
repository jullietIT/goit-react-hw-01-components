import PropTypes from 'prop-types';
import styled from './Friend.module.css';

export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className={styled.item}>
      <span
        className={isOnline ? styled.statusOnline : styled.statusOffline}
      ></span>
      <img className={styled.avatar} src={avatar} alt={name} width="48" />
      <p className={styled.name}>{name}</p>
    </li>
  );
};

FriendListItem.propTypes = {
  avatar: PropTypes.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};
