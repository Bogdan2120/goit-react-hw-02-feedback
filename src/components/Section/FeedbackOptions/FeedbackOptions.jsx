import styles from './feedbackOptions.module.css';
import PropTypes from 'prop-types';

const FeedbackOptions = ({ onLeaveFeadback }) => {
  return (
    <div className={styles.btnContainer}>
      <button
        type="button"
        className={styles.button}
        onClick={() => onLeaveFeadback('good')}
      >
        Good
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => onLeaveFeadback('neutral')}
      >
        Neutral
      </button>
      <button
        type="button"
        className={styles.button}
        onClick={() => onLeaveFeadback('bad')}
      >
        Bad
      </button>
    </div>
  );
};

FeedbackOptions.propTypes = {
  onLeaveFeadback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
