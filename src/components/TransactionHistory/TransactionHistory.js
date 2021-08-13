import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";
import TransactionItem from "../TransactionItem/TransactionItem";

export default function TransactionHistory({ items }) {
  return (
    <table className={s.history}>
      <thead>
        <tr className={s.description}>
          <th className={s.row}>Type</th>
          <th className={s.row}>Amount</th>
          <th className={s.row}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map((item) => (
          <tr className={s.itemRow} key={item.id}>
            <TransactionItem
              type={item.type}
              amount={item.amount}
              currency={item.currency}
            />
          </tr>
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};
