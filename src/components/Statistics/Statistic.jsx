import PropTypes from 'prop-types';
import styled from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  return (
    <div className={styled.statistics}>
      {title && <h2 className={styled.title}>{title}</h2>}
      <ul className={styled.statList}>
        {stats.map(stat => (
          <li
            className={styled.item}
            key={stat.id}
            style={{ backgroundColor: getRandomColor() }}
          >
            <span className={styled.label}>{stat.label}</span>
            <span className={styled.percentage}>{stat.percentage}%</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

function getRandomColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
