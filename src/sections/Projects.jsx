import ProjectCard from '../components/ProjectCard';
import './Projects.css';

// Dados dos projetos (idealmente viriam de uma API ou arquivo JSON)
const projectData = [
  {
    title: "Sistema de Gestão com API REST",
    img: "/atendebarber.png",
    description: "Sistema de agendamento inteligente para barbearias, desenvolvido com Laravel e Filament, integrado ao WhatsApp via WppConnect e com automações orquestradas pelo n8n. Permite gestão completa de horários, serviços e profissionais, além de confirmações automáticas e lembretes via WhatsApp.",
    tags: ["Laravel", "API REST", "MySQL", "JWT", "Docker"],
    liveUrl: "https://sistema-agendamento-1-app.zfmmtg.easypanel.host/login", // Link para a demo ao vivo
    repoUrl: "https://github.com/IzaiasCastro/sistema-automacao-wpp-n8n"  // Link para o repositório no GitHub
  },
];


function Projects() {
  return (
    <section id="projects">
      <h2>Meus Projetos</h2>
      <div className="projects-grid">
        {projectData.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
