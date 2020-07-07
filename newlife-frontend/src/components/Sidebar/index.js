import React from 'react'
import { Container } from './styles'

export default function Sidebar() {
    return (
        <Container>
            <div>
                <div className='text'>
                    <p>PRODUTOS COM PREÇO <br />UNIFICADO<hr/><hr />
                    <strong>R$ 2,50</strong>
                    </p>
                </div>
                <div className='img-text'>
                    <img src='https://i.pinimg.com/originals/15/98/40/1598406e807441207996e62ae2e7f797.png' alt='' />
                </div>
            </div>
            <button>COMPRAR</button>
        </Container>
    )
}
