import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import {
    Tab,
    Tabs,
    useScrollTrigger
} from "@mui/material";
import {Link as RouterLink} from 'react-router-dom'

import routes from './routes';
import HomeButton from "./HomeButton";
import SettingsMenu from "./SettingsMenu";

export default function Header() {

    const [value, setValue] = React.useState(false);

    const handleChange = (event, newValue) => {
        setValue(newValue === value ? -1 : newValue);
    };

    return (
        <AppBar
            position="sticky"
            elevation={useScrollTrigger({
                disableHysteresis: true,
                threshold: 0,
            }) ? 4 : 0}
        >
            <Container maxWidth="false">
                <Toolbar disableGutters>
                    <HomeButton/>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }}}>
                        <Tabs
                            id="menu-appbar"
                            textColor="secondary"
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {routes.filter((route) => ( route.main === true )).map((route) => (
                                <Tab
                                    key={route.path}
                                    label={route.name}
                                    value={route.path}
                                    component={RouterLink}
                                    to={route.path}
                                >
                                </Tab>
                            ))}
                        </Tabs>
                    </Box>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        <Tabs
                            id="menu-appbar"
                            textColor="secondary"
                            value={value}
                            onChange={handleChange}
                            indicatorColor="secondary"
                            sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {routes.filter((route) => ( route.main === true )).map((route) => (
                                <Tab
                                    key={route.path}
                                    label={route.name}
                                    value={route.path}
                                    component={RouterLink}
                                    to={route.path}
                                />
                            ))}
                        </Tabs>
                    </Box>

                    <SettingsMenu/>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
