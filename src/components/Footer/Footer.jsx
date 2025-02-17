import styles from './FooterStyle.module.css'; // Importa los estilos

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h2>FADUA</h2>
      </div>
      <div className={styles.socialMediaContainer}>
        <div className={styles.socialMediaIcon} style={{ backgroundColor: 'grey' }}></div>
        <div className={styles.socialMediaIcon} style={{ backgroundColor: 'grey' }}></div>
        <div className={styles.socialMediaIcon} style={{ backgroundColor: 'grey' }}></div>
      </div>
    </div>
  );
}

export default Footer;
