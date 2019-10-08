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
        return data.map(({id, ...otherSectionsprops}) => {
            return <MenuItem key={id} {...otherSectionsprops}/>
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