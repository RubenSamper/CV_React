import { Grid } from "@mui/material";
import ProjectCard from "./ProjectCard";
import projects from "../data/projects.json";

export default function Projects() {
    return (
        <Grid container spacing={2}>
            {projects.map((p) => (
                <Grid item key={p.title} xs={12} sm={6} md={4}>
                    <ProjectCard
                        title={p.title}
                        description={p.description}
                        image={p.image}
                        link={p.link}
                        creator={p.creator}
                    />
                </Grid>
            ))}
        </Grid>
    );
}
