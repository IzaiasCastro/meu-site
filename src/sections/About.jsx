function About() {
  const skills = [
  "Laravel",
  "PHP",
  "APIs REST",
  "n8n",
  "MySQL",
  "Vue.js",
  "JavaScript (ES6+)",
  "Git",
  "Docker"
];


  return (
    <section id="about">
      <h2>Sobre Mim</h2>
      <p>
        Sou desenvolvedor de sistemas com experiência em desenvolvimento backend e frontend, atuando principalmente com Laravel, APIs REST e integrações entre sistemas. Tenho vivência na criação de automações utilizando n8n, consumo e exposição de APIs, além de modelagem e manipulação de dados em bancos relacionais como MySQL e SQL Server.

Também desenvolvo interfaces modernas e responsivas utilizando React e Vue, sempre focando em código limpo, organização, performance e facilidade de manutenção. Gosto de entender o problema do negócio para entregar soluções eficientes, escaláveis e bem documentadas.

      </p>
      <h3>Minhas Habilidades:</h3>
      <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
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
