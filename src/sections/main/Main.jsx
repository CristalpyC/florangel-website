import { Banner } from "../../components/banner/Banner"
import { HistoryText } from "../../components/history-text/HistoryText";
import { Interest } from "../interest/Interest";
import { Photos } from "../../components/photos/gallery-photos/Photos";

import "./mainStyle.scss";

export const Main = () => {
  return (
    <main className="main-container">
        <section className="banner-section">
          <Banner />
        </section>

        <section className="body-section">
          <HistoryText />
        </section>

        <img className="wavy" src="/top-wave.svg" alt="" />
        <section className="interest-section">
          <Interest />
          <Photos />
        </section>
    </main>
  )
}
