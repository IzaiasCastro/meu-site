import './Hero.css'; // Estilos específicos para esta seção
import { useMediaQuery } from '../hooks/useMediaQuery.js';

function Hero() {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section id="hero" className="hero">
      {isMobile && (
        <img src="/perfil.png" alt="Foto de perfil de Izaias Castro" className="hero-profile-img" />
      )}
      <h1>Olá, eu sou Izaias Castro</h1>
      <p className="subtitle">Desenvolvedor Full Stack | Laravel, APIs REST, Automação e Front-end Moderno</p>
      <p>Crio sistemas escaláveis, APIs bem estruturadas e automações inteligentes que resolvem problemas reais de negócio.</p>
      <a href="#contact" className="cta-button">Entre em Contato</a>
    </section>
  );
}

export default Hero;
