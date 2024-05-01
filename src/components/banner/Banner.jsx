import "./bannerStyle.scss";

export const Banner = () => {
  return (
    <div className="banner-container">
        <div className="banner-info">
            <h1>¡Bienvenidos al rincón de Florangel!</h1>
            <p>
                Un lugar lleno de sonrisas y <br /> momentos especiales.
            </p>
            <button>Explorar</button>
        </div>
        
        <img src="/florangel-img.png" alt="Florangel" />
    </div>
  )
}
