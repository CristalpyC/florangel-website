import { FooterLine, Message } from "../../styles/Style"

export const Footer = () => {
  const actualYear = new Date().getFullYear();
  return (
    <FooterLine>
        <Message textcolor="#000000">Copyright ©{actualYear} | By <span style={{color: '#EA7DCB'}}>Cristal Tavárez Novas</span></Message>
    </FooterLine>
  )
}
