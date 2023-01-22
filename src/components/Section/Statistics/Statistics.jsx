import styles from './statistics.module.css';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  return (
    <div className={styles.statisticsContainer}>
      <h2 className={styles.title}>Statistics</h2>
      <p className={styles.statistic}>
        Good: <span className={styles.result}>{good}</span>
      </p>
      <p className={styles.statistic}>
        Neutral: <span className={styles.result}>{neutral}</span>
      </p>
      <p className={styles.statistic}>
        Bad: <span className={styles.result}>{bad}</span>
      </p>
      <p className={styles.statistic}>
        Total: <span className={styles.result}>{total}</span>
      </p>
      <p className={styles.statistic}>
        Positive feedback:{' '}
        <span className={styles.result}>{positivePercentage}%</span>
      </p>
    </div>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
