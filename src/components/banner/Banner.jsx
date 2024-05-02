import "./bannerStyle.scss";

export const Banner = () => {
  return (
    <>
      <div className="banner-container">
        <div className="banner-info">
            <h1>¡Bienvenidos al rincón de Florangel!</h1>
            <p>
                Un lugar lleno de sonrisas y <br /> momentos especiales.
            </p>
            <button>Explorar</button>
        </div>
        
        <img className="florangel-pic" src="/florangel-img-2.png" alt="Florangel" />
        <div className="florangel-pic2">
          <img src="/florangel-img-2.png" alt="Florangel" />
        </div>
       {/* <div className="wave"></div>*/}
      </div>
    </>
  )
}
