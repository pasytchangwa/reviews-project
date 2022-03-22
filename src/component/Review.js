import React from 'react'
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = ({review, position, handleClickRight, handleClickLeft, randomPerson}) => {
 const {image, name, job, text} = review[position]
  return (
    <section className='review'>
      <div className='img-container'>
        <img src={image} alt={name} className='person-img' />
        <span className='quote-icon'>
          <FaQuoteRight />
        </span>
      </div>
      <h4 className='author'>{name}</h4>
      <p className='job'>{job}</p>
      <p className='info'>{text}</p>
      <div className='button-container'>
        <button className='prev-btn'>
          <FaChevronLeft onClick={handleClickLeft} />
        </button>
        <button className='next-btn'>
          <FaChevronRight onClick={handleClickRight} />
        </button>
      </div>
      <button className="random-btn" onClick={randomPerson}>
        surprise me
      </button>
    </section>
  );
}

export default Review
