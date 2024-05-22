import { Banner } from "../../components/banner/Banner"
import { HistoryText } from "../../components/history-text/HistoryText";
import { Interest } from "../interest/Interest";
import { Photos } from "../../components/photos/gallery-photos/Photos";

import "./mainStyle.scss";
import { Wavy } from "../../styles/Style";
import { FamSection } from "../family/FamSection";
import { Footer } from "../../components/footer/Footer";
import { Slide, Zoom, Fade, Rotate, Bounce, Flip, Hinge, JackInTheBox } from "react-awesome-reveal";


export const Main = () => {
  return (
    <article className="main-container">
        <section className="banner-section">
          <Banner />
        </section>

        <section className="body-section">
          <HistoryText />
        </section>

        {/*wavy header*/}
        <Wavy className="wavy" src="/top-wave.svg" alt="" />

        <section className="interest-section">
          <Interest />
          <Photos />
        </section>

        <Wavy className="wavy" src="/wave.svg" alt="" />

        <section className="body-section">
          <FamSection />
        </section>

        <Footer />
    </article>
  )
}
