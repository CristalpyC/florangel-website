import { Text, TextLine } from "../../styles/Style";
import { HistoryImgs } from "../history-photos/HistoryImgs";
import "./historyText.scss";
import { Fade } from "react-awesome-reveal";

export const HistoryText = () => {
  return (
    <div id="history-section">
      <HistoryImgs />
      <div className="history-container">
      <Fade>
        <h3>Sobre mí</h3>
        <h1>Un Viaje de Amor, alegría e inteligencia</h1>
        
        <Text bgcolor="#FFFF">
          Hola a todos, soy Florangel, una niña llena de energía y alegría, nacida el 
          14 de junio del 2021. Desde el momento en que llegué al mundo, he iluminado 
          las vidas de quienes me rodean con mi sonrisa contagiosa y mi espíritu lleno
          de amor. A pesar de los desafíos que enfrento cada día, enseño a mi familia
          la verdadera belleza de la vida con mi positividad inquebrantable y mi 
          capacidad para encontrar la felicidad en las pequeñas cosas.
        </Text>
        <Text bgcolor="#FFFF">
          Desde mis primeros pasos hasta mis travesuras diarias, cada momento conmigo 
          es un regalo precioso que atesoran mis seres queridos con todo su corazón. Desde mi nacimiento,
          he demostrado ser una niña extraordinariamente inteligente y llena de 
          vitalidad. Mi mente curiosa y aguda absorbe el mundo que me rodea con 
          asombro y determinación. Cada día, sorprendo a todos con mi capacidad para 
          aprender y mi ingenio para resolver problemas. Además, abordo cada situación con una inteligencia y determinación 
          admirables, enseñando a todos la verdadera magnitud de mi brillantez.
        </Text>
        <TextLine>@el_cromosoma.de_florangel</TextLine>
      </Fade>
    </div>
    </div>
  );
}
