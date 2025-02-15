import style from "./ImagesCardsStyle.module.css";

function ImagesCards({title}) {
  return (
    <div className={style.imagesCard}>
      <h3 className={style.cardTitle}>{title}</h3>
      <div className={style.imagePlaceholder}></div>
      <button className={style.viewMore}>Ver más</button>
    </div>
  );
}

export default ImagesCards;
