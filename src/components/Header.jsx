import { AppBar, Toolbar, Typography, Button, Card, CardContent, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Nav from "./Nav"

export default function Header() {
    return (
        <AppBar position="sticky" sx={{ top: 0, zIndex: 2000 }}>            <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
                Desarrollador de Apliacaciones Web
            </Typography>

            <Nav></Nav>
            {/* <Button color="inherit" component={Link} to="/">
                INICIO
            </Button>
            <Button color="inherit" component={Link} to="/experience">
                EXPERIENCIA
            </Button>
            <Button color="inherit" component={Link} to="/portfolio">
                PORTFOLIO
            </Button>
            <Button color="inherit" component={Link} to="/contact">
                CONTACTO
            </Button> */}
        </Toolbar>
        </AppBar>
    );
}