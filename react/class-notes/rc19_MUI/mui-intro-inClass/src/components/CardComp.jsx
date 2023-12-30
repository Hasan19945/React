import Card from "@mui/material/Card"
import CardActions from "@mui/material/CardActions"
import CardContent from "@mui/material/CardContent"
import CardMedia from "@mui/material/CardMedia"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import data from "../data"
import { Container, Grid } from "@mui/material"

export default function CardComp() {
  return (
    <Container align="center">
      <Typography color={"primary.dark"} variant="h3" m={3}>
        Card and Grid
      </Typography>

      <Grid container rowSpacing={6} columnSpacing={4}>
        {data.map(({ id, name, text, img }) => (
          <Grid item xs={12} sm={6} md={4}>
            <Card>
              <CardMedia component="img" image={img} title={name} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {text}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}
