import React from 'react'
import { Image } from 'react-bootstrap';

const Circle = props => {
    const { calTitle, calValue, calStar } = props;
    return (
        <div className='calCircle'>
            <div className='circleControl'></div>
            <div className='calCircle__inner'>
                <span>{calTitle}</span>
                {!calStar &&
                    <h5>{calValue}</h5>
                }
                {calStar &&
                    <Image src={calStar} alt="star" className='fluid' />
                }
            </div>
        </div>
    )
}

export default Circle