import {Container, Divider} from "@mui/material";
import Header from "./Header";
import BreadcrumbsRouter from "./BreadcrumbsChain"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import routes from "./routes";
import Box from "@mui/material/Box";

function App() {
    return (
        <Container
            maxWidth="false"
            disableGutters
            sx={{
                background: "linear-gradient(-7deg, #D0D6D5 5%, #93D3C7 100%)",
                backgroundRepeat: "no-repeat",
                backgroundAttachment: "fixed",
                minHeight: "100vh",
            }}
        >
            <Container
                disableGutters
                sx={{
                    bgcolor: "background.default",
                    maxWidth: "lg",
                    alignItems: "center",
                    justifyContent: "center",
                    contain: "paint",
                    minHeight: "100vh",
                }}
            >
                <BrowserRouter>
                    <Header/>
                    <BreadcrumbsRouter/>
                    <Divider
                        sx={{mx: 6, borderBottomWidth: 2}}
                        variant={"middle"}
                        key={"main"}
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
                        <Routes>
                            {routes.map((route) => (
                                <Route path={route.path} element={route.component} key={route.path}/>
                            ))}
                        </Routes>
                    </Box>
                </BrowserRouter>
            </Container>
        </Container>
    );
}

export default App;
