import React from "react";

const App = (props) => {

  var a = [50,30,20];
  var b = ["#19CCB7","#FDD66E","#FF4995"]

  var backgroundSetStringProperty = ''

  var StartingPoint = [];
  var EndingPoing = [];

  for (var i = 0; i < a.length; i++) {
    
    var OnePercentageIsEqualToDegree = 3.6;
    var TotalCoverArea = OnePercentageIsEqualToDegree * a[i];

    if (i == 0) {

      StartingPoint.push(0);

      EndingPoing.push(
         TotalCoverArea
      );

    } else {

      StartingPoint.push(
        EndingPoing[EndingPoing.length - 1]
      );

      EndingPoing.push(
        StartingPoint[StartingPoint.length - 1] + TotalCoverArea
      );

    }

  }

  for(var i = 0; i < StartingPoint.length; i++){
    backgroundSetStringProperty = backgroundSetStringProperty + b[i] + " " + StartingPoint[i] + "deg " + EndingPoing[i] + "deg,"
  }
  
  backgroundSetStringProperty = backgroundSetStringProperty.slice(0, -1)

  var images = [];

  for (var i = 0; i < a.length; i++) {

    var extraadd = EndingPoing[i] - 90

    const middleAngle = StartingPoint[i] + (EndingPoing[i] - StartingPoint[i]) / 2 ;
    
    images.push({
      rotation: middleAngle,
      text: a[i].toFixed(2) + "%",
    });

    // if (i == 0) {

      // images.push({
        // rotation: "90",
        // text: a[i].toFixed(2) + "%",
      // });

    // } else if (i == 1) {

      // images.push({
        // rotation: "210",
        // text: a[i].toFixed(2) + "%",
      // });

    // } else {

      // images.push({
        // rotation: "330",
        // text: a[i].toFixed(2) + "%",
      // });
      // 
    // }

  }

  const outerCircleStyle = {
    width: "200px",
    height: "200px",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "50%",
    background:
      `conic-gradient(from 90deg, ${backgroundSetStringProperty})`,
  };

  const innerCircleStyle = {
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    position: "relative", // Added position to enable positioning of child elements
  };

  const textStyle = {
    textAlign: "center",
    marginTop: "5px",
    fontSize: "12px",
    fontWeight: "bold",
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: 0,
          backgroundColor: "#FFFFFF",
        }}
      >
        <div style={outerCircleStyle}>
          <div
            style={{
              position: "absolute",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              background: "#FFFFFF",
            }}
          >
            {" "}
          </div>
          <div style={innerCircleStyle}>
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
              }}
            >
              <div style={textStyle}>₹1,000 Revenue Generated</div>
            </div>
          </div>
          {images.map((image, index) => (
            <div
              key={index}
              style={{
                position: "absolute",
                textAlign: "center",
                transform: `rotate(${image.rotation}deg) translate(75px) rotate(-${image.rotation}deg)`,
              }}
            >
              <div style={textStyle}>{image.text}</div>
            </div>
          ))}
        </div>
      </div>

      {(() => {
        if (props.props.expense) {
          return <div className="text-center mt-3">
          <div className="flex justify-center bg-white border border-gray-200 p-2" style={{ fontSize: 10,borderRadius:10 }}>
            <span className="mr-4 text-sm">
              Expense: <span className="font-bold">{props.props.expense}</span>
            </span>
            <span className="mr-4 text-sm">
              Profit: <span className="font-bold">{props.props.profit}</span>
            </span>
          </div>
        </div>
        } 
      })()}
      

    </>
  );
};

export default App;
