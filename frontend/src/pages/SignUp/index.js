import React from 'react';
import { Link } from 'react-router-dom';
import logo from '~/assets/logo.svg';

// import { Container } from './styles';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="GoBarber" />
      <form>
        <input type="text" placeholder="Nome completo" />
        <input type="email" placeholder="Seu e-mail" />
        <input type placeholder="Sua senha secreta" />

        <button type="submit">Criar Conta </button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
