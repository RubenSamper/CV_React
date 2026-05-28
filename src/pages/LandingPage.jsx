import {
    Box,
    Container,
    Typography,
    Button,
    Stack,
    Paper,
    Grid,
    Avatar,
    Chip,
} from "@mui/material";
import { Link } from "react-router-dom";

const skills = [
    "React", "JavaScript", "HTML5 & CSS3", "Material UI",
    "Git & GitHub", "Laravel", "PHP", "Python",
    "Diseño Responsive", "UX/UI", "SQL", "API REST"
];

export default function LandingPage() {
    return (
        <>
            <Box
                sx={{
                    position: "relative",
                    zIndex: 0,
                    mt: { xs: "56px", sm: "64px" },
                    py: { xs: 6, md: 10 },
                    backgroundImage: `url(${import.meta.env.BASE_URL}header.jpg)`,
                    width: "100vw",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    color: "white",
                }}
            >
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
                        Desarrollador de Aplicaciones Web recién titulado. Especializado en
                        frontend con React y con ganas de aportar valor en un equipo
                        profesional.
                    </Typography>

                    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
                        <Button
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
                            variant="outlined"
                            component={Link}
                            color="secondary"
                            to="/contact"
                        >
                            CONTACTO
                        </Button>

                        <Button
                            variant="outlined"
                            component={Link}
                            color="secondary"
                            to="/portfolio"
                            sx={{ borderColor: "rgba(255,255,255,0.5)" }}
                        >
                            VER PROYECTOS
                        </Button>
                    </Stack>
                </Container>
            </Box>

            <Box sx={{ py: 6 }}>
                <Container maxWidth="md">
                    <Paper sx={{ p: 4 }}>
                        <Grid container spacing={4} alignItems="center">
                            <Grid item xs={12} sm={4} sx={{ textAlign: "center" }}>
                                <Avatar
                                    src={`${import.meta.env.BASE_URL}ruben.jpeg`}
                                    alt="Rubén Samper Cruz"
                                    sx={{ width: 180, height: 180, mx: "auto" }}
                                />
                            </Grid>

                            <Grid item xs={12} sm={8}>
                                <Typography variant="h4" gutterBottom sx={{ fontWeight: 700 }}>
                                    Sobre mí
                                </Typography>

                                <Typography color="text.secondary" sx={{ mb: 2 }}>
                                    Recién titulado en Desarrollo de Aplicaciones Web (DAW) en el
                                    IES Al-Ándalus (Almería). Durante mi formación he adquirido
                                    competencias sólidas en desarrollo frontend y backend, trabajando
                                    con tecnologías modernas como React, Laravel y bases de datos
                                    relacionales.
                                </Typography>

                                <Typography color="text.secondary" sx={{ mb: 3 }}>
                                    Me considero una persona responsable, con capacidad de
                                    aprendizaje rápido y muchas ganas de crecer profesionalmente en
                                    el sector del desarrollo web. Busco mi primera oportunidad
                                    laboral para seguir aprendiendo y aportar valor.
                                </Typography>

                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                    Tecnologías y herramientas
                                </Typography>

                                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap", mb: 3 }}>
                                    {skills.map((skill) => (
                                        <Chip key={skill} label={skill} variant="outlined" />
                                    ))}
                                </Box>

                                <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
                                    Información adicional
                                </Typography>

                                <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
                                    <Chip label="Inglés avanzado" variant="outlined" color="primary" />
                                    <Chip label="Permiso de conducir B" variant="outlined" color="primary" />
                                    <Chip label="Vehículo propio" variant="outlined" color="primary" />
                                    <Chip label="Incorporación inmediata" variant="outlined" color="primary" />
                                </Box>
                            </Grid>
                        </Grid>
                    </Paper>
                </Container>
            </Box>
        </>
    );
}
