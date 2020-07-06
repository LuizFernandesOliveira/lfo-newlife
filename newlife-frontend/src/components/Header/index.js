import React from 'react'
import {Container} from './styles'
import {MdPeople, MdPhone} from 'react-icons/md'
import {Link} from 'react-router-dom'

export default function Header() {
    return (
        <Container>
            <header>
                <div>
                    <MdPeople size={25} color='#0a00b6' />
                    <p>Seja bem vindo!</p>
                    <p>Faça seu
                        <Link to='/login'>login</Link> ou 
                        <Link to='/register'>cadastre-se</Link>
                    </p>
                </div>
                <div>
                    <ul>
                        <li><Link to='/'>Meus Pedidos</Link></li>
                        <li><Link to='/'>Minha Conta</Link></li>
                    </ul>
                    <MdPhone size={25} color='#0a00b6' />
                    <p>(84) 98187-6195</p>
                </div>
                
            </header>
        </Container>
    )
}
