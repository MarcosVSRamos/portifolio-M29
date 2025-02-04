import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";
import { Card, LinkBotao } from "./styles";

const Projeto = () => (

  <Card>
    <Titulo>Projeto Lista de tarefas</Titulo>
    <Paragrafo tipo="secundaria">
      Lista de tarefas feitas com VueJS
    </Paragrafo>
    <LinkBotao>Vizualizar</LinkBotao>
  </Card>

)

export default Projeto
