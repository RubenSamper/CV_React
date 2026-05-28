import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";

export default function Projects() {
  return (
    <Grid container spacing={3}>
      {projects.map((p, index) => (
        <Grid item key={p.title + "-" + index} xs={12} sm={6} md={6}>
          <ProjectCard
            title={p.title}
            description={p.description}
            image={p.image}
            link={p.link}
            tags={p.tags}
            extraDescription={p.extraDescription}
          />
        </Grid>
      ))}
    </Grid>
  );
}
