import './header.css'
import Image from 'next/image'
import logo from '@/assets/materials/logo.png'

const Header = () => {
    return (
        <div className='header__container'>
            <a className='header__logo__container' href='/'>
                <Image className='logo__img' src={logo} width={50} alt="logo_image" />
                <div className='logo__name'>
                    Ferrolink
                    <span>Industries Co.</span>
                </div>
            </a>
            <nav className='navbar__container'>
                <a className='navbar__link' href='/#top'>Home</a>
                <a className='navbar__link' href='/products'>Products</a>
                <a className='navbar__link' href='/about'>About</a>
                <a className='navbar__link' href='/services'>Services</a>
                <a className='navbar__link' href='/contact'>Contact</a>
            </nav>
        </div>
    )
}

export default Header