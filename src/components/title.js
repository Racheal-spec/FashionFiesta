import React from 'react';

const titleStyle = {
    fontSize: '25px',
    textAlign: 'left'
}

const title = ({title, name}) => {
    return(
<div className="row">
    <div className="col-10 mx-auto">
        <h2 className='text-capitalize font-weight-bold' style={titleStyle}>
    {name}<strong>{title}</strong>
        </h2>
    </div>
</div>
    )
}

export default title;