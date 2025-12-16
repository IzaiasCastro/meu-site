import './Header.css'; // Criaremos este arquivo a seguir

function Header() {
  return (
    <header className="header">
      <div className="logo">Seu Nome</div>
      <nav>
        <a href="#about">Sobre</a>
        <a href="#projects">Projetos</a>
        <a href="#contact">Contato</a>
      </nav>
    </header>
  );
}

export default Header;
