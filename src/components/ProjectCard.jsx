import {
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Chip,
} from "@mui/material";

const BASE_URL = import.meta.env.BASE_URL || "/";

export default function ProjectCard({ title, description, image, link, tags, extraDescription }) {
  const imageUrl = image ? BASE_URL + image : null;

  return (
    <Card
      sx={{
        maxWidth: 400,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "box-shadow 0.3s, transform 0.3s",
        "&:hover": {
          boxShadow: 6,
          transform: "translateY(-2px)",
        },
      }}
    >
      {imageUrl && (
        <Box sx={{ overflow: "hidden" }}>
          <CardMedia
            component="img"
            image={imageUrl}
            alt={title}
            sx={{ height: 160, objectFit: "contain", p: 2, bgcolor: "#fafafa" }}
          />
        </Box>
      )}

      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" gutterBottom sx={{ fontWeight: 600 }}>
          {title}
        </Typography>

        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>

        {extraDescription && (
          <Typography variant="body2" color="text.secondary" sx={{ mt: 1 }}>
            {extraDescription}
          </Typography>
        )}

        {tags && tags.length > 0 && (
          <Box sx={{ mt: 1.5, display: "flex", gap: 0.5, flexWrap: "wrap" }}>
            {tags.map((tag) => (
              <Chip key={tag} label={tag} size="small" variant="outlined" />
            ))}
          </Box>
        )}
      </CardContent>

      <CardActions sx={{ px: 2, pb: 2, pt: 0 }}>
        {link && (
          <Button
            variant="contained"
            size="small"
            href={link}
            target="_blank"
            rel="noreferrer"
            sx={{
              textTransform: "none",
              fontWeight: 600,
              transition: "all 0.3s",
              "&:hover": {
                backgroundColor: "#1565c0",
                transform: "translateY(-1px)",
                boxShadow: 3,
              },
            }}
          >
            Ver proyecto
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
