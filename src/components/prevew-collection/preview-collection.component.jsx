import React from 'react';
import { withRouter } from 'react-router-dom';
import CollectionItem from '../collection-item/collectionItem.components';
import './preview-collection.style.scss';


const Collection = (props) => {
    const { title, items} = props

    return (
        <div className="collection-preview">
            <h1 className='title'>{title}</h1>
            <div className="preview">
                {
                    items.filter((item,index) => index < 4).map(({ id,...otherItemData }) => {
                        return <CollectionItem key={id}  {...otherItemData}/>
                    }
                    )

                }
            </div>
        </div>
    )
}

export default withRouter(Collection);