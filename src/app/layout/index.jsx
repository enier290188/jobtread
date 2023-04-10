import {Outlet} from 'react-router-dom'
import {FooterLayout} from './footer'
import {HeaderLayout} from './header'
import {MainLayout} from './main'

export const Layout = () => {
    return (
        <>
            <HeaderLayout/>
            <MainLayout>
                <Outlet/>
            </MainLayout>
            <FooterLayout/>
        </>
    )
}
