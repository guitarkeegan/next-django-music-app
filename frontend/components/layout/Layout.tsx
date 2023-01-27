import Head from 'next/head'
// import Script from 'next/script'

import Header from './Header'
import Footer from './Footer'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import type {ReactNode} from 'react'

type LayoutProps = {children?: ReactNode}

const Layout = (props: LayoutProps) => {
    return (
        <div>
            <Head>
                <title>Waveform - Connecting music teachers and students</title>
            </Head>

            <ToastContainer position="bottom-right" />
            
            <Header />
            {props.children}
            <Footer />
        </div>
    )
}

export default Layout