import React from 'react';
import './Testimonials.css';

const testimonials = [
  {
    name: 'Lance Jarvis',
    img: 'https://img.freepik.com/free-photo/portrait-optimistic-businessman-formalwear_1262-3600.jpg', 
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla, sem eros consequat tellus, quis volutpat leo enim.',
    fb: '#',
    tw: '#',
    li: '#'
  },
  {
    name: 'Ericka Lynda',
    img: 'https://img.freepik.com/premium-photo/portrait-happy-man-wearing-glasses-looking-camera-indoors_709984-9452.jpg', 
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla, sem eros consequat tellus, quis volutpat leo enim.',
    fb: '#',
    tw: '#',
    li: '#'
  },
  {
    name: 'Neil Wilford',
    img: 'https://img.freepik.com/premium-photo/boss-man-looking-camera-smiling-young-businessman-banker-with-beard-photo-with-close-up-portrait_321831-5908.jpg?size=626&ext=jpg&ga=GA1.1.1141335507.1719705600&semt=ais_user', 
    review: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consequat, sapien vitae congue fringilla, sem eros consequat tellus, quis volutpat leo enim.',
    fb: '#',
    tw: '#',
    li: '#'
  }
];

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>Customer reviews</h2>
      <p>What our customers are saying..</p>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial-card">
            <img src={testimonial.img} alt={testimonial.name} />
            <h3>{testimonial.name}</h3>
            <p>{testimonial.review}</p>
            <div className="social-links">
              <a href={testimonial.fb}><i className="fab fa-facebook-f"></i></a>
              <a href={testimonial.tw}><i className="fab fa-twitter"></i></a>
              <a href={testimonial.li}><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
