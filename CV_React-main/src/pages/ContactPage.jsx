import { Box, Container, Typography } from "@mui/material";

export default function ContactPage() {
    return (
        <Container className="contacto" maxWidth="md">
            <Typography className="informacionContacto" component="div" variant="h3" sx={{ fontWeight: 700 }} gutterBottom>
                Contacto
            </Typography>
            <Box className="divInformacion" display={"flex"} flexDirection={"column"} sx={{ backgroundColor: "white", mt: 2, mb: 1 }} borderRadius={"20px"}>
                <Box display={"flex"} alignItems={"center"} sx={{ ml: "20px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3d3b39" viewBox="0 0 16 16">
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
                    </svg>
                    <Typography margin={"20px"} fontSize={"20px"} color="#3d3b39">
                        684232981
                    </Typography>
                </Box>

                <Box display={"flex"} alignItems={"center"} sx={{ ml: "20px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3d3b39" viewBox="0 0 16 16">
                        <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                    </svg>
                    <Typography margin={"20px"} fontSize={"20px"} color="#3d3b39">
                        Huércal de Almería, 04230
                    </Typography>
                </Box>

                <Box display={"flex"} alignItems={"center"} sx={{ ml: "20px" }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#3d3b39" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                    <Typography margin={"20px"} fontSize={"20px"} color="#3d3b39">
                        rubensamper21@gmail.com
                    </Typography>
                </Box>
            </Box>


        </Container >
    );
}