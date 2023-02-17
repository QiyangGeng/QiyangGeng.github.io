import * as React from 'react';
import routes from "./routes";
import {ExpandLess, ExpandMore} from "@mui/icons-material";
import {Breadcrumbs, Link, ListItem, Typography} from "@mui/material";
import ListItemText from '@mui/material/ListItemText';
import PropTypes from "prop-types";
import {
    Link as RouterLink,
    Route,
    Routes,
    useLocation,
} from 'react-router-dom';
import Box from "@mui/material/Box";

function ListItemLink(props) {
    const { to, open, ...other } = props;
    const primary = routes[to];

    let icon = null;
    if (open != null) {
        icon = open ? <ExpandLess /> : <ExpandMore />;
    }

    return (
        <li>
            <ListItem component={RouterLink} to={to} {...other}>
                <ListItemText primary={primary} />
                {icon}
            </ListItem>
        </li>
    );
}

ListItemLink.propTypes = {
    open: PropTypes.bool,
    to: PropTypes.string.isRequired,
};

function LinkRouter(props) {
    return <Link {...props} component={RouterLink} />;
}

function Page() {
    const location = useLocation();
    const path = location.pathname.split('/').filter((x) => x);

    return (
        <Box>
            <Breadcrumbs
                aria-label="breadcrumb"
                separator="»"
                color="primary.main"
                sx={{ mx: 6, my: 1, px: 1, color: "primary.main" }}
            >
                {path.length === 0 ? (
                        <Typography color="text.secondary">
                            Main Page
                        </Typography>
                    ) : (
                        <LinkRouter underline="hover" color="inherit" to="/">
                            Main Page
                        </LinkRouter>
                    )
                }

                {path.map((value, index) => {
                    const last = index === path.length - 1;
                    const to = `/${path.slice(0, index + 1).join('/')}`;
                    const routed = routes.find((route) => (route.path === to)) !== undefined;

                    return last ? (
                        routed ? (
                            <Typography color="text.secondary" key={to}>
                                {routes.find((route) => (route.path === to)).name}
                            </Typography>
                        ) : (
                            <Typography color="text.secondary" key={to}>
                                {decodeURI(path[index])}
                            </Typography>
                        ))
                        : routed ? (
                            <LinkRouter underline="hover" color="inherit" to={to} key={to}>
                                {routes.find((route) => (route.path === to)).name}
                            </LinkRouter>
                        ) : (
                            <Typography color="text.secondary" key={to}>
                                {decodeURI(path[index])}
                            </Typography>
                        );
                })}
            </Breadcrumbs>
        </Box>
    );
}

export default function RouterBreadcrumbs() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
            <Routes>
                <Route path="*" element={<Page/>} />
            </Routes>
        </Box>
    );
}
