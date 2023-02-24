import React from 'react'


function Home() {

  return (
    <div className="Home">
      <h1>Home Component</h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img src="https://www.dropbox.com/home?preview=9781119083931.jpg" />
        </div>
        <div className='text-wrapper item'>
          <span>
            I Phone
          </span><br></br>
          <span>Price: 100000</span>
        </div>
        <div className='btn-wrapper item'>
          <button> Add to cart</button>
        </div>
      </div>
    </div>

  );
}

export default Home;