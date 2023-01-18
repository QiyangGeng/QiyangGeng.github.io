import {Breadcrumbs, Container, Divider, Link, Typography} from "@mui/material";
import ResponsiveAppBar from "./ResponsiveAppBar";
import Box from "@mui/material/Box";

function App() {
  return (
      <Container sx={{
          background: "linear-gradient(-7deg, #D0D6D5 5%, #93D3C7 100%)",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed",
          minHeight: "100vh",
      }} maxWidth={false} disableGutters>
          <Container sx={{
              bgcolor: "background.default",
              maxWidth: "lg",
              alignItems: "center",
              justifyContent: "center",
              contain: "paint",
              minHeight: "100vh",
          }} disableGutters>
              <ResponsiveAppBar />
              <Breadcrumbs
                  aria-label="breadcrumb"
                  separator="»"
                  sx={{ mx: 6, my: 1, px: 1, color: "primary.main" }}
              >
                  <Link
                      underline="hover"
                      color="inherit"
                      href="/"
                  >
                      Main Page
                  </Link>
                  <Link
                      underline="hover"
                      color="inherit"
                      href="#"
                  >
                      Test
                  </Link>
                  <Typography color="text.secondary">Test</Typography>
              </Breadcrumbs>

              <Divider
                  sx={{ mx: 6, borderBottomWidth: 2 }}
                  variant={"middle"}
              />

              <Box sx={{
                  bgcolor: "background.default",
                  maxWidth: "xs",
                  alignItems: "center",
                  justifyContent: "center",
                  mx: 6,
                  mt: 3,
                  px: 6,
                  pt: 3,
              }}>
                  <Typography variant="h2" sx={{ textAlign: "center", color: "black" }}>
                      Hello!
                  </Typography>
                  <Typography sx={{ my: 4, textAlign: "left", color: "black" }}>
                      Welcome to my website!
                  </Typography>
              </Box>

          </Container>
      </Container>
  );
}

export default App;
