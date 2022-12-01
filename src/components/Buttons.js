import React from 'react';



function Button(props) {
    return (
        <div className="all-buttons">
                <div className='firstbt'>{props.databuttons.name}</div>
        </div>
    )
}


export default Button;