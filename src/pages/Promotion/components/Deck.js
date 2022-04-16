import React from 'react'
import { Image } from 'react-bootstrap'


const Deck = (props) => {
    const { title, flag } = props;
    return (
        <div className='deck'>
            <div className='deck__flagTitle'>
                <Image src={flag} className="fluid" alt='flag' />
                <h5>{title}</h5>
            </div>
            <div className='deck__action'>
                <a href='#'> <i className='icon-download'></i> </a>
                <a href='#'> <i className='icon-copy'></i> </a>
            </div>
        </div>
    )
}

export default Deck