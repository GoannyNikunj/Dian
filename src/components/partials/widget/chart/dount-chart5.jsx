import React from 'react';

function circle({ backgroundColor , backgroundColor2 , rating, reviews }) {
    // Calculate the stroke-dashoffset based on the percentage
    const percentage = 4.83;
    const circumference = 251.2;
    const offset = circumference - (percentage / 100) * circumference;
    
    return (
        <div style={{ width: '50%', maxWidth: '200px', height: 'auto', position: 'relative', borderRadius: '50%', backgroundColor: '#FFFFFF', margin: '0 auto' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', fontSize: '16px', color: '#333', textAlign: 'center', whiteSpace: 'nowrap' }}>
                <a style={{color:"#50536A",width:"62px",height:"40px",fontWeight:"600",fontSize:"33.73px"}}> {rating}</a>
                <br /> 
                <a style={{color:"#6C6F87",width:"84px",height:"19px",fontWeight:"600",fontSize:"15.74px"}}> {reviews} Reviews</a>
            </div>
            <svg viewBox="0 0 100 100" style={{ width: '100%', height: 'auto', transform: 'rotate(-90deg)' }}>
                {/* Background circle */}
                <circle className="background" cx="50" cy="50" r="40" style={{ fill: 'none', stroke: backgroundColor2, strokeWidth: '20', strokeLinecap: 'round' }}></circle>
                {/* Progress circle (representing percentage) */}
                <circle className="progress" cx="50" cy="50" r="40" strokeDasharray="251.2" strokeDashoffset={offset} style={{ fill: 'none', stroke: backgroundColor, strokeWidth: '20', transition: 'stroke-dashoffset 0.5s ease-in-out' }}></circle>
            </svg>
        </div>
    );
}

export default circle;