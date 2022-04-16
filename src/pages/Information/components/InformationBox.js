import React from 'react'

const InformationBox = (props) => {
    const {title, description} = props;
    return (
        <div className='informationBox'>
            <div className='informationBox__title'>
                <h2>{title}</h2>
            </div>
            <div className='informationBox__content'>
                
                <p>{description}</p>
            </div>

        </div>
    )
}

export default InformationBox