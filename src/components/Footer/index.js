import React from 'react';

import Logo from '../../assets/Logo.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <img src={Logo} alt="logo" style={ { maxWidth: 168} }/>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export { Footer };
