import {Typography} from "@mui/material";

export default function Home() {
    return (
        <div>
            <Typography variant="h2" sx={{textAlign: "center", color: "black"}}>
                Hello!
            </Typography>
            <Typography sx={{my: 4, textAlign: "left", color: "black", textIndent: "0.5in"}}>
                Welcome to my website!
            </Typography>
        </div>
    );
}
