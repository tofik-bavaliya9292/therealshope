import React from 'react'
import { Looter } from './Product'

const About = () => {
  return (
        <div>
    <div className='mainabout'>


        <h1 className="about">about the real shope</h1>

          At the real shope, our aim is to offer you all that show you that we really care! Not only have we got the trendiest all, but we can also guarantee that they are of the finest quality.

          We started as a small business the real shope, and our aim is to continue providing our customers with products that keep them happy, at prices that keep them happy.

          Our customers are our top priority and through our products we work hard towards building long-lasting and meaningful relations with them.

          
          </div>
          {/* <img src='happycust.png' alt='bpng' height={400} width={1500} className='iab' />  */}

      <img src='happycust.png' className="card-img iab" alt="bg images"
        height='350px' />

    <Looter />
    </div>
  )
}

export default About