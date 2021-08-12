import PropTypes from "prop-types";
import React, { Fragment } from "react";
import s from "./FriendListItem.module.css";

export default function FriendListItem({ isOnline, avatar, name }) {
  return (
    <Fragment>
      <span className={isOnline ? s.online : s.offline}></span>
      <img className={s.avatar} src={avatar} alt="" width="48" />
      <p className={s.name}>{name}</p>
    </Fragment>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string,
  isOnline: PropTypes.bool,
};
