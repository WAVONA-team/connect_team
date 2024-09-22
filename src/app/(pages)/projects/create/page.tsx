"use client";
import React, { useState } from "react";

import Container from "@/ui/container/Container";
import SectionWrapper from "@/ui/sectionWrapper/SectionWrapper";
import NavBar from "@/components/navBar/NavBar";
import makeInitialState from "@/ui/counterMultiSelect/helpers/makeInitialState";

import type NewProject from "@/shared/types/extendedModels/NewProject";
import ProjectForm from "@/modules/projectForm/ProjectForm";
const ProjectCreate: React.FC = () => {
  const [dateRange] = useState({
    startDate: new Date(),
    endDate: new Date(),
  });
  const allItems = ["Frontend", "Backend", "UI"];

  const project: Omit<NewProject, "createdAt" | "updatedAt"> = {
    id: "",
    userId: "",
    image: "",
    title: "",
    term: "",
    published: dateRange.startDate,
    deadline: dateRange.endDate,
    status: "Планируется",
    target: "",
    description: "",
    email: "",
    telegram: "",
    discord: "",
    site: "",
    preferredTypeOfCommunication: "",
    requiredPeople: makeInitialState(allItems),
    creator: {
      id: "",
      name: null,
      email: null,
      image: "",
      description: null,
      profession: null,
      isVisibleForTeam: false,
      telegram: null,
      discord: null,
      city: null,
      age: null,
      preferredTypeOfCommunication: null,
      languages: null,
      emailVerified: null,
    },
    members: [],
    responses: [],
  };

  return (
    <Container>
      <NavBar />
      <SectionWrapper className=" mt-12 text-onPrimary-anti-flash-withe">
        <ProjectForm project={project} />
      </SectionWrapper>
    </Container>
  );
};
export default ProjectCreate;
