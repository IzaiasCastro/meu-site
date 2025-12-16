import ProjectCard from '../components/ProjectCard';
import './Projects.css';

// Dados dos projetos (idealmente viriam de uma API ou arquivo JSON)
const projectData = [
  {
    title: "Projeto Incrível 1",
    description: "Uma breve descrição do projeto, as tecnologias usadas e o problema que ele resolve.",
    tags: ["React", "API REST", "Styled Components"],
    liveUrl: "#", // Link para a demo ao vivo
    repoUrl: "#"  // Link para o repositório no GitHub
  },
  {
    title: "Projeto Incrível 2",
    description: "Outro projeto fantástico que demonstra suas habilidades em resolver problemas complexos.",
    tags: ["Node.js", "Express", "MongoDB"],
    liveUrl: "#",
    repoUrl: "#"
  }
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
