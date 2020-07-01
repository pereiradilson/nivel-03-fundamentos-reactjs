import React from 'react';

import { Link, NavLink } from 'react-router-dom';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

interface HeaderProps {
  size?: 'small' | 'large';
}

const Header: React.FC<HeaderProps> = ({ size = 'large' }: HeaderProps) => (
  <Container size={size}>
    <header>
      <Link to="/">
        <img src={Logo} alt="GoFinances" />
      </Link>
      <nav>
        <NavLink
          to="/"
          activeClassName="selected"
          isActive={(match, location) => {
            if (location.pathname === '/') {
              return true;
            }

            return false;
          }}
        >
          Listagem
        </NavLink>
        <NavLink to="/import" activeClassName="selected">
          Importar
        </NavLink>
      </nav>
    </header>
  </Container>
);

export default Header;
