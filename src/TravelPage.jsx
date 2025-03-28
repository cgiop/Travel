import React, { useState } from 'react';
import './TravelPage.css';

const PopularDestinationCard = ({
  image,
  city,
  country,
  price,
  flightTime,
  rating,
  reviewCount,
  description,
}) => {
  return (
    <div className="destination-card">
      <div
        className="destination-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="price-tag">FROM ${price}</div>
      </div>
      <div className="destination-details">
        <div className="destination-header">
          <h3>
            {city}, {country}
          </h3>
          <div className="flight-info">🛫 {flightTime} hour flight</div>
        </div>
        <div className="rating">
          {[...Array(5)].map((_, i) => (
            <span
              key={i}
              className={i < Math.round(rating) ? 'star filled' : 'star'}
            >
              ★
            </span>
          ))}
          <span className="rating-number">{rating}</span>
          <span className="review-count">({reviewCount}k reviews)</span>
        </div>
        <p>{description}</p>
        <button className="explore-deals-btn">Explore Deals</button>
      </div>
    </div>
  );
};

const TravelPage = () => {
  const [fromLocation, setFromLocation] = useState('');
  const [toLocation, setToLocation] = useState('');
  const [travelDate, setTravelDate] = useState(
    new Date().toISOString().split('T')[0]
  );
  const [passengers, setPassengers] = useState(1);
  const [email, setEmail] = useState('');
  const [showCalendar, setShowCalendar] = useState(false);

  const popularDestinations = [
    {
      city: 'Paris',
      country: 'France',
      image:
        'https://images.unsplash.com/photo-1431274172761-fca41d930114?q=80&w=2070&auto=format&fit=crop',
      price: 299,
      flightTime: 6,
      rating: 4.8,
      reviewCount: 2.5,
      description:
        'Experience the city of light with its iconic landmarks, world-class cuisine, and romantic atmosphere.',
    },
    {
      city: 'New York',
      country: 'USA',
      image:
        'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop',
      price: 349,
      flightTime: 8,
      rating: 4.9,
      reviewCount: 3.2,
      description:
        'Discover the city that never sleeps with its iconic skyline, diverse neighborhoods, and endless attractions.',
    },
  ];

  const handleDateChange = (e) => {
    setTravelDate(e.target.value);
    setShowCalendar(false);
  };

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Subscribing email:', email);
    setEmail('');
  };

  return (
    <div className="travel-container">
      <nav className="navbar">
        <div className="logo">
          <span>✈️</span> SkyJourney
        </div>
        <div className="nav-links">
          <a href="#">Flights</a>
          <a href="#">Destinations</a>
          <a href="#">Deals</a>
          <a href="#">About</a>
        </div>
        <div className="auth-links">
          <button className="signin">Sign In</button>
          <button className="register">Register</button>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-content">
          <h1>Discover the World One Flight at a Time</h1>
          <p>
            Find the perfect flight for your next adventure with our premium
            booking service. Enjoy comfort, convenience, and unforgettable
            experiences.
          </p>
        </div>

        <div className="booking-box">
          <h2>Book Your Journey</h2>
          <form className="flight-form">
            <div className="input-group">
              <label>From</label>
              <input
                type="text"
                placeholder="Your departure"
                value={fromLocation}
                onChange={(e) => setFromLocation(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>To</label>
              <input
                type="text"
                placeholder="Your destination"
                value={toLocation}
                onChange={(e) => setToLocation(e.target.value)}
              />
            </div>
            <div className="input-group">
              <label>Date</label>
              <div className="relative">
                <input
                  type="date"
                  value={travelDate}
                  onChange={handleDateChange}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            <div className="input-group">
              <label>Passengers</label>
              <select
                value={passengers}
                onChange={(e) => setPassengers(Number(e.target.value))}
              >
                <option value={1}>1 Passenger</option>
                <option value={2}>2 Passengers</option>
                <option value={3}>3 Passengers</option>
                <option value={4}>4+ Passengers</option>
              </select>
            </div>
            <button type="submit" className="search-flights-btn">
              🔍 Search Flights
            </button>
          </form>
        </div>
      </header>

      <section className="popular-destinations">
        <h2>Popular Destinations</h2>
        <p>
          Explore trending destinations loved by travelers worldwide.
          Exceptional experiences awaiting your arrival.
        </p>

        <div className="destinations-grid">
          {popularDestinations.map((destination, index) => (
            <PopularDestinationCard key={index} {...destination} />
          ))}
        </div>
      </section>

      <section className="premium-travel">
        <div className="premium-content">
          <h2>Experience Premium Travel</h2>
          <p>
            Upgrade your journey with our first-class and business services,
            featuring luxurious amenities and exceptional comfort.
          </p>

          <div className="premium-features">
            <div className="feature">
              <div className="feature-icon premium">✨</div>
              <div className="feature-text">
                <h3>Premium Lounges</h3>
                <p>
                  Access exclusive airport lounges with top-tier amenities
                  before your flight.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon dining">🍽️</div>
              <div className="feature-text">
                <h3>Gourmet Dining</h3>
                <p>
                  Enjoy chef-curated meals with premium wine and beverage
                  selections.
                </p>
              </div>
            </div>

            <div className="feature">
              <div className="feature-icon seats">💺</div>
              <div className="feature-text">
                <h3>Lie-Flat Seats</h3>
                <p>
                  Rest comfortably with spacious, fully-reclining seats on
                  long-haul flights.
                </p>
              </div>
            </div>
          </div>

          <button className="explore-premium-btn">
            Explore Premium Options →
          </button>
        </div>
        <div className="premium-image">
          <img
            src="https://images.unsplash.com/photo-1587019158091-1a103c5dd17f?q=80&w=2070&auto=format&fit=crop"
            alt="Premium Travel Experience"
          />
        </div>
      </section>

      <section className="travel-smart">
        <div className="travel-smart-header">
          <h2>Travel Smart</h2>
          <p>
            Helpful tips and insights to make your journey smooth and enjoyable.
          </p>
        </div>

        <div className="travel-tips">
          <div className="tip-card">
            <div className="tip-icon check">✓</div>
            <h3>Pack Efficiently</h3>
            <p>
              Make a packing list, roll clothes to save space, and always pack
              essentials in your carry-on.
            </p>
            <a href="#" className="tip-link">
              Read More →
            </a>
          </div>

          <div className="tip-card">
            <div className="tip-icon clock">⏰</div>
            <h3>Arrive Early</h3>
            <p>
              Plan to arrive at the airport at least 2-3 hours before
              international flights to avoid stress.
            </p>
            <a href="#" className="tip-link">
              Read More →
            </a>
          </div>

          <div className="tip-card">
            <div className="tip-icon mobile">📱</div>
            <h3>Download Our App</h3>
            <p>
              Get real-time flight updates, mobile boarding passes, and
              exclusive app-only deals.
            </p>
            <a href="#" className="tip-link download">
              Download Now →
            </a>
          </div>
        </div>
      </section>

      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Get Exclusive Travel Deals</h2>
          <p>
            Subscribe to our newsletter and receive personalized flight deals,
            travel tips, and special offers directly to your inbox.
          </p>
          <form onSubmit={handleSubscribe} className="newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <button type="submit">Subscribe Now</button>
          </form>
          <p className="privacy-note">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-logo">
              <span>✈️</span> SkyJourney
            </div>
            <p>
              Making air travel more accessible, comfortable, and enjoyable for
              everyone.
            </p>
            <div className="social-links">
              <a href="#" className="social-icon document">
                📄
              </a>
              <a href="#" className="social-icon lightning">
                ⚡
              </a>
              <a href="#" className="social-icon chat">
                💬
              </a>
              <a href="#" className="social-icon globe">
                🌐
              </a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li>
                  <a href="#">Search Flights</a>
                </li>
                <li>
                  <a href="#">Destinations Guide</a>
                </li>
                <li>
                  <a href="#">Travel Insurance</a>
                </li>
                <li>
                  <a href="#">Loyalty Program</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Support</h3>
              <ul>
                <li>
                  <a href="#">FAQs</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
                <li>
                  <a href="#">Booking Policy</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>

            <div className="footer-section">
              <h3>Contact</h3>
              <ul>
                <li>
                  <span className="contact-icon">📍</span>
                  123 Tech Park Road, Tidel Park, Taramani, Chennai, Tamil Nadu
                  600113, India
                </li>
                <li>
                  <span className="contact-icon">📞</span>
                  +91 44 4321 6789
                </li>
                <li>
                  <span className="contact-icon">📧</span>
                  support@skyjourney.com
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default TravelPage;
