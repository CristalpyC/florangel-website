import { HistoryImgs } from "../../components/history-photos/HistoryImgs";
import { HistoryText } from "../../components/history-text/HistoryText";
import "./history.scss";

export const History = () => {
  return (
    <div className="history-container">
        <HistoryText />
        <HistoryImgs />
    </div>
  )
}
