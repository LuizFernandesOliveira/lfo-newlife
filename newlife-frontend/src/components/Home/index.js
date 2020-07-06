import React from 'react'
import { Container } from './styles'
import Header from '../Header'
import Sidebar from '../Sidebar'

export default function Home() {
    return (
        <Container>
            <Header />
            <Sidebar />
        </Container>
    )
}
