import React from 'react';
import { useParams } from 'react-router-dom';
import { useStateValue } from '../Context/StateProvider';
import './Details.scss';


const SingleDetail = ({ title, image, price, rating, info}) => {
   
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
            <strong>Rating: </strong>
            {Array(rating).fill().map(() => (
            <i class="fas fa-star"></i>
            ))}
            </h5>
            <p><strong>Some info about the product: </strong>{info}</p>
            </div>
             </div>

            </div>
          
        </div>
    )
}
const Details = () => {
    const[{ wears, home, watches, bags }] = useStateValue();
    let { id } = useParams();

    if(id){
        
        let wear = wears.find(wear => wear.id === id);
        let homes = home.find(homedetail => homedetail.id === id);
        let watch = watches.find(watchdetail => watchdetail.id === id);
        let bag = bags.find(bagdetail => bagdetail.id === id);

        if(wear){
            return <SingleDetail {...wear} />
        }
        if(homes){
            return <SingleDetail  {...homes} />
        }
        if(watch){
            return <SingleDetail  {...watch} />
        }
        if(bag){
            return <SingleDetail  {...bag} />
        }
    
    }
    return <div>Invalid ID</div>
}

export default Details;