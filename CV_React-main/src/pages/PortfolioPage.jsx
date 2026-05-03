import { Box, Typography } from "@mui/material";
import Projects from "../components/Projects";

export default function PortfolioPage() {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                Portfolio
            </Typography>
            <Box className="divProyectos">

                <Projects />
                <Projects />
            </Box>
        </>
    );
}
