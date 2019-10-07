import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.style.scss';


const MenuItem = (props) => {
    const {title, imageUrl, size,history, linkUrl,match} = props
    console.log(props);
    return (
    <div
    className={`${size} menu-item`}
    onClick = {() => history.push(`${match.url}${linkUrl}`)}
    >
        <div className='background-img'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}
            
        />
        <div className='content'>
            <h1 className='title'>{title.toUpperCase()} </h1>
            <p className='subtitle'>SHOP NOW</p>
        </div>
    </div>
    )
};

export default withRouter(MenuItem);