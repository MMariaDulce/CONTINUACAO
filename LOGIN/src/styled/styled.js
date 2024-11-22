import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
`;

export const Header = styled.header`
  background-color: #003366;
  padding: 20px;
`;

export const HeaderLinks = styled.nav`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const HeaderLink = styled.a`
  color: white;
  text-decoration: none;
  font-size: 16px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 10px;
  background-color: #003366;
  color: white;
  margin-top: 20px;
`;

export const SimNaoButton = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin: 5px;
  background-color: ${({ active }) => (active ? "#28a745" : "#f8f9fa")};
  color: ${({ active }) => (active ? "white" : "#007bff")};
  cursor: pointer;

  &:hover {
    background-color: ${({ active }) => (active ? "#218838" : "#e2e6ea")};
  }
`;
export const ConcluirButton = styled.button`
  padding: 10px 20px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  
  &:hover {
    background-color: #45a049;
  }
`;

export const HeaderTitle = styled.h1`
  color: white;
  text-align: center;
`;





