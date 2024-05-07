import { Text, Title } from "../../styles/Style";
import "./famStyle.scss";

export const FamSection = () => {
  return (
    <section className="fam-section">
        <div>
            <Title>Mi familia</Title>
            <Text>Estoy emocionada de compartirles un vistazo a mi 
                increíble familia. Mi mamá, Flor, es el corazón de 
                nuestro hogar. Con su amor infinito y su sabiduría, 
                siempre está ahí para guiarme y cuidarme. 
                Mi papá, Ángel, es mi héroe. Su fuerza y su cariño me 
                hacen sentir segura y amada cada día. Luego están mis 
                hermanas, Dariana y Ángela, mis mejores amigas. 
                Con ellas, cada día es una aventura llena de risas y 
                diversión. Juntas, formamos un equipo imparable, 
                unidos por el amor y la complicidad.
            </Text>
        </div>
        <img src="/fam-portrait.png" alt="" />
        <img className="mobile-img" src="mobile-fam-portrait.png" alt="" />
    </section>
  )
}
