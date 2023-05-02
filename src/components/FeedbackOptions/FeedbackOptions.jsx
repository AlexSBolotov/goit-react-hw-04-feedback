import s from './FeedbackOptions.module.css';
import PropTypes from 'prop-types';
import { STATUSES } from '../../helpers/const';

export default function FeedbackOptions(props) {
  const { callback } = props;
  return (
    <div className={s.wrapper}>
      {STATUSES.map(status => (
        <button
          className={s.button}
          type="button"
          key={status}
          onClick={() => callback(status)}
        >
          {status}
        </button>
      ))}
    </div>
  );
}
FeedbackOptions.propTypes = {
  callback: PropTypes.func,
};
