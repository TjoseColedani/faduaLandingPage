import { useState, useEffect } from 'react';
import axios from 'axios';
import styles from './OpinionsStyle.module.css';
import OpinionCard from '../OpinionCards/OpinionCard';

function Opinions() {
  const [opinions, setOpinions] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/opinions')  // Asegurate de que el backend esté corriendo
      .then(response => setOpinions(response.data))
      .catch(error => console.error('Error fetching opinions:', error));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h3>CONOCE LO QUE OPINAN DE NOSOTROS</h3>
      </div>
      <div className={styles.cardsContainer}>
        {opinions.map((opinion, index) => (
          <OpinionCard
            key={index}
            name={opinion.name}
            comment={opinion.comment}
            rating={opinion.rating}
          />
        ))}
      </div>
    </div>
  );
}

export default Opinions;
