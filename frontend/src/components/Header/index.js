import React from 'react';
import { Link } from 'react-router-dom';

import logo from '~/assets/logo-purple.svg';

import { Container, Content, Profile } from './styles';

export default function Header() {
  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="Gobarber" />
          <Link to="/dashboard">DASHBOARD</Link>
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>Alexadre Junior </strong>
              <Link to="/profile">Meu perfil </Link>
            </div>
            <img
              src="https://api.adorable.io/avatars/50/abott@adorable.png"
              alt="Alexandre Junior"
            />
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
