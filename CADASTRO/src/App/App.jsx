
import {
  Navbar,
  NavbarLink,
  Container,
  Title,
  FormGroup,
  Label,
  Input,
  Select,
  Textarea,
  SubmitButton,
  Footer,
} from '../styled/styled'; 

const App = () => {
  return (
    <div>
      <Navbar>
        <img
          alt="Agent Log Logo"
          height="30"
          src="https://storage.googleapis.com/a1aa/image/bqfeHPbFueKhmJM5vXoMl5Wpjr4Tw7mpfzeh3WFOf5BWeVx5JA.jpg"
          width="30"
        />
        <div>
          <NavbarLink href="#">TABELA DE REGISTRO</NavbarLink>
          <NavbarLink href="#">CADASTRO DE ATENDIMENTO</NavbarLink>
          <NavbarLink href="#">GRÁFICOS DE ATENDIMENTOS</NavbarLink>
        </div>
      </Navbar>
      <Container>
        <Title>Cadastro de Atendimento</Title>
        <FormGroup>
          <Label htmlFor="sargento">Sargento / Cabo</Label>
          <Input id="sargento" placeholder="Sargento ou Cabo" type="text" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="equipe">Equipe</Label>
          <Input id="equipe" placeholder="Equipe" type="text" />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="concluido">Concluido</Label>
          <Select id="concluido">
            <option>Sim</option>
            <option>Não </option>
          </Select>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="solucao">Qual foi a solução aplicada?</Label>
          <Textarea id="solucao"></Textarea>
        </FormGroup>
        <SubmitButton>ENVIAR</SubmitButton>
      </Container>
      <Footer>Todos direitos reservados</Footer> 
    </div>
  );
};

export default App;