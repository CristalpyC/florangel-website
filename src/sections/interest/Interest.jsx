import { InterestPhotos } from "../../components/interest-photos/InterestPhotos";
import { Text, Title } from "../../styles/Style";
import "./interestStyle.scss";

export const Interest = () => {
  return (
    <>
    <article className="interest-container">
      <section className="info">
        <Title>Intereses</Title>
        <Text>
          Florangel encuentra felicidad en cada bocado, 
          ya que es una entusiasta amante de la comida. 
          Desde su plato favorito hasta nuevos sabores 
          por descubrir, cada comida es una aventura 
          deliciosa para ella. Además, Florangel 
          disfruta al máximo jugando con sus adorables 
          hermanas, creando vínculos inquebrantables 
          llenos de risas y juegos. Su espíritu aventurero
          la lleva a explorar nuevos lugares y 
          descubrir el mundo que la rodea con curiosidad 
          y asombro. No hay momento demasiado precioso 
          para capturar, ya que Florangel adora tomarse 
          fotos para crear recuerdos inolvidables. 
        </Text>
        <Text>
          Pero no todo es acción, Florangel también 
          encuentra tranquilidad y disfrute en la magia 
          de los libros, explorando mundos imaginarios 
          página tras página. Y cuando llega el momento 
          de compartir sus emociones y experiencias, 
          no hay nada como una buena charla por teléfono 
          para conectar con sus seres queridos.
        </Text>
      </section>
      <section><InterestPhotos /></section>
    </article>
    </>
  )
}
