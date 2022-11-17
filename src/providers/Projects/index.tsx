import { createContext, ReactNode } from "react";

interface ProjectsProviderData {
  projectsList: ProjectsList[];
}

interface ProjectsList {
  title: string;
  img: string;
  git: string;
  app: string;
  techs: string[];
}

interface ProjectsProviderProps {
  children: ReactNode;
}

const duemarketimg = require("../../assets/img/duemarket.png");
const kenziehub = require("../../assets/img/kenziehub.png");

export const ProjectsContext = createContext<ProjectsProviderData>(
  {} as ProjectsProviderData
);

export const ProjectsProvider = ({ children }: ProjectsProviderProps) => {
  const projectsList = [
    {
      title: "dueMarket",
      img: duemarketimg,
      git: "https://github.com/raul070707/dueMarket",
      app: "https://duemarket.vercel.app/",
      techs: ["typescript", "react", "styled-components"],
    },
    {
      title: "kenzieHub",
      img: kenziehub,
      git: "https://github.com/raul070707/kenzie-hub",
      app: "https://kenzie-hub-cyan.vercel.app/",
      techs: ["react", "styled-components", "axios"],
    },
  ];

  return (
    <ProjectsContext.Provider value={{ projectsList }}>
      {children}
    </ProjectsContext.Provider>
  );
};
