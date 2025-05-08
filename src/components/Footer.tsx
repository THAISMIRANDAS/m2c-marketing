// src/components/Footer.tsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #1b2544;
  color: white;
  padding: 2rem;
  text-align: center;
`;

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 M²C Marketing. Todos os direitos reservados.</p>
    </FooterContainer>
  );
};

export default Footer;