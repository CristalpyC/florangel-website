import { Text, TextLine } from "../../styles/Style";
import { HistoryImgs } from "../history-photos/HistoryImgs";
import "./historyText.scss";

export const HistoryText = () => {
  return (
    <div className="history-section">
      <HistoryImgs />
      <div className="history-container">
        <h3>Sobre mí</h3>
        <h1>Un Viaje de Amor, alegría e inteligencia</h1>
        <Text bgcolor="#FFFF">
            Florangel es una niña llena de energía y alegría, nacida el 20 de mayo 
            del 2021. Desde el momento en que llegó al mundo, ha iluminado nuestras 
            vidas con su sonrisa contagiosa y su espíritu lleno de amor. 
            A pesar de los desafíos que enfrenta cada día, 
            Florangel nos enseña la verdadera belleza de la vida con su positividad 
            inquebrantable y su capacidad para encontrar la felicidad en las pequeñas 
            cosas. 
        </Text>
        <Text bgcolor="#FFFF">
            Desde sus primeros pasos hasta sus travesuras diarias, cada momento con 
            Florangel es un regalo precioso que atesoramos con todo nuestro corazón. 
            Desde su nacimiento, Florangel ha demostrado ser una niña 
            extraordinariamente inteligente y llena de vitalidad. Su mente curiosa y 
            aguda absorbe el mundo que la rodea con asombro y determinación. 
            Cada día, nos sorprende con su capacidad para aprender y su ingenio 
            para resolver problemas. A pesar de los desafíos que enfrenta, 
            Florangel aborda cada situación con una inteligencia y 
            determinación admirables, enseñándonos a todos 
            la verdadera magnitud de su brillantez.
        </Text>
        <TextLine>@el_cromosoma.de_florangel</TextLine>
    </div>
    </div>
  );
}
