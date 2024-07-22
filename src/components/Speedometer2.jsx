import React from 'react';

const App = (props) => {
    const outerCircleStyle = {
        width: '200px',
        height: '200px',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        background: 'conic-gradient(#FDD774 0deg 18deg, #19CCB7 18deg 54deg, #19CC56 54deg 90deg, transparent 90deg 270deg, #FF495F 270deg 306deg, #FF4995 306deg 342deg, #FDD774 342deg 360deg)'
    };

    const innerCircleStyle = {
        width: '100px',
        height: '100px',
        borderRadius: '50%',
        background: 'conic-gradient(transparent 0deg 1deg, green 1deg 89deg, transparent 89deg 271deg, green 271deg 359deg, transparent 359deg 360deg)'
    };

    const imageStyle = {
        position: 'absolute',
        width: '20px',
        height: '20px'
    };

    const images = [
        { src: '/src/assets/images/svg/Emoji1.svg', rotation: 196 },
        { src: '/src/assets/images/svg/Emoji2.svg', rotation: 232 },
        { src: '/src/assets/images/svg/Emoji3.svg', rotation: 268 },
        { src: '/src/assets/images/svg/Emoji4.svg', rotation: 304 },
        { src: '/src/assets/images/svg/Emoji5.svg', rotation: 340 }
    ];

    const containerStyle = {
        position: 'relative',
        width: '100px',
        height: '100px',
        backgroundColor: '#FFFFFF',
        borderRadius: '50%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
      };
    
      const svgStyle = {
        width: "25px",
        height: "25px",
        position: 'absolute',
        top: '50%',
        left: '50%',
        transformOrigin: '0 100%', /* Bottom-left corner */
        transform: 'translate(0, -100%) rotate(45deg)', /* Offset SVG height */
        animation: 'rotate 5s linear infinite'
      };
    
      const keyframes = `
        @keyframes rotate {
          from {
            transform: translate(0, -100%) rotate(0deg);
          }
          to {
            transform: translate(0, -100%) rotate(360deg);
          }
        }
      `;
      
    return (
        <>
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                margin: 0,
                backgroundColor: '#FFFFFF',
            }}>
                <div style={outerCircleStyle}>
                    {/* <div style={{ position: 'absolute', width: '100px', height: '100px', borderRadius: '50%', background: '#FFFFFF', backgroundSize: '40px 40px', backgroundPosition: '50% calc(50% - 20px)', backgroundRepeat: 'no-repeat', transform: `rotate(0deg)`, backgroundImage: 'url(/src/assets/images/svg/Needle.svg)' }}> </div> */}
                    <div style={containerStyle}>
      <style>{keyframes}</style>
      <svg className="rotating-svg" width="47" height="48" viewBox="0 0 47 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={svgStyle}>
        <g filter="url(#filter0_d_1_1223)">
          <path d="M45.3599 0.31071L10.4825 26.6157L0.616697 45.0576L19.0578 35.1902L45.3599 0.31071Z" fill="#50536A"/>
        </g>
        <defs>
          <filter id="filter0_d_1_1223" x="0.616211" y="0.310791" width="46.0916" height="47.4417" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dx="1.34742" dy="2.69483"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_1223"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_1223" result="shape"/>
          </filter>
        </defs>
      </svg>
    </div>
                    <div style={innerCircleStyle}></div>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            src={image.src}
                            alt={`image-${index}`}
                            style={{
                                ...imageStyle,
                                transform: `rotate(${image.rotation}deg) translate(75px) rotate(-${image.rotation}deg)`
                            }}
                        />
                    ))}
                </div>
            </div>
            <div className="text-center" style={{ marginTop: '-50px' }}>
                <h6 className="text-2xl">{props.raDataKey.overAllRating}</h6>
                <p className="mb-2 text-sm">Overall Rating</p>
                <p className="mb-2 text-sm font-bold">Total Reviews {props.raDataKey.totalReviews}</p>
                <div className="flex justify-center" style={{ fontSize: 10 }}>
                    <span className="mr-4">Positive Reviews <span className="font-bold">{props.raDataKey.positiveReviews}</span></span>
                    <span className="mr-4">Negative Reviews <span className="font-bold">{props.raDataKey.negativeReviews}</span></span>
                    <span>Average Reviews <span className="font-bold">{props.raDataKey.averageReviews}</span></span>
                </div>
            </div>
        </>
    );
}

export default App;
