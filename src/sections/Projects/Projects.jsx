import styles from './ProjectsStyles.module.css';
import packngo from '../../assets/packngo.png';
import port from '../../assets/portfolio.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={packngo}
          link="https://github.com/pbconcon/Pack-n-Go.git"
          h3="Pack and Go"
          p="A PROGRESSIVE WEB MOVING SERVICE APP"
        />
        <ProjectCard
          src={port}
          link="https://github.com/pbconcon/concon-portfolios.git"
          h3="Sample portfolio"
          p="Project Portfolio"
        />
      </div>
    </section>
  );
}

export default Projects;
