import React from 'react';
import './BackToTop.scss';

const BackToTop = () => {

    const scrollTop = () => {
        window.scrollTo({top: 0, behavior: 'smooth'})
    }


    return(
        <div className="scrolltop" onClick={scrollTop}>
            <i className="fas fa-arrow-up"></i>
        </div>
    )
}

export default BackToTop;