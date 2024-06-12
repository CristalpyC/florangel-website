import { Container, GalSection, Imgs, Titleh1 } from "../../styles/Style";
import { Bounce } from "react-awesome-reveal";

export const Photos = () => {
  return (
    <GalSection id="gallery-photos">
      <Titleh1>Galería de momentos especiales</Titleh1>
      <Bounce>
        <Container>
          <Imgs src="/cutie-pic-2.jpg" alt="" />
          <Imgs src="/cutie-pic-3.jpg" alt="" />
          <Imgs src="/fam-img-2.jpg" alt="" />
        </Container>
        <Container>
          <Imgs src="/cutie-pic-4.jpg" alt="" />
          <Imgs src="/cutie-pic-5.jpg" alt="" />
          <Imgs src="/cutie-pic-6.jpg" alt="" /> 
        </Container>
      </Bounce>
    </GalSection>
    
  )
}
