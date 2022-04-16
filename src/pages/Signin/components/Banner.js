import React from 'react'
import { Container, Image } from 'react-bootstrap';
import Logo from '../../../assets/img/logo.svg';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <section>
            <Container>
                <div className='signin__Banner'>
                    <div className='signin__Banner__logo'>
                        <Image src={Logo} className="fluid" alt='logo' />
                    </div>
                    <div className='signin__Banner__action'>
                        <Link to='/home' className='theme-btn'>Go To App</Link>
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Banner