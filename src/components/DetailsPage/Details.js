import React from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import './Details.scss';


const SingleDetail = ({id, title, image, price, rating, info}) => {
  
    const[, dispatch] = useStateValue();
    const addToCart = () => {
        dispatch({
          type:'ADD_TO_CART',
          item: {
            id: id,
            title: title,
            image: image,
            price: price,
            rating: rating,
          },
        });
       
    } 

    return (
        <div>
            <div className="container my-5 details">
             <div className="row">
            <div className="col-lg-6 col-md-6 col-12">  
            <img src={image} alt="" />
            </div>
            <div className="col-lg-6 col-md-6 col-12 second-column">
            <h5><strong>Title: </strong>{title}</h5>
            <h5><strong>Price: </strong><small>$</small>{price}</h5>
            <h5>
           <div className="product-rating">
           <strong>Rating: </strong>
            {Array(rating).fill().map((_, i) => (
             <div key={i}>
             <i className="fas fa-star"></i>
             </div>
               ))}
           </div>
            </h5>
            <p><strong>Some info about the product: </strong>{info}</p> 
         
            <button onClick={addToCart}>ADD TO CART</button>
           
            </div>
             </div>
           
            </div>
          
        </div>/*end of container div*/
    )
}

const Details = () => {
    const[{ wears, homes, watches, bags }] = useStateValue();
    let { id } = useParams();

    if(id){
        
        let wear = wears.find(wear => wear.id === id);
        let home = homes.find(homedetail => homedetail.id === id);
        let watch = watches.find(watchdetail => watchdetail.id === id);
        let bag = bags.find(bagdetail => bagdetail.id === id);

        if(wear){
            return <SingleDetail {...wear} key={id} />
        }
        if(home){
            return <SingleDetail  {...home} key={id} />
        }
        if(watch){
            return <SingleDetail  {...watch} key={id} />
        }
        if(bag){
            return <SingleDetail  {...bag} key={id} />
        }
    
    }
}

export default Details;