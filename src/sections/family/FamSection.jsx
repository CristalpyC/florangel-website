import { Text, Title } from "../../styles/Style";
import "./famStyle.scss";
import { Slide } from "react-awesome-reveal";

export const FamSection = () => {
  return (
    <section id="fam-section">
        <div>
            <Slide><Title>Mi familia</Title></Slide>
            <Text>
              Estoy emocionada de compartirles un vistazo de mi increíble familia. 
              Mi mamá, Flor, es el corazón de nuestro hogar. Con su amor infinito y 
              sabiduría, siempre está ahí para guiarme y cuidarme. Mi papá, Ángel, 
              es mi héroe. Su fuerza y cariño me hacen sentir segura y amada cada día. Luego están mis hermanas, Dariana y Ángela, mis mejores amigas. Con ellas, cada día es una aventura llena de risas y diversión. Juntas, formamos un equipo imparable, unido por el amor y la complicidad. Y no puedo olvidar a nuestra perrita, Cielo, que con su energía y alegría añade aún más amor a nuestra familia.
            </Text>
        </div>
        <img src="/fam-portrait.png" alt="" />
        <img className="mobile-img" src="mobile-fam-portrait.png" alt="" />
    </section>
  )
}
