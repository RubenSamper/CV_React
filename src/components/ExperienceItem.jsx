import { Card, CardContent, Typography, List, ListItem, ListItemText } from "@mui/material";

export default function ExperienceItem({ role, place, dates, details = [] }) {
    return (
        <Card sx={{ mb: 2 }}>
            <CardContent>
                <Typography variant="h6">{role}</Typography>

                <Typography variant="subtitle2" color="text.secondary" sx={{ mb: 1 }}>
                    {place} · {dates}
                </Typography>

                {details.length > 0 && (
                    <List dense>
                        {details.map((d, i) => (
                            <ListItem key={i} sx={{ py: 0 }}>
                                <ListItemText primary={d} />
                            </ListItem>
                        ))}
                    </List>
                )}
            </CardContent>
        </Card>
    );
}