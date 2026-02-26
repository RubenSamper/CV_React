import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Paper,
    Grid,
    Avatar,
} from "@mui/material";
import { Link } from "react-router-dom";

export default function LandingPage() {
    return (
        <>
            {/* HERO */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 0,
                    mt: { xs: "56px", sm: "64px" },
                    py: { xs: 6, md: 10 },
                    backgroundImage: "url(/header.jpg)",
                    width: "100vw",

                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                }}
            >
                {/* Overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        bgcolor: "rgba(0,0,0,0.55)",
                        zIndex: 0,
                    }}
                />

                <Container maxWidth="md" sx={{ position: "relative", zIndex: 1 }}>
                    <Typography variant="h3" sx={{ fontWeight: 700 }} gutterBottom>
                        Hola, soy Rubén Samper Cruz
                    </Typography>

                    <Typography variant="h6" sx={{ mb: 4 }}>
                        Estudiante de Desarrollo de Aplicaciones Web. Me gusta crear interfaces limpias y
                        proyectos con React.
                    </Typography>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Button
                            className="btnGit"
                            variant="contained"
                            component="a"
                            color="secondary"
                            href="https://github.com/RubenSamper"
                            target="_blank"
                            rel="noreferrer"
                        >
                            MI GITHUB
                        </Button>

                        <Button
                            className="btnCont"
                            variant="outlined"
                            component={Link}
                            color="secondary"
                            to="/contact"
                        >
                            CONTACTO
                        </Button>
                    </Stack>
                </Container>
            </Box>

            {/* SOBRE MÍ */}
            <Box sx={{ py: 6, }}>
                <Container maxWidth="md">
                    <Paper sx={{ p: 3 }}>
                        <Grid container spacing={3} alignItems="center" sx={{ backgroundColor: "#ffffff" }}>
                            <Grid item xs={12} sm={4}>
                                <Avatar
                                    src="/public/ruben.jpeg"
                                    alt="Rubén Samper Cruz"
                                    sx={{ width: 160, height: 160, mx: { xs: "auto", sm: 0 } }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={8}>
                                <Typography variant="h4" gutterBottom>
                                    Sobre mí
                                </Typography>

                                <Typography color="text.secondary" sx={{ mb: 2 }}>
                                    Soy estudiante de DAW en el IES Al-Ándalus (Almería). Me interesa el desarrollo
                                    frontend con React y el diseño de interfaces.
                                </Typography>

                                <Typography variant="h6" gutterBottom>
                                    Habilidades a destacar
                                </Typography>

                                <Typography color="text.secondary">- Puntual.</Typography>
                                <Typography color="text.secondary">- Resolutivo.</Typography>
                                <Typography color="text.secondary">
                                    - Ganas de seguir aprendiendo en entorno laboral.
                                </Typography>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}