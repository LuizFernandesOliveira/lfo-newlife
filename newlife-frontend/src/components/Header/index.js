import React from 'react'
import { ContainerHeader, ContainerSidebar, ContainerNav } from './styles'
import { MdPeople, MdPhone, MdShoppingCart } from 'react-icons/md'
import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <ContainerHeader>
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
            </ContainerHeader>
            <ContainerSidebar>
                <header>
                    <div className='img-logo'>
                        <img src="https://pt.freelogodesign.org/Content/img/logo-samples/flooop.png" alt="" />
                    </div>
                    <div className='cart'>
                        <MdShoppingCart size={40} color='#0a00b6' />
                        <p>Meu Carrinho</p>
                    </div>
                </header>
            </ContainerSidebar>
            <ContainerNav>
                <nav>
                    <ul>
                        <li><Link to=''>Sabão</Link></li>
                        <li><Link to=''>Desinfetantes</Link></li>
                        <li><Link to=''>Detergentes para pisos</Link></li>
                        <li><Link to=''>Amaciantes</Link></li>
                    </ul>
                </nav>
            </ContainerNav>
        </>
    )
}
