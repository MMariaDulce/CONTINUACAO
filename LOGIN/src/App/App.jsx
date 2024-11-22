import React, { useState } from 'react';
import { Container, Header, Form, Input, Button, Footer, HeaderLinks, HeaderLink, ConcluirButton, SimNaoButton } from "../styled/styled";

function App() {
  // Estado para armazenar se foi concluído ou não
  const [isConcluido, setIsConcluido] = useState(null); // Null é o valor inicial, ainda não foi escolhido

  // Funções para mudar o estado quando "Sim" ou "Não" for clicado
  const handleSimClick = () => {
    setIsConcluido(true); // Define como concluído
  };

  const handleNaoClick = () => {
    setIsConcluido(false); // Define como não concluído
  };

  return (
    <Container>
      <Header>
        <HeaderLinks>
          <HeaderLink href="#">LOG</HeaderLink>
          <HeaderLink href="#">Tabela de Registro</HeaderLink>
          <HeaderLink href="#">Cadastro de Atendimento</HeaderLink>
          <HeaderLink href="#">Gráficos de Atendimentos</HeaderLink>
        </HeaderLinks>
      </Header>
      <Form>
        <Input type="text" placeholder="Sargento ou Cabo" />
        <Input type="text" placeholder="Equipe" />

        {/* Pergunta de Concluído com dois botões "Sim" e "Não" */}
        <div>
          <SimNaoButton onClick={handleSimClick} active={isConcluido === true}>Sim</SimNaoButton>
          <SimNaoButton onClick={handleNaoClick} active={isConcluido === false}>Não</SimNaoButton>
        </div>

        <Input type="text" placeholder="Qual foi a solução aplicada?" />
        <Button type="submit">Enviar</Button>
      </Form>
      <Footer>Todos direitos reservados</Footer>
    </Container>
  );
}

export default App;








