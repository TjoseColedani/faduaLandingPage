
import Banner from "../../components/Banner/Banner";
import CardsCarrusel from "../../components/CardsCarrusel/CardsCarrusel";
import ContactForm from "../../components/ContacForm/ContactForm";
import ImagesCarrucel from "../../components/ImagesCarrucel/ImagesCarrucel";
import InfoSection from "../../components/InfoSection/InfoSection";
import Opinions from "../../components/Opinions/Opinions";
import SmallBanner from "../../components/SmallBanner/SmallBanner";
import styles from "./HomeStyle.module.css";

function Home() {
  return (
    <>
      <div className={styles.homeContainer}>
        <Banner />
        <CardsCarrusel />
        <SmallBanner />
        <ImagesCarrucel />
        <ContactForm />
        <Opinions />
        <InfoSection />
      </div>
      <div>
      </div>
    </>
  );
}

export default Home;
