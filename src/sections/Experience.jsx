// src/sections/Experience.jsx

import './Experience.css';

// Dados da sua experiência. Adicione ou remova itens conforme necessário.
const experienceData = [
  {
    role: "Desenvolvedor Full Stack Pleno",
    company: "CajuTec",
    period: "FEV 2023 - ATUAL",
    description: "Desenvolvimento e manutenção de sistemas web completos, utilizando Laravel no backend para criar APIs RESTful robustas e React no frontend para interfaces dinâmicas. Responsável por automações com n8n em projetos pessoais fora do trabalho. Atuação com Docker, Git, e metodologias ágeis para garantir entregas de alta qualidade."
  },
  {
    role: "Desenvolvedor Full Stack Júnior II",
    company: "CreativeCode",
    period: "OUT 2020 - FEV 2023",
    description: "Trabalhei em projetos variados, desde sites institucionais até sistemas de gestão empresarial. Utilizei Laravel para o backend e Vuejs para o frontend. Trabalhei com Docker, Git e metodologias ágeis, além de participar de reuniões com clientes para entender suas necessidades."
  },
  {
    role: "Desenvolvedor Full Stack Júnior",
    company: "CajuTec",
    period: "FEV 2019 - AGO 2020",
    description: "Atuei no desenvolvimento de novas funcionalidades para sistemas existentes, além de participar da criação sistemas do zero, sempre com foco em Laravel e Vuejs."
  },
  {
    role: "Estagiário em Desenvolvimento",
    company: "CajuTec",
    period: "FEV 2018 - FEV 2019",
    description: "Apoio na manutenção de sistemas legados e desenvolvimento de pequenas funcionalidades, adquirindo experiência prática com Laravel."
  },
];

function Experience() {
  return (
    <section id="experience">
      <h2>Experiência Profissional</h2>
      <div className="timeline">
        {experienceData.map((item, index) => (
          <div className="timeline-item" key={index}>
            <div className="timeline-content">
              <h3>{item.role}</h3>
              <span className="timeline-company">{item.company}</span>
              <span className="timeline-period">{item.period}</span>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
