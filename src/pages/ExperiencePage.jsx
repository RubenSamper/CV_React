import { Typography } from "@mui/material";
import ExperienceItem from "../components/ExperienceItem";

const experiencia = [
    {
        role: "Estudiante de 2º Año de Desarrollo de Aplicaciones Web",
        place: "Almería, IES Al-Ándalus",
        dates: "2021-2026",
        details: [
            "Apasionado por el desarrollo de aplicaciones web",
            "Aprendiendo React, React Router y Material UI",
            "Creando componentes reutilizables",
            "Aprendiendo Laravel",
            "Titulación de CISCO de programación avanzada en python"
        ],
    },

];

export default function ExperiencePage() {
    return (
        <>
            <Typography variant="h4" gutterBottom>
                Experiencia
            </Typography>

            {experiencia.map((exp) => (
                <ExperienceItem
                    key={`${exp.role}-${exp.place}`}
                    role={exp.role}
                    place={exp.place}
                    dates={exp.dates}
                    details={exp.details}
                />
            ))}
        </>
    );
}
