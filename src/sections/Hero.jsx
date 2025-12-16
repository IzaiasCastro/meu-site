import './Hero.css'; // Estilos específicos para esta seção

function Hero() {
  return (
    <section id="hero" className="hero">
      <h1>Olá, eu sou [Seu Nome]</h1>
      <p className="subtitle">Desenvolvedor Front-end | Apaixonado por Tecnologia</p>
      <p>Transformando ideias em realidade digital através de código limpo e design funcional.</p>
      <a href="#contact" className="cta-button">Entre em Contato</a>
    </section>
  );
}

export default Hero;
