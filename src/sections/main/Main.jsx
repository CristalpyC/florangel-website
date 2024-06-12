import { Banner } from "../../components/banner/Banner"
import { HistoryText } from "../../components/history-text/HistoryText";
import { Interest } from "../interest/Interest";
import "./mainStyle.scss";
import { Wavy } from "../../styles/Style";
import { FamSection } from "../family/FamSection";
import { Footer } from "../../components/footer/Footer";
import { Photos } from "../../components/gallery-photos/Photos";


export const Main = () => {
  return (
    <div className="main-container">
        <article className="banner-section">
          <Banner />
        </article>

        <article className="body-section">
          <HistoryText />
        </article>

        {/*wavy header*/}
        <Wavy className="wavy" src="/top-wave.svg" alt="" />

        <article className="interest-section">
          <Interest />
          <Photos />
        </article>

        <Wavy className="wavy" src="/wave.svg" alt="" />

        <article className="body-section">
          <FamSection />
        </article>

        <Footer />
    </div>
  )
}
