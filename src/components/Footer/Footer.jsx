import styles from './FooterStyle.module.css'; // Importa los estilos

function Footer() {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>
        <h2>FADUA</h2>
      </div>
      <div className={styles.socialMediaContainer}>
        <div className={styles.socialMediaIcon} style={{ backgroundColor: '#1877F2' }}></div>
        <div className={styles.socialMediaIcon} style={{ backgroundColor: '#E4405F' }}></div>
        <div className={styles.socialMediaIcon} style={{ backgroundColor: '#0A66C2' }}></div>
      </div>
    </div>
  );
}

export default Footer;
