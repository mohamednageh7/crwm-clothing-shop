import React from 'react';
import MenuItem from '../menu-item/menu-item.component';
import {selectDirectorySection} from '../../redux/directory/directory.selector';
import {createStructuredSelector} from 'reselect'
import {connect} from 'react-redux';
import './directory.style.scss';


const Directory = ({sections}) => {
   

    const handleMenuData = () => {
        const data = sections;
        return data.map(({id, ...otherSectionsprops}) => {
            return <MenuItem key={id} {...otherSectionsprops}/>
        })
    }

        return (
        <div className='directory-menu'>
            {handleMenuData()}
        </div>
        )
};

const mapStateToProps = createStructuredSelector ({
    sections: selectDirectorySection
})

export default connect(mapStateToProps)(Directory);