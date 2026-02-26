import { Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function Nav() {
    return (
        <nav className="navWrap">
            {/* Checkbox oculto que controla el menú en móvil */}
            <input id="nav-toggle" type="checkbox" className="navToggle" />

            {/* Botón hamburguesa (solo móvil) */}
            <label htmlFor="nav-toggle" className="navBurger" aria-label="Abrir menú">
                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </label>

            {/* Tus botones de siempre */}
            <div className="navButtons">
                <Button color="inherit" component={Link} to="/" sx={{
                    color: "#93C5FD", "&:hover": { color: "#FFFFFF" }
                }}>
                    INICIO
                </Button>
                <Button color="inherit" component={Link} to="/experience" sx={{
                    color: "#93C5FD", "&:hover": { color: "#FFFFFF" }
                }}>
                    EXPERIENCIA
                </Button>
                <Button color="inherit" component={Link} to="/portfolio" sx={{
                    color: "#93C5FD", "&:hover": { color: "#FFFFFF" }
                }}>
                    PORTFOLIO
                </Button>
                <Button color="inherit" component={Link} to="/contact" sx={{
                    color: "#93C5FD", "&:hover": { color: "#FFFFFF" }
                }}>
                    CONTACTO
                </Button>
            </div>
        </nav>
    );
}

// export default function Nav() {
//     return (
//         <>
//             <Box className="navButtons">
//                 <Button color="inherit" component={Link} to="/">
//                     INICIO
//                 </Button>
//                 <Button color="inherit" component={Link} to="/experience">
//                     EXPERIENCIA
//                 </Button>
//                 <Button color="inherit" component={Link} to="/portfolio">
//                     PORTFOLIO
//                 </Button>
//                 <Button color="inherit" component={Link} to="/contact">
//                     CONTACTO
//                 </Button>
//             </Box>
//         </>
//     );
// }
