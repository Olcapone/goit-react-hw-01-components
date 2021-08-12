import PropTypes from "prop-types";
import s from "./TransactionHistory.module.css";
import TransactionItem from "../TransactionItem/TransactionItem";

export default function TransactionHistory({ transactions }) {
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
        {transactions.map((transaction) => (
          <tr className={s.itemRow} key={transaction.id}>
            <TransactionItem
              type={transaction.type}
              amount={transaction.amount}
              currency={transaction.currency}
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
