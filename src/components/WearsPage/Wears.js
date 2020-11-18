import React from 'react';
import Title from '../title';
import Product from '../Product/Product';


const Wears = () => {
    return(
<section>
        <div className="py-5">
            <div className="container">
                <Title name= 'Fiesta' title='Wears'/>
                 {/*first product row*/} 
        <div className="row my-5">  
    <div className="col-12 col-lg-3 card">
    <Product
    id="123300"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={140}
    rating={5}
    image= "https://m.media-amazon.com/images/I/51uKbCoulXL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123301"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={200}
    rating={5}
    image= "https://m.media-amazon.com/images/I/61T-mm3AkcL._AC_UL480_FMwebp_QL65_.jpg"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123302"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={329}
    rating={4}
    image= "https://cdn.shopify.com/s/files/1/1132/3440/products/image_1a3aa333-db55-4aef-8a76-06c8e6a3b161_large.jpg?v=1592191839"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123303"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={410}
    rating={4}
    image= "https://cdn.shopify.com/s/files/1/1132/3440/products/image_b36f2338-2031-4007-96fc-00a8c4a3f033_large.jpg?v=1602461539"
    />
</div>
        </div>
        {/*second product row*/} 
<div className="row my-5"> 
    <div className="col-12 col-lg-3 card">
    <Product
    id="123304"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={240}
    rating={5}
    image= "https://cdn.shopify.com/s/files/1/1132/3440/products/509D4065-788E-4B15-96BA-42877CEF6175_large.jpg?v=1605064779"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123305"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={400}
    rating={4}
    image= "https://cdn.shopify.com/s/files/1/1132/3440/products/366E3142-BF78-47E6-BBF9-C7B32E813F00_large.jpeg?v=1571709519"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123306"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={229}
    rating={5}
    image= "https://cdn11.bigcommerce.com/s-3y69bgeked/images/stencil/550x705/products/21632/133515/D254E32F-E36E-479E-86D3-185E48A78288__82279.1605370560.jpg?c=2"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123307"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={399}
    rating={5}
    image= "https://cdn.shopify.com/s/files/1/1132/3440/products/00745897-389F-4463-BFDC-C443C08506BF_large.jpeg?v=1591944034"
    />
</div>
        </div>      
    {/*third product row*/} 
<div className="row my-5"> 
    <div className="col-12 col-lg-3 card">
    <Product
    id="123308"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={340}
    rating={4}
    image= "https://cdn11.bigcommerce.com/s-3y69bgeked/images/stencil/550x705/products/21658/133276/shopdressup_striped_knit_cardigan-6__27683.1605537499.jpg?c=2"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123309"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={450}
    rating={5}
    image= "https://cdn11.bigcommerce.com/s-3y69bgeked/images/stencil/550x705/products/21649/133584/A211A6B0-A018-477D-A6F5-C7FAF8647AF2__58902.1605548418.jpg?c=2"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123400"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={229}
    rating={5}
    image= "https://cdn11.bigcommerce.com/s-3y69bgeked/images/stencil/550x705/products/21646/133337/shopdressup_maroon_striped_sweater-5__43520.1605371349.jpg?c=2"
    />
</div>
<div className="col-12 col-lg-3 card">
    <Product
    id="123401"
    title="Sed voluptatem accusantium doloremque eaque ipsa"
    price={299}
    rating={5}
    image= "https://cdn11.bigcommerce.com/s-3y69bgeked/images/stencil/500x659/products/21641/133470/03918677-E6D4-47B3-AEE0-F71506D1F052__26898.1605367056.jpg?c=2"
    />
</div>
        </div>             
        </div>
        </div>
        </section>
    )
}

export default Wears;