import "./bannerStyle.scss";
import 'animate.css';

export const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <div className="banner-info animate__animated animate__bounceInLeft">
            <h1>¡Bienvenidos al rincón de Florangel!</h1>
            <p>
                Un lugar lleno de sonrisas y <br /> momentos especiales.
            </p>
            <button>Explorar</button>
        </div>
        
        <img className="florangel-pic animate__animated animate__bounceInRight" src="/florangel-img-2.png" alt="Florangel" />
        {/*<div className="florangel-pic2">
          <img src="/florangel-img-2.png" alt="Florangel" />
  </div>*/}
       {/* <div className="wave"></div>*/}
      </div>
      <img className="wavy" src="/wave.svg" alt="" />
    </>
  )
}
