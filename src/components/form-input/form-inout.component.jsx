import React from 'react';

import './form-input.style.scss';

const FormInput = ({handleChange, label, ...otherporps}) => {
    
   return( <div className='group'>
        <input className='form-input'
        onChange={handleChange}
        {...otherporps}
        />
        {
            label ?  <label
            className = {`${otherporps.value.length? 'shrink': ''} form-input-label`}
            >{label}</label> : null
        }
       
    </div>
   )
};

export default FormInput;