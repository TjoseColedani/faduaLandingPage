import style from './NavBarStyle.module.css';

function Navbar() {
  return (
    <nav className={style.navbar}>
      <div className={style['logo-placeholder']}>
        <h1>FADUA</h1>
      </div>
      <div className={style['logo-whatsapp']}>
        <h2>W</h2>
      </div>
    </nav>
  );
}

export default Navbar;
