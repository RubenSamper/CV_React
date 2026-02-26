import { useState } from "react";
import { Card, CardMedia, CardContent, Typography, Button, Collapse, Box, } from "@mui/material";

export default function ProjectCard({ title, description, image, link, creator }) {
    const [open, setOpen] = useState(false);

    // Se añade la BASE_URL para que sea relativo al path donde está desplegado el proyecto , en este caso CV_React
    const imageUrl = `${import.meta.env.BASE_URL}${image}`;

    return (
        <Card sx={{ maxWidth: 380 }}>
            {image && (
                <Box onClick={() => setOpen((v) => !v)} sx={{ cursor: "pointer" }}>
                    <CardMedia
                        component="img"
                        image={imageUrl}
                        alt={title}
                        sx={{ height: 140, objectFit: "contain", p: 2 }}
                    />
                </Box>
            )}

            <Collapse in={open} timeout="auto" unmountOnExit>
                <CardContent>
                    <Typography variant="h6" gutterBottom>
                        {title}
                    </Typography>

                    <Typography variant="body2" sx={{ mb: 1 }}>
                        {description}
                    </Typography>

                    {creator && (
                        <Typography variant="caption" color="text.secondary" display="block" sx={{ mb: 2 }}>
                            Creado por: {creator}
                        </Typography>
                    )}

                    <Box sx={{ display: "flex", gap: 1 }}>
                        {link && (
                            <Button
                                variant="contained"
                                size="small"
                                href={link}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Ver proyecto
                            </Button>
                        )}

                        <Button size="small" onClick={() => setOpen(false)}>
                            Cerrar
                        </Button>
                    </Box>
                </CardContent>
            </Collapse>

            {!image && (
                <CardContent>
                    <Button onClick={() => setOpen((v) => !v)}>
                        {open ? "Cerrar" : "Abrir"}
                    </Button>
                </CardContent>
            )}
        </Card>
    );
}
