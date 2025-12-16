import './Header.css';
import { useMediaQuery } from '../hooks/useMediaQuery.js';

function Header() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <header className="header">
      <a href="#hero" className="logo-container">
        {!isMobile && (
          <img src="/perfil.png" alt="Foto de perfil de Izaias Castro" className="logo-image" />
        )}
        <span className="logo-name">Izaias Castro</span>
      </a>
      <nav>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
