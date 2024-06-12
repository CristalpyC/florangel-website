import { H2, Img, LogoContainer } from "../../styles/Style";
import "animate.css";

export const Logo = () => {
  return (
    <LogoContainer className="animate__animated animate__pulse">
        <Img src="/flower.png" alt="" />
        <H2>Florangel</H2>
    </LogoContainer>
  )
}
