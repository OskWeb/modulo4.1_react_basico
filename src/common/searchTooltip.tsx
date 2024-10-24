import { Button, ClickAwayListener, IconButton, styled, Tooltip, tooltipClasses, TooltipProps } from "@mui/material"
import InfoIcon from '@mui/icons-material/Info';
import React from "react"

interface SearchTooltip {
    text: string
}

export const SearchTooltip: React.FC<SearchTooltip> = ({ text }) => {

    const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))({
        [`& .${tooltipClasses.tooltip}`]: {
            maxWidth: 150,
        },
    });

    return (

        <div>
            <CustomWidthTooltip
                title={text}
                placement="bottom"
                arrow
            >
                <IconButton color="primary">
                    <InfoIcon />
                </IconButton>
            </CustomWidthTooltip>
        </div>

    )
}

