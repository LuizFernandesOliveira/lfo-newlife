import React from 'react'
import {Container} from './styles'
import {MdShoppingCart} from 'react-icons/md'

export default function Sidebar() {
    return (
        <Container>
            <nav>
                <header>
                    <div className='img-logo'>
                        <img src="https://pt.freelogodesign.org/Content/img/logo-samples/flooop.png" alt="" />
                    </div>
                    <div className='cart'>
                        <MdShoppingCart size={40} color='#0a00b6' />
                        <p>Meu Carrinho</p>
                    </div>
                </header>
                <div>
                    
                </div>
            </nav>
        </Container>
    )
}
