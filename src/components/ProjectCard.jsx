import './ProjectCard.css';

function ProjectCard({ project }) {
  const { title, img, description, tags, liveUrl, repoUrl } = project;

  return (
    <div className="project-card">
      <img src={img} alt={`Imagem do projeto ${title}`} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tags">
        {tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
      </div>
      <div className="links">
        <a href={liveUrl} target="_blank" rel="noopener noreferrer">Ver Demo</a>
        <a href={repoUrl} target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>
    </div>
  );
}

export default ProjectCard;
