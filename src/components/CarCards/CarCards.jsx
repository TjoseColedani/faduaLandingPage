import style from "./CarCardsStyle.module.css";

function CarCards() {
  // Datos de los autos dentro del mismo archivo
  const cars = [
    {
      id: 1,
      title: "Fastback",
      models: ["Fastback", "Fastback Abarth"],
    },
    {
      id: 2,
      title: "Mobi",
      models: ["Mobi"],
    },
    {
      id: 3,
      title: "Cronos",
      models: [
        "Like 1.3MT",
        "Drive 1.3MT",
        "Stile 1.3MT",
        "Drive 1.3 CVT",
        "Precision 1.3 CVT",
      ],
    },
    {
      id: 4,
      title: "Toro",
      models: ["Freedom", "Volcano Nafta", "Volcano Diesel", "Ultra"],
    },
  ];

  return (
    <div className={style.container}>
      {cars.map((car) => (
        <div key={car.id} className={style.card}>
          <h3>{car.title}</h3>
          <div className={style.imagePlaceholder}></div>
          <details>
            <summary>Ver versiones</summary>
            <ul>
              {car.models.map((model, index) => (
                <li key={index}>{model}</li>
              ))}
            </ul>
          </details>
        </div>
      ))}
    </div>
  );
}

export default CarCards;
