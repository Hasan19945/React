import Typography from "@mui/material/Typography"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import Stack from "@mui/material/Stack"

//! tüm kütüphane içerisinden ilgili alt componetni cikartir.
//! Performans olarak daha problemli
// import { Typography } from '@mui/material';

const TypoButtons = () => {
  return (
    <>
      <Box
        component="section"
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          border: "1px solid red",
          p: 2,
        }}
      >
        <Typography
          variant="h5"
          component="h3"
          color="turquoise"
          align="center"
        >
          Deneme
        </Typography>

        <Typography variant="body1" color="violet" align="center">
          bu bir elementidir
        </Typography>

        <Typography variant="body2" color="#dc143c" align="center">
          bu bir elementidir
        </Typography>

        <Typography
          variant="subtitle1"
          align="center"
          color={"fuchsia"}
          mt={3}
          sx={{ color: "white", backgroundColor: "tomato", p: 2 }}
        >
          bu bir elementidir
        </Typography>

        {/* h6 */}
        <Typography variant="subtitle2" align="center">
          bu bir elementidir
        </Typography>

        {/* span */}
        <Typography variant="button" align="center">
          bu bir elementidir
        </Typography>

        <div>
          {/* span */}
          <Typography variant="caption" align="center">
            bu bir elementidir
          </Typography>
        </div>
      </Box>

      <Typography variant="h2" align="center" mt={4} color={"morcivert.light"}>
        BUTTONS
      </Typography>

      <Typography variant="h6" align="center" mt={4} color={"morcivert.main"}>
        BUTTONS
      </Typography>

      <Stack
        direction={"row"}
        mt={4}
        columnGap={1}
        rowGap={2}
        justifyContent={"center"}
        flexWrap={"wrap"}
      >
        <Button variant="text">Text</Button>
        <Button variant="contained" color="secondary">
          Contained
        </Button>
        <Button variant="outlined" color="error">
          Outlined
        </Button>
        <Button variant="outlined" color="warning">
          Outlined
        </Button>
        <Button variant="contained" color="primary">
          Outlined
        </Button>

        <Button
          variant="contained"
          sx={{ backgroundColor: "#bede", color: "black" }}
        >
          Outlined
        </Button>

        <Button variant="contained" sx={{ backgroundColor: "error.light" }}>
          Outlined
        </Button>
      </Stack>
    </>
  )
}

export default TypoButtons
