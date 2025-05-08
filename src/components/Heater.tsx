// src/components/Header.tsx
import React from 'react';
import styled from 'styled-components';
import logoImage from '../assets/logo-menor.png'; // Importe a imagem


const HeaderContainer = styled.header`
  background-color: #1b2544;
  color: white;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 250px;
  height: auto;
  margin: 0;
`;

const CTAButton = styled.button`
  background-color: transparent;
  border: 2px solid white;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: white;
    color: #1b2544;
  }
`;

const Header: React.FC = () => {
  return (
    <HeaderContainer>
      <Logo src={logoImage} alt="M²C Marketing" /> {/* Use a imagem importada */}
      <CTAButton>CRESCA AGORA!</CTAButton>
    </HeaderContainer>
  );
};

export default Header;