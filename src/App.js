import {Container, Typography} from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";

function App() {
  return (
  <Container sx={{ color: "background.default"}} disableGutters>
      <ResponsiveAppBar />
      <Typography variant="h1" sx={{ my: 4, textAlign: "center", color: "primary.main"}}>
          Hello World!
      </Typography>
  </Container>
  );
}

export default App;
