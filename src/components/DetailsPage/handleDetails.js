import react from 'react';
import { useStateValue } from '../Context/StateProvider';

const handleDetails = ({id, title, image, rating, price}) => {
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
    
        return (
<div>

</div>
        )
}

export default handleDetails;