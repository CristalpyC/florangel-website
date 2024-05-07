import { Titleh1 } from "../../../styles/Style";
import "./photos.scss";

export const Photos = () => {
  return (
    <section className="gallery">
      <Titleh1>Galería de momentos especiales</Titleh1>
      <div>
        <img src="/cutie.jpg" alt="" />
        <img src="/fam.jpg" alt="" />
        <img src="/fam-img-2.jpg" alt="" />
      </div>
      <div>
        <img src="/history-img1.jpg" alt="" />
        <img src="/fam-img-2.jpg" alt="" />
        <img src="/cutie.jpg" alt="" /> 
      </div>
    </section>
  )
}
