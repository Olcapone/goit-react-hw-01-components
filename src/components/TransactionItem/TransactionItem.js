import PropTypes from "prop-types";
import s from "./TransactionItem.module.css";
import React, { Fragment } from "react";

export default function TransactionItem({ type, amount, currency }) {
  return (
    <Fragment>
      <td className={s.data}>{type}</td>
      <td className={s.data}>{amount}</td>
      <td className={s.data}>{currency}</td>
    </Fragment>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
