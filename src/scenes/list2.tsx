import React from 'react'
import { AppLayout } from '../layout/app.layout'
import { ListRickMortyContainer } from '../pods/listRickMorty'
import { HeaderContainer } from '../pods/header'

export const ListPage2: React.FC = () => {
    return (
        <AppLayout>
            <HeaderContainer />
            <ListRickMortyContainer />
        </AppLayout>
    )
}