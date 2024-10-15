import React from "react"

import { AppLayout } from "../layout/app.layout"
import DetailContainer from "../pods/detail/detail.container"
import { HeaderContainer } from "@/pods/header"

export const DetailPage: React.FC = () => {
    return (
        <AppLayout>
            <HeaderContainer />
            <DetailContainer />
        </AppLayout>
    )
}