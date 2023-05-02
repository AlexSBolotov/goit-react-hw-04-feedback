import s from './Notification.module.css';
import PropTypes from 'prop-types';

export default function Notification({ message }) {
  return <h2 className={s.title}>{message}</h2>;
}
Notification.propTypes = {
  message: PropTypes.string.isRequired,
};
