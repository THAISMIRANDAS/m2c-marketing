// src/components/ContactForm.tsx
import React, { useState } from 'react';
import styled from 'styled-components';

const ContactFormContainer = styled.section`
  background-image: url('https://via.placeholder.com/1920x600'); /* Substitua pela imagem real */
  background-size: cover;
  background-position: center;
  color: #1b2544;
  padding: 5rem 2rem;
  text-align: center;
`;

const ContactForm = styled.form`
  max-width: 400px;
  margin: 0 auto;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
`;

const SubmitButton = styled.button`
  background-color: #1b2544;
  color: white;
  padding: 0.5rem 1rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #144385;
  }
`;

const ContactFormComponent: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    // Envie os dados para o servidor aqui
  };

  return (
    <ContactFormContainer>
      <h2>Cresça com a Gente!</h2>
      <ContactForm onSubmit={handleSubmit}>
        <Label>
          Nome:
          <Input type="text" name="name" value={formData.name} onChange={handleChange} />
        </Label>
        <Label>
          Telefone:
          <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} />
        </Label>
        <Label>
          Mensagem:
          <TextArea name="message" value={formData.message} onChange={handleChange} />
        </Label>
        <SubmitButton type="submit">Enviar</SubmitButton>
      </ContactForm>
      <div>
        <span>m2c.publicidades@gmail.com</span>
        <span>@m2c.mkt</span>
      </div>
    </ContactFormContainer>
  );
};

export default ContactFormComponent;