import React from 'react';
import PropTypes from 'prop-types';
import css from './FriendList.module.css';

const FriendListItem = ({ id, avatar, name, isOnline }) => (
  <li key={id} className={css.item}>
    <span className={isOnline ? css.statusOnline : css.statusOffline}></span>
    <img
      className={css.avatar}
      src={avatar}
      alt={`User avatar of ${name}`}
      width="48"
    />
    <p className={css.name}>{name}</p>
  </li>
);

FriendListItem.propTypes = {
  id: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};

export default FriendListItem;
