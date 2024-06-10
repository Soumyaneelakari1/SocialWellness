import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file for additional styling
import image1 from './images/happy1.jpg'; // Importing image1 from src/images directory
import image2 from './images/volunteer1.jpg'; // Importing image2 from src/images directory
import image3 from './images/image6.jpg'; // Importing image3 from src/images directory
import image4 from './images/social.jpg';
import image5 from './images/blooddon.jpg';
import image6 from './images/volt.jpg';
import clothesImage from './images/clothes.jpg'
import booksImage from './images/books.jpg';
import healthImage from './images/health.jpg';
import educationImage from './images/education.jpg';

export const Home = () => {
  return (
    <div className='mt-5 pt-5'>
      <Carousel interval={3000} pause={false}>
        <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="First slide" />
          <Carousel.Caption style={{ textAlign: 'center', color: 'white' }}>
            <h1 style={{ fontSize: '7em' }}>Uniting passions, multiplying impact</h1>
            <p style={{ fontSize: '3em' }}>Know more</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Second slide" />
          <Carousel.Caption style={{ textAlign: 'center', color: 'white' }}>
            <h1 style={{ fontSize: '7em' }}>Empowering change through volunteerism</h1>
            <p style={{ fontSize: '3em' }}>Join Us</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Third slide" />
        </Carousel.Item>
      </Carousel>

      <div className="container-xxl mt-5 pt-5 md-5 pb-5 spacer">

      </div>

      <section className="hero">
        <div className="hero-text">
          <h1>Empowering Youth, Enriching Lives</h1>
          <p>Join the movement to create a positive impact in the lives of underprivileged communities</p>
          <Link className='btn btn-primary call-to-action' to='/addvol'>Get Involved</Link>
        </div>
      </section>

      <div className="container-xxl mt-5 pt-5 md-5 pb-5 spacer">
        <h1>Our Goals</h1>
        <div className="row mt-5"></div>
        <div className="row mt-4">
          <div className="col-md-3">
            <div className="card">
              <img src={clothesImage} className="card-img-top" alt="Donate clothes" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={booksImage} className="card-img-top" alt="Donate books" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={healthImage} className="card-img-top" alt="Donate for health" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              
            </div>
          </div>
          <div className="col-md-3">
            <div className="card">
              <img src={educationImage} className="card-img-top" alt="Donate for education" style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
              
            </div>
          </div>
        </div>
      </div>

      <section className="featured-section">
        <h2>Our Latest Initiatives</h2>
        <ul>
          <li>
            <img src={image6} alt="Volunteers" />
            <h3>Volunteers</h3>
            <p>Volunteers are the heart of our organization. Their dedication and commitment make a positive difference in the lives of others.</p>
          </li>
          <li>
            <img src={image5} alt="Blood Camp" />
            <h3>Blood Camp</h3>
            <p>Participate in our Blood Camp and help save lives. Your donation can make a significant impact on someone's life.</p>
          </li>
        </ul>
      </section>

      <section className="social-wellness">
        <h2>6 Strategies for Improving Your Social Health</h2>
        <p>Social connections might help protect health and lengthen life. Scientists are finding that our links to others can have powerful effects on our health.</p>
        <ul>
          <li>Join a group focused on a favorite hobby, such as reading, hiking, painting, or wood carving.</li>
          <li>Learn something new. Take a cooking, writing, art, music, or computer class.</li>
          <li>Take a class in yoga, tai chi, or another new physical activity.</li>
          <li>Join a choral group, theater troupe, band, or orchestra.</li>
          <li>Help with gardening at a community garden or park.</li>
          <li>Volunteer at a school, library, hospital, or place of worship.</li>
        </ul>
        <img src={image4} alt="Social Wellness" />
      </section>
    </div>
  );
};

export default Home;
