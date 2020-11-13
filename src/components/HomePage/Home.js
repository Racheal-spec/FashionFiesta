
import React from 'react';
import Title from '../title';
import './CSS/Home.scss';
import whiteGirl from '../Img/white-girl.jpg';

const Home = () => {
    return(
        <React.Fragment>
<section className="hero-section">
   <div className="container-fluid">
       <div className="row">
       <div className='col home-bg'>
    <img src={whiteGirl} className="home-img-bg" alt="white-girl"></img>
    </div>
       </div>
   </div>
</section>
<section>
        <div className="py-5">
            <div className="container">
                <Title name= 'Our' title='Products' />
                <div className="row">
    
                </div>
            </div>
        </div>
</section>
      </React.Fragment>

    )
}

export default Home;