import React from "react";

import ProjectsPage from "@/pages/projectsPage/ProjectsPage";
import NavBar from "@/components/navBar/NavBar";
import Container from "@/ui/container/Container";

const Projects: React.FC = async () => {

  return (
    <Container>
      <NavBar />
      <ProjectsPage />
    </Container>
  );
};

export default Projects;
