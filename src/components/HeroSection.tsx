// src/components/HeroSection.tsx
import React from 'react';
import styled from 'styled-components';
import backgroundImage from '../assets/house1.jpg'; // Importe a imagem


const HeroContainer = styled.section`
  background-image: url(${backgroundImage}); /* Use a variável aqui */
  background-size: cover;
  background-position: center;
  color: white;
  padding: 10rem 2rem;
  text-align: justify;
  background-blend-mode: multiply; /* Combinação de cores */
  background-color: rgba(0, 0, 0, 0.5); /* Camada preta semi-transparente */
`;

const HeroTitle = styled.h2`
  font-size:2.5rem;
  margin-bottom: 2rem;
`;

const HeroSection: React.FC = () => {
  return (
    <HeroContainer>
      <HeroTitle>Aumente sua presença online!</HeroTitle>
    </HeroContainer>
  );
};

export default HeroSection;