import React from 'react';
import './menu-item.style.scss';


const MenuItem = (props) => {
    const {title, img, size} = props
    // console.log(props);
    return (
    <div
    className={`${size} menu-item`}>
        <div className='background-img'
            style={{
                backgroundImage: `url(${img})`
            }}
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase} </h1>
            <p className='subtitle'>SHOP NOW</p>
        </div>
    </div>
    )
};

export default MenuItem;