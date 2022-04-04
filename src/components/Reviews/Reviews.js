import React from 'react';
import useReviews from '../../Hooks/useReview';
import Review from '../Review/Review';

const Reviews = () => {
  const [reviews] = useReviews()
  console.log(reviews);
  return (
    <div className='mb-32 '>
      <h1 className="text-2xl my-5 w-[65%] mx-auto border-y-4 leading-relaxed font-bold text-red-500">Customer's Review</h1>
      {reviews.map(review => <Review review={review} key={review.id}></Review>)}
    </div>
  );
};

export default Reviews;