import s from './Statistics.module.css';
import PropTypes from 'prop-types';

export default function Statistics(props) {
  const { good, neutral, bad, total, positivePercentage } = props;
  return (
    <>
      <div className={s.wrapper}>
        <span>Good: {good}</span>
        <span>Neutral: {neutral}</span>
        <span>Bad: {bad}</span>
      </div>
      <div className={s.endwrapper}>
        <span>Total: {total}</span>
        <span> Positive feedback: {positivePercentage}%</span>
      </div>
    </>
  );
}
Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
