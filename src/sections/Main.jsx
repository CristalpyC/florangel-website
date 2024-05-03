import { Banner } from "../components/banner/Banner"
import { HistoryImgs } from "../components/history-photos/HistoryImgs";
import { HistoryText } from "../components/history-text/HistoryText";
import "./mainStyle.scss";

export const Main = () => {
  return (
    <main className="main-container">
        <section className="banner-section">
          <Banner />
          {/*<div className="wave"></div>*/}
        </section>
        <section className="body-section">
          <HistoryText />
          {/*<History />*/}
        </section>
    </main>
  )
}
