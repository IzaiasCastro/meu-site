function About() {
  const skills = ["React", "JavaScript (ES6+)", "TypeScript", "Node.js", "HTML5", "CSS3", "Git"];

  return (
    <section id="about">
      <h2>Sobre Mim</h2>
      <p>
        Sou um desenvolvedor de software com experiência em criar aplicações web modernas e responsivas.
        Tenho um forte interesse em performance, acessibilidade e em escrever código que seja fácil de manter e escalar.
        Atualmente, estou focado em aprofundar meus conhecimentos no ecossistema React e explorar novas tecnologias.
      </p>
      <h3>Minhas Habilidades:</h3>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
        {skills.map(skill => (
          <li key={skill} style={{ background: '#333', padding: '5px 10px', borderRadius: '5px' }}>
            {skill}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default About;
