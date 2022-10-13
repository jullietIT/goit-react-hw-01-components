import PropTypes from 'prop-types';
import styled from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styled.transactionHistory}>
      <thead className={styled.thead}>
        <tr className={styled.tr}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(item => {
          return (
            <tr className={styled.tr} key={item.id}>
              <td className={styled.td}>{item.type}</td>
              <td className={styled.td}>{item.amount}</td>
              <td className={styled.td}>{item.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
