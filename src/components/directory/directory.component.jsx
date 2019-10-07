import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {sections} from './directory-data';
import './directory.style.scss';


class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            section: sections
        }
    }

    handleMenuData = () => {
        const data = this.state.section;
        // console.log(data)
        return data.map(({title,imageUrl,id,size}) => {
            // console.log(item)
            return <MenuItem title={title} img={imageUrl} key={id} size={size}/>
        })
    }

    render() {
        return (
        <div className='directory-menu'>
            {this.handleMenuData()}
        </div>
        )
    }
};

export default Directory;