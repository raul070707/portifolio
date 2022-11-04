import { createContext, ReactNode } from "react";

interface ProjectsProviderData {
  projectsList: ProjectsList[];
}

interface ProjectsList {
  title: string;
  img: string;
  git: string;
  app: string;
}

interface ProjectsProviderProps {
  children: ReactNode;
}

const duemarketimg = require("../../assets/img/Duemarket.png");

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
    },
  ];

  return (
    <ProjectsContext.Provider value={{ projectsList }}>
      {children}
    </ProjectsContext.Provider>
  );
};
