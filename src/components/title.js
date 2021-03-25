import React from 'react';

const titleStyle = {
    fontSize: '25px' 
}

const title = ({title, name}) => {
    return(
<div className="row">
    <div className="col-10 mx-auto py-2">
        <h2 className='text-capitalize font-weight-bold' style={titleStyle}>
    {name}<strong>{title}</strong>
        </h2>
    </div>
</div>
    )
}

export default title;