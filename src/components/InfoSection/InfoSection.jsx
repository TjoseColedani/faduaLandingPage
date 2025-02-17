import React from 'react';
import styles from './InfoSectionStyle.module.css'; // Importa los estilos

function InfoSection() {
  return (
    <div className={styles.container}>
      <h3>¿Necesitas nuestra ayuda?</h3> {/* Ahora está encima de los demás divs */}

      <div className={styles.sections}>
        {/* Primer div */}
        <div className={styles.section}>
          <div className={styles.iconContainer}></div>
          <h4>Envíanos un mensaje</h4> {/* Texto en negrita */}
          <button className={styles.button}>+54 387 4800908</button>
        </div>

        {/* Segundo div */}
        <div className={styles.section}>
          <div className={styles.iconContainer}></div>
          <h4>Contactate con nosotros</h4> {/* Texto en negrita */}
          <div className={styles.addresses}>
            <p>Salta capital | San Luis 660</p>
            <p>S. S. de Jujuy | Colectora Ruta Nac. 9 Km 1007</p>
            <p>Concepción Tucumán | Shipton 1585</p>
          </div>
        </div>

        {/* Tercer div */}
        <div className={styles.section}>
          <div className={styles.iconContainer}></div>
          <h4>Probá tu próximo Fiat</h4> {/* Texto en negrita */}
          <button className={styles.button}>Reservar test drive</button>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
