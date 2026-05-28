import { AppBar, Toolbar, Typography } from "@mui/material";
import Nav from "./Nav";

export default function Header() {
    return (
        <AppBar position="sticky" sx={{ top: 0, zIndex: 2000 }}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    Desarrollador de Aplicaciones Web
                </Typography>
                <Nav />
            </Toolbar>
        </AppBar>
    );
}
