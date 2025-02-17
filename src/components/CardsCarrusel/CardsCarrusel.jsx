import CarCards from "../CarCards/CarCards";
import style from "./CardsCarruselStyle.module.css";


function CardsCarrusel() {
  return (
    <div className={style.cardsContainer}>
      <div className={style.titleContainer}>
        <h2>ENCONTRÁ TU FIAT 0KM</h2>
      </div>
      <div className={style.carousel}>
        <div className={style.carouselContent}>
          <div className={style.carruselItem}>
              <CarCards />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardsCarrusel;
