import React from 'react';
import "./Speed.css";

const Speedometer = (props) => {
 
  return (
    <>
      <div className='flex justify-center items-center'>
        <div className="speedometer">
          <div className="needle" style={{ '--score': 20 }}>
            {/* <span className="score">210</span> */}
            <span className="score"></span>
          </div>
        </div>
      </div>
      
      <div className="text-center">
        <h6 className="text-2xl">{props.raDataKey.overAllRating}</h6>
        <p className="mb-2 text-sm">Overall Rating</p>
        <p className="mb-2 text-sm   font-bold">Total Reviews {props.raDataKey.totalReviews}</p>
        <div className="flex justify-center" style={{ fontSize: 10 }}>
          <span class="mr-4">Positive Reviews <span class="font-bold">{props.raDataKey.positiveReviews}</span></span>
          <span class="mr-4">Negative Reviews <span class="font-bold">{props.raDataKey.negativeReviews}</span></span>
          <span>Average Reviews <span class="font-bold">{props.raDataKey.averageReviews}</span></span>
        </div>
      </div>
    </>
  )
}

export default Speedometer;