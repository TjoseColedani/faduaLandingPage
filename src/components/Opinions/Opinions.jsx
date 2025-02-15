
import styles from './OpinionsStyle.module.css';
import OpinionCard from '../OpinionCards/OpinionCard';

function Opinions() {
  const opinions = [
    {
      name: 'Juan Pérez',
      comment: 'Excelente servicio, muy atentos y rápidos en resolver cualquier duda.',
      rating: 5,
    },
    {
      name: 'Ana García',
      comment: 'Me encantó el trato, muy recomendables.',
      rating: 4,
    },
    {
      name: 'Carlos Rodríguez',
      comment: 'Buen servicio, aunque el tiempo de espera fue un poco largo.',
      rating: 3,
    },
    {
      name: 'Luisa Fernández',
      comment: 'Un lugar muy confiable, siempre cumplen lo que prometen.',
      rating: 5,
    },
  ];

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
