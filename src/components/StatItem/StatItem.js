import PropTypes from "prop-types";
import s from "./StatItem.module.css";
import React, { Fragment } from "react";

export default function StatItem({ label, percentage }) {
  return (
    <Fragment>
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{percentage}%</span>
    </Fragment>
  );
}

StatItem.propTypes = {
  label: PropTypes.string,
  percentage: PropTypes.number,
};
