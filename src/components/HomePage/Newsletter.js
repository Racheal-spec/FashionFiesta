import React from 'react';


const Newsletter = () => {

    return(
    <section className="newsletter">
        <div className="news-div">
            <div className="icon">
            <i className="fas fa-envelope-open-text"></i>
            </div>
            <h4>Get Juicy Fashion Tips Right in your Inbox</h4>
            <input className="news-input" type="email" placeholder="your email address**" />
            <button type="submit">Subscribe</button>
        </div>
    </section>
    )
}

export default Newsletter;