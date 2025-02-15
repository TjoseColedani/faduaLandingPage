import style from "./SmallBannerStyle.module.css";

function SmallBanner() {
  return (
    <div className={style.smallBanner}>
      <div className={style.imagePlaceholder}>
        <button>Reservar test drive</button>
      </div>
    </div>
  );
}

export default SmallBanner;
