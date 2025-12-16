import './ProjectCard.css';

function ProjectCard({ project }) {
  const { title, description, tags, liveUrl, repoUrl } = project;

  return (
    <div className="project-card">
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
