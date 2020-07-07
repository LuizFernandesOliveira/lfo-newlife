import React from 'react'
import { Container } from './styles'
import Header from '../Header'
import Sidebar from '../Sidebar'
import Footer from '../Footer'

export default function Home() {
    return (
        <Container>
            <Header />
            <Sidebar />
            <Footer />
        </Container>
    )
}
