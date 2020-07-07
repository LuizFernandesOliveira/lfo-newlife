import React from 'react'
import {Container} from './styles'
import { Link } from 'react-router-dom'
import {MdPhone, MdTimelapse, MdEmail} from 'react-icons/md'
import {FaWhatsapp} from 'react-icons/fa'

export default function Footer() {
    return (
        <Container>
            <div>
                <h3>Institucional</h3>
                <ul>
                    <li><Link to='/'>Minha conta</Link></li>
                    <li><Link to='/'>Cadastre-se</Link></li>
                    <li><Link to='/'>Meus Pedidos</Link></li>
                    <li><Link to='/'>Empresa</Link></li>
                    <li><Link to='/'>Entrega e Frete</Link></li>
                    <li><Link to='/'>Quem Somos</Link></li>
                    <li><Link to='/'>Política de Privacidade</Link></li>
                </ul>
            </div>
            <div>
                <h3>Contato</h3>
                <ul>
                    <li><MdPhone size={24} />(84) 98831-3308 <FaWhatsapp size={24} /></li>
                    <li><MdTimelapse size={24} />Segunda a sexta da 07:00 às 18:00 horas</li>
                    <li><MdEmail size={24} />Edson Alves</li>
                </ul>
            </div>
            <div>
                <h3>Desenvolvimento</h3>
                <ul>
                    <li><a href="#" target='_blanck' rel='noopener noreferrer'> Luiz Fernandes de Oliveira </a></li>
                </ul>
            </div>
        </Container>
    )
}
