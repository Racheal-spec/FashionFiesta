import React from 'react';
import Title from '../title';
import Product from '../Product/Product';
import './watches.scss';

const Watches = () => {
    return(
<div>
<section className="watches-section">
<div className="watches-wrapper">
<div className="row">
    <div className='col watches-bg'>

    </div>
      </div>
</div>
</section>

<section>
        <div className="">
            <div className="container">
                <Title name= 'Fiesta' title='Watches'/>
                 {/*first product row*/} 
        <div className="row my-5">  
    <div className="col-12 col-lg-3 card">
    <Product
    id="123402"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={33}
    rating={5}
    image= "https://m.media-amazon.com/images/I/81xCpb+RC1L._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123403"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={55}
    rating={5}
    image= "https://m.media-amazon.com/images/I/61V3O8CvXcL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123404"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={60}
    rating={4}
    image= "https://m.media-amazon.com/images/I/71Bdi0Y9IWL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123405"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={25}
    rating={4}
    image= "https://m.media-amazon.com/images/I/912IkpP82GL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
        </div>
        {/*second product row*/} 
<div className="row my-5"> 
    <div className="col-12 col-lg-3 card">
    <Product
    id="123406"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={240}
    rating={5}
    image= "https://m.media-amazon.com/images/I/81MmexKBk2L._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123407"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={400}
    rating={5}
    image= "https://m.media-amazon.com/images/I/712pPUmIljL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123408"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={229}
    rating={5}
    image= "https://m.media-amazon.com/images/I/71m0FEiHk0L._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123409"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={199}
    rating={5}
    image= "https://m.media-amazon.com/images/I/71o-aw5MwfL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
        </div>      
    {/*third product row*/} 
<div className="row my-5"> 
    <div className="col-12 col-lg-3 card">
    <Product
    id="123410"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={340}
    rating={4}
    image= "https://m.media-amazon.com/images/I/915t3Ed6XJL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123411"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={250}
    rating={5}
    image= "https://m.media-amazon.com/images/I/910jGexnStL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123412"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={129}
    rating={4}
    image= "https://m.media-amazon.com/images/I/71vfaITrxlL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123413"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={99}
    rating={5}
    image= "https://m.media-amazon.com/images/I/81N-JCRLRuL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
        </div>             
        </div>
        </div>
        </section>
        </div>
    )
}

export default Watches;