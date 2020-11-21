import React from 'react';
import { useStateValue } from '../Context/StateProvider';


const Details = ({id, title, image, rating, price}) => {
    const[{details}, dispatch] = useStateValue(); 
    dispatch({
        type:'GO-TO_DETAILS',
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          rating: rating,
        }
    })
    

    return(
        <div>

{details.map((item) => (
<div id={item.id}>
 id={item.id}
 title={item.title}
 image={item.image}
 </div>
))
}

</div>
    )
}

export default Details;