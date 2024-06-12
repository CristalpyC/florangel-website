import "./historyImgs.scss";
import { Zoom} from "react-awesome-reveal";

export const HistoryImgs = () => {
  return (
    <div className="history-pics">
      <Zoom>
        <div className="pic1">
          <img src="/history-img1.jpg" alt="Florangel" />
          <img className="start" src="/gold-star-golden-shotting-star.png" alt="" />
          <img className="start2" src="/gold-star-golden-shotting-star.png" alt="" />
        </div>
      </Zoom>
      <Zoom>
        <div className="pic2">
          <img className="rainbow" src="/Arcoiris-Background-PNG.png" alt="" />
          <img src="/history-img2.jpg" alt="Florangel" />
        </div>
      </Zoom>
      <img className="start2" src="/gold-star-golden-shotting-star.png" alt="" />
    </div>
  )
}
