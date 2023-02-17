import Typography from "@mui/material/Typography";
import {Tooltip} from "@mui/material";
import * as React from "react";

export default function HomeButton() {
    const [hover,setHover] = React.useState(false);

    return (
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
    )
}