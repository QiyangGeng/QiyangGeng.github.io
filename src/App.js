import {Container, Paper, Typography} from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";

function App() {
  return (
      <Container sx={{ color: "background.default"}} maxWidth={false} disableGutters>
          <ResponsiveAppBar />
          <Container sx={{ color: "background.default"}} maxWidth={"lg"}>
              <Typography variant="h2" sx={{ my: 4, textAlign: "center", color: "primary.main"}}>
                  Hello World!
              </Typography>
              <Typography sx={{ my: 4, textAlign: "left", color: "primary.main"}}>
                  Welcome to my website!
              </Typography>
              <Paper elevation={6} sx={{ maxHeight: "false"}}>
                  <Typography variant="h3" sx={{ my: 4, textAlign: "left", color: "primary.main"}}>
                      Hello World!
                  </Typography>
              </Paper>
          </Container>
      </Container>
  );
}

export default App;
