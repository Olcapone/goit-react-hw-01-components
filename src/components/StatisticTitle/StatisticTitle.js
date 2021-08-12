import React, { Fragment } from "react";
import PropTypes from "prop-types";
import s from "./StatisticTitle.module.css";

export default function StatisticTitle({ title }) {
  return <Fragment>{title && <h2 className={s.title}>{title} </h2>}</Fragment>;
}

StatisticTitle.propTypes = {
  title: PropTypes.string,
};
