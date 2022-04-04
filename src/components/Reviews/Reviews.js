import React from 'react';
import useReviews from '../../Hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews] = useReviews()
  console.log(reviews);
  return (
    <div className='mb-32 '>
      {reviews.map(review => <Review review={review} key={review.id}></Review>)}
    </div>
  );
};

export default Reviews;