import React from 'react';

const titleStyle = {
    fontSize: '30px' 
}

const title = ({title, name}) => {
    return(
<div className="row">
    <div className="col-10 mx-auto py-2">
        <h1 className='text-capitalize font-weight-bold' style={titleStyle}>
    {name}<strong>{title}</strong>
        </h1>
    </div>
</div>
    )
}

export default title;