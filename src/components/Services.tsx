// src/components/Services.tsx
import React from 'react';
import styled from 'styled-components';

const ServicesContainer = styled.section`
  background-color: #1b2544;
  color: white;
  padding: 4rem 2rem;
  text-align: center;
`;

const ServiceItem = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const ServiceImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
  margin-right: 1rem;
`;

const ServiceDetails = styled.div`
  flex: 1;
`;

const ServiceTitle = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.5rem;
`;

const ServiceDescription = styled.p`
  margin-bottom: 0;
`;

const Services: React.FC = () => {
  const services = [
    {
      image: 'https://via.placeholder.com/100',
      title: 'Mídias Sociais',
      description: 'Crie presença online e gere resultados de verdade!',
    },
    {
      image: 'https://via.placeholder.com/100',
      title: 'Produção de Vídeos',
      description: 'Are you thinking of selling your home? Let us help you!',
    },
    {
      image: 'https://via.placeholder.com/100',
      title: 'Tráfego Pago',
      description: 'Faça anúncios e aumente suas vendas!',
    },
  ];

  return (
    <ServicesContainer>
      <h2>Nossos Serviços</h2>
      <div>
        {services.map((service, index) => (
          <ServiceItem key={index}>
            <ServiceImage src={service.image} alt={service.title} />
            <ServiceDetails>
              <ServiceTitle>{service.title}</ServiceTitle>
              <ServiceDescription>{service.description}</ServiceDescription>
            </ServiceDetails>
          </ServiceItem>
        ))}
      </div>
    </ServicesContainer>
  );
};

export default Services;