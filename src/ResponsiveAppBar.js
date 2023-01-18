import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import {
    IconButton,
    Link,
    ListItemIcon,
    ListItemText,
    Tab,
    Tabs, ToggleButton,
    Tooltip,
    useScrollTrigger
} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import SettingsIcon from '@mui/icons-material/Settings';

const pages = ['Stationary', 'Test1', 'Test2'];

function ResponsiveAppBar() {
    const scrollTrigger = useScrollTrigger();

    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const [value, setValue] = React.useState();

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const [hover,setHover] = React.useState(false);

    return (
        <AppBar
            position="sticky"
            maxWidth="false"
            disableGutters
            elevation={scrollTrigger ? 4 : 0}
        >
            <Container maxWidth="false">
                <Toolbar disableGutters>
                    <Tooltip title="Return to home page">
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                textAlign: "right",
                                letterSpacing: hover ? '0.1rem' : '.3rem',
                                color: 'background.default',
                                textDecoration: 'none',
                                mr: 3,
                            }}
                            onMouseEnter={() => setHover(true)}
                            onMouseLeave={() => setHover(false)}
                        >
                            { hover ? "My Worldly Stuff" : "MWS" }
                        </Typography>
                    </Tooltip>

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
                            {pages.map((page) => (
                                <Tab
                                    key={page}
                                    label={page}
                                />
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
                            {pages.map((page) => (
                                <Tab
                                    key={page}
                                    label={page}
                                >
                                    <ToggleButton value={value}>

                                    </ToggleButton>
                                </Tab>
                            ))}
                        </Tabs>
                    </Box>


                    <Box sx={{ flexGrow: 0 }}>
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu}
                                        sx={{ p: 0, color: 'background.default' }}
                            >
                                <MenuIcon />
                            </IconButton>
                        </Tooltip>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            <MenuItem component={Link} href="https://github.com/QiyangGeng/MyWorldlyStuff">
                                <ListItemIcon>
                                    <GitHubIcon fontSize="small"/>
                                </ListItemIcon>
                                <ListItemText>Source Code</ListItemText>
                            </MenuItem>
                            <MenuItem component={Link} href="/settings">
                                <ListItemIcon>
                                    <SettingsIcon fontSize="small"/>
                                </ListItemIcon>
                                <ListItemText>Settings</ListItemText>
                            </MenuItem>
                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default ResponsiveAppBar;