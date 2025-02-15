
import styles from './OpinionCardStyle.module.css';

function OpinionCard({ name, comment, rating }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <h4 className={styles.userName}>{name}</h4>
        <div className={styles.rating}>⭐ {rating}</div>
      </div>
      <p className={styles.comment}>{comment}</p>
    </div>
  );
}

export default OpinionCard;
