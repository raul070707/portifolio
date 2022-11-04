import { ReactNode } from "react";
import { ProjectsProvider } from "./Projects";
import { ThemeProvider } from "./Theme";

interface ProvidersProps {
  children: ReactNode;
}

export const Providers = ({ children }: ProvidersProps) => {
  return (
    <ProjectsProvider>
      <ThemeProvider>{children}</ThemeProvider>
    </ProjectsProvider>
  );
};
