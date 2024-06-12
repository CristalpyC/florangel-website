import { InterestPhotos } from "../../components/interest-photos/InterestPhotos";
import { Text, Title } from "../../styles/Style";
import "./interestStyle.scss";
import { Slide } from "react-awesome-reveal";

export const Interest = () => {
  return (
    <>
    <article id="interest-container">
      <section className="info">
        <Slide><Title>Interés</Title></Slide>
        <Slide>
          <Text>
            Encuentro felicidad en cada bocado, ya que soy una entusiasta amante de la 
            comida. Desde mi plato favorito hasta nuevos sabores por descubrir, 
            cada comida es una aventura deliciosa para mí. Además, disfruto al máximo 
            jugar con mis adorables hermanas, creando vínculos inquebrantables llenos 
            de risas y juegos. Mi espíritu aventurero me lleva a explorar nuevos lugares
            y descubrir el mundo que me rodea con curiosidad y asombro. No hay momento 
            demasiado precioso para capturar, ya que adoro tomarme fotos para crear 
            recuerdos inolvidables.
          </Text>
        </Slide>

        <Slide>
          <Text>
            Pero no todo es acción, Florangel también 
            encuentra tranquilidad y disfrute en la magia 
            de los libros, explorando mundos imaginarios 
            página tras página. Y cuando llega el momento 
            de compartir sus emociones y experiencias, 
            no hay nada como una buena charla por teléfono 
            para conectar con sus seres queridos.
          </Text>
        </Slide>
      </section>
      <section><InterestPhotos /></section>
    </article>
    </>
  )
}
