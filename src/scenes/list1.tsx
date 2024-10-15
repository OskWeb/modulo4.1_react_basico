import React from 'react'
import { AppLayout } from '../layout/app.layout'
import { ListGithubContainer } from '../pods/listGithub'
import { HeaderContainer } from '../pods/header'

export const ListPage1: React.FC = () => {
    return (
        <AppLayout>
            <HeaderContainer />
            <ListGithubContainer />
        </AppLayout>
    )
}