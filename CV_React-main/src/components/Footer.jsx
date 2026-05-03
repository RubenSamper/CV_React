import { AppBar, Toolbar, Typography, Button, Card, CardContent, Container, Box } from "@mui/material";
import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <Box component="footer" sx={{ py: 3, textAlign: "center" }}>
            <Typography variant="body2">
                © {new Date().getFullYear()} Rubén Samper Cruz
            </Typography>
        </Box>
    );
}