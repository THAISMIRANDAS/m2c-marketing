// src/components/ClientProperties.tsx
import React from 'react';
import styled from 'styled-components';

const ClientPropertiesContainer = styled.section`
  background-color: #1b2544;
  color: white;
  padding: 4rem 2rem;
`;

const PropertyCard = styled.div`
  display: flex;
  margin-bottom: 2rem;
`;

const PropertyImage = styled.img`
  width: 300px;
  height: 200px;
  object-fit: cover;
  margin-right: 2rem;
`;

const PropertyDetails = styled.div`
  flex: 1;
`;

const PropertyTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 1rem;
`;

const PropertyDescription = styled.p`
  margin-bottom: 1rem;
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

const ClientProperties: React.FC = () => {
  const properties = [
    {
      image: 'https://via.placeholder.com/300x200',
      title: '8,000 sq. ft. mixed-use property in Santa Solana',
      description: 'Entice prospective buyers with a clearly written description that lists your property’s most attractive feature.',
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: 'Classic suburban home 3BR with parking and backyard patio',
      description: 'Entice prospective buyers with a clearly written description that lists your property’s most attractive feature.',
    },
    {
      image: 'https://via.placeholder.com/300x200',
      title: '2BR apartment in uptown Belden Park',
      description: 'Entice prospective buyers with a clearly written description that lists your property’s most attractive feature.',
    },
  ];

  return (
    <ClientPropertiesContainer>
      <h2>Nossos Clientes</h2>
      {properties.map((property, index) => (
        <PropertyCard key={index}>
          <PropertyImage src={property.image} alt={property.title} />
          <PropertyDetails>
            <PropertyTitle>{property.title}</PropertyTitle>
            <PropertyDescription>{property.description}</PropertyDescription>
            <CTAButton>INQUIRE NOW</CTAButton>
          </PropertyDetails>
        </PropertyCard>
      ))}
    </ClientPropertiesContainer>
  );
};

export default ClientProperties;