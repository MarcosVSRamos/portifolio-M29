import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Titulo'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Titulo fontSize={17}>Marcos Ramos</Titulo>
      <Paragrafo tipo="secundaria" fontSize={16}>
        marcosvsramos
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Estudante Full-Stack
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
