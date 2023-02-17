import {IconButton, Link, ListItemIcon, ListItemText, Tooltip} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import GitHubIcon from "@mui/icons-material/GitHub";
import SettingsIcon from "@mui/icons-material/Settings";
import Box from "@mui/material/Box";
import * as React from "react";

export default function SettingsMenu() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
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
    )
}
