import React from 'react';
import {useParams} from 'react-router-dom';
import { allData } from '../Data';
import { useStateValue } from '../Context/StateProvider';

const Details = () => {
    const {id} = useParams();
    const[detail, setDetail] = useStateValue(allData); 
   

return(
    <div>
        {/*
    {/*detail.map(item => (
            <div className='details' key={id}>
            <h2>{item.info}</h2>
              </div>
    ))*/}
       

</div>
    )
}

export default Details;