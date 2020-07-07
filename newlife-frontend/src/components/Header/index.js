import React, {useState} from 'react'
import { 
    ContainerHeader, 
    ContainerSidebar,
    ContainerNav, 
    ButtonNav 
} from './styles'
import { 
    MdPeople,
     MdPhone, 
     MdShoppingCart, 
     MdMenu,
     MdClose
} from 'react-icons/md'

import { Link } from 'react-router-dom'

export default function Header() {
    const [state, setState] = useState(false)
    const [active, setActive] = useState(true)
    const [deactive, setDeactive] = useState(false)
    const activeMenu = () => {
        if(state){
            setActive(true)
            setDeactive(false)
        }else{
            setActive(false)
            setDeactive(true)
        }
        setState(!state)
    }

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
                        <img src="https://revthink.com/wp-content/uploads/2018/04/revthink-logo-2018.png" alt="" />
                    </div>
                    <div className='cart'>
                        <Link to='/'><MdShoppingCart size={40} color='#0a00b6' />
                        <p>Meu Carrinho</p></Link>
                    </div>
                </header>
            </ContainerSidebar>
            <ButtonNav inline={[active, deactive]}>
                <button className='active' onClick={activeMenu}><MdMenu  size={50}/></button>
                <button className='deactive' onClick={activeMenu}><MdClose  size={50}/></button>
            </ButtonNav>
            <ContainerNav act={deactive}>
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
