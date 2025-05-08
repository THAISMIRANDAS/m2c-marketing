// src/components/AboutUs.tsx
import React from 'react';
import styled from 'styled-components';

// Importe as imagens locais
import jessicaImage from '../assets/jessica.jpg';
import paulaImage from '../assets/paula.jpg';
import thaisImage from '../assets/thais.jpg';

const AboutUsContainer = styled.section`
  background-color: #1b2544;
  color: white;
  padding: 4rem 15rem;
  text-align: center;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TextSection = styled.div`
  width: 60%; /* Define o tamanho da coluna de texto */
`;

const ImageSection = styled.div`
  width: 35%; /* Define o tamanho da coluna de imagens */
  display: flex;
  flex-direction: column;
  gap: 1rem; /* Espaço entre as imagens */
`;

const TeamMember = styled.div`
  position: relative;
  overflow: hidden;
`;

const TeamImage = styled.img`
  width: 30%;
  height: auto;
  object-fit: cover;
`;

const TeamName = styled.h3`
  font-size: 1rem;
  margin-top: 0.5rem;
  margin-bottom: 0;
  padding: 0;
  text-align: center;
`;

const AboutUs: React.FC = () => {
  return (
    <AboutUsContainer>
      <TextSection>
        <h3 style={{ textAlign: 'center' }}>SOBRE NÓS</h3>
        <p style={{ textAlign: 'justify' }}>
          Somos Jéssica, Paula e Thais e juntas unimos o marketing digital e mercado imobiliário para transformar sua presença online e gerar resultados de verdade.
        </p>
      </TextSection>

      {/* Coluna de Imagens */}
      <ImageSection>
        <TeamMember>
          <TeamImage src={jessicaImage} alt="Jéssica" />
          <TeamName>Jéssica</TeamName>
        </TeamMember>
        <TeamMember>
          <TeamImage src={paulaImage} alt="Paula" />
          <TeamName>Paula</TeamName>
        </TeamMember>
        <TeamMember>
          <TeamImage src={thaisImage} alt="Thais" />
          <TeamName>Thais</TeamName>
        </TeamMember>
      </ImageSection>
    </AboutUsContainer>
  );
};

export default AboutUs;