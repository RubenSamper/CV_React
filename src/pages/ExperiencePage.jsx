import { Container, Typography } from "@mui/material";
import ExperienceItem from "../components/ExperienceItem";

const experiencia = [
    {
        role: "Técnico Superior en Desarrollo de Aplicaciones Web",
        place: "IES Al-Ándalus, Almería",
        dates: "2022-2026",
        details: [
            "Desarrollo web Full-Stack en proyectos académicos",
            "Diseño y maquetación de sitios web responsives con HTML5, CSS3 y JavaScript vanilla",
            "Desarrollo back-end con PHP (Laravel): rutas, controladores, modelos Eloquent y migraciones",
            "Gestión de bases de datos relacionales con MySQL; diseño de esquemas, consultas y procedimientos almacenados",
            "Integración de APIs REST y consumo de datos externos con JavaScript/Fetch API y peticiones AJAX",
            "Control de versiones con Git y GitHub: ramas de trabajo, pull request y resolución de conflictos",
            "Despliegue básico de aplicaciones en entornos Linux (Apache/Nginx, configuración de hosts virtuales)",
            "Aplicación de conceptos de redes: direccionamiento IP, subnetting y configuración básica con Cisco Packet Tracer",
            "Desarrollo de aplicaciones en Java utilizando JavaFX con generación de estadísticas y gráficos interactivos mediante JavaFX Charts",
            "Desarrollo de interfaces dinámicas con React, mediante componentes reutilizables y arquitectura modular, gestión de datos con Hooks y consumo de APIs REST",
        ],
    },
    {
        role: "Python Essentials 1 & 2",
        place: "Cisco Networking Academy",
        dates: "2024-2026",
        details: [
            "Fundamentos de programación estructurada y orientada a objetos con Python",
            "Estructuras de datos, funciones y manejo de errores",
        ],
    },
    {
        role: "NDG Linux Unhatched",
        place: "Cisco Networking Academy",
        dates: "2024-2026",
        details: [
            "Introducción al sistema operativo Linux y línea de comandos",
            "Gestión de archivos, permisos y procesos básicos",
        ],
    },
    {
        role: "Networking Basics",
        place: "Cisco Networking Academy",
        dates: "2024-2026",
        details: [
            "Fundamentos de redes: direccionamiento IP, subnetting y topologías",
            "Configuración básica con Cisco Packet Tracer",
        ],
    },
    {
        role: "IT Essentials (ITE)",
        place: "Cisco Networking Academy",
        dates: "2024-2026",
        details: [
            "Ensamblaje y configuración de hardware y software de ordenadores",
            "Redes domésticas y resolución de problemas técnicos",
        ],
    },
];

export default function ExperiencePage() {
    return (
        <Container maxWidth="md" sx={{ py: 4 }}>
            <Typography variant="h4" gutterBottom sx={{ fontWeight: 700, mb: 3 }}>
                Formación y experiencia
            </Typography>

            {experiencia.map((exp, index) => (
                <ExperienceItem
                    key={exp.role + "-" + index}
                    role={exp.role}
                    place={exp.place}
                    dates={exp.dates}
                    details={exp.details}
                />
            ))}
        </Container>
    );
}
