import React from 'react'
import './Home.css'
import backgroud from './home_background.jpg';
import Product from './Product'
import imageFirst from './images/fcb-1.png';
import imageSecond from './images/fcb-2.png';
import imageThird from './images/fcb-3.png';
import imageFourth from './images/fcb-4.png';
import imageFiveth from './images/fcb-5.png';
import imageSixth from './images/fcb-6.png';

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={backgroud} alt="" />
        <div className="home__row">
          <Product id='31233123' title='t-shirt fc barcelona' price={199.99} image={imageFirst} rating={3} />
          <Product title='t-shirt fc barcelona' price={99.99} image={imageSecond} rating={3} />
        </div>
        <div className="home__row">
          <Product id='31231223' title='t-shirt fc barcelona' price={89.99} image={imageThird} rating={5} />
          <Product id='31231123' title='t-shirt fc barcelona' price={79.99} image={imageFourth} rating={4} />
          <Product id='31233123' title='t-shirt fc barcelona' price={69.99} image={imageFiveth} rating={3} />
        </div>
        <div className="home__row">
          <Product id='312313123' title='t-shirt fc barcelona' price={59.99} image={imageSixth} rating={5} />
        </div>
      </div>
    </div>
  )
}

export default Home
