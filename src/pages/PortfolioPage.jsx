import { Container, Typography, Box } from "@mui/material";
import Projects from "../components/Projects";

export default function PortfolioPage() {
    return (
        <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                Portfolio
            </Typography>
            <Box>
                <Projects />
            </Box>
        </Container>
    );
}
