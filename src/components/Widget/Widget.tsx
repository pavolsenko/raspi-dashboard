import {PropsWithChildren} from "react";
import {Box} from "@mui/material";

export function Widget(props: PropsWithChildren) {
    return (
        <Box sx={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            borderRadius: '8px',
            overflow: 'hidden',
        }}>
            {props.children}
        </Box>
    )
}