import PropTypes from "prop-types";
import s from "./TransactionItem.module.css";
import React, { Fragment } from "react";

export default function TransactionItem(transactions) {
  const { type, amount, currency } = transactions;

  return (
    <Fragment>
      <td class={s.data}>{type}</td>
      <td class={s.data}>{amount}</td>
      <td class={s.data}>{currency}</td>
    </Fragment>
  );
}

TransactionItem.propTypes = {
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
