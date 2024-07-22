import React from 'react';

function StudentSubjects({ overallValues, foodValues ,ambienceValues,costingValues,serviceValues,reviewsValues}) {
  // Assuming overallValues and foodValues are objects with value1 and value2 properties

  // Define the statistics array with dynamically generated names based on props values
  const statistics = [
    { Name: "Overall", value1: overallValues.value1, value2: overallValues.value2 },
    { Name: "Food", value1: foodValues.value1, value2: foodValues.value2 },
    { Name: "Ambience" ,value1: ambienceValues.value1, value2: ambienceValues.value2},
    { Name: "Costing" ,value1: costingValues.value1, value2: costingValues.value2},
    { Name: "Service" ,value1: serviceValues.value1, value2: serviceValues.value2},
    { Name: "Review" ,value1: reviewsValues.value1, value2: reviewsValues.value2},
    { Name: "Revenue" },
    { Name: "Customer Data" },
    { Name: "Marketing Budget" }
  ];

  return (
    <>
      {statistics.map((item, i) => (
        <div className="student" style={{ marginBottom: '20px' }} key={i}>
          <div className="student-details" style={{ display: 'flex', alignItems: 'center' }}>
            <div className="student-name" style={{ fontWeight: 'bold', marginRight: '10px', marginLeft: "0px", width: "95px" }}>{item.Name}:</div>
            <ul className="subjects" style={{ listStyleType: 'none', padding: 0, margin: 0, width: "calc(100% - 105px)" }}>
              <li className="subject" style={{ marginBottom: '5px' }}>
                <div className="progress-bar" style={{ backgroundColor: '', borderRadius: '5px', height: '10px', marginLeft: '10px' }}>
                  <div className="progress" style={{ backgroundColor: '#19CC56', height: '100%', borderRadius: '5px', width: '90%' }}></div>
                </div>
              </li>
              <li className="subject" style={{ marginBottom: '5px' }}>
                <div className="progress-bar" style={{ backgroundColor: '', borderRadius: '5px', height: '10px', marginLeft: '10px' }}>
                  <div className="progress" style={{ backgroundColor: '#FF4995', height: '100%', borderRadius: '5px', width: '70%' }}></div>
                </div>
              </li>
            </ul>
            {/* Render values dynamically */}
            {item.value1 && item.value2 && (
              <div className="student-name" style={{ fontWeight: 'bold', marginRight: '10px', marginLeft: "0px", width: "95px" }}>
                {item.value1}<br />{item.value2}
              </div>
            )}
          </div>
          <hr />
        </div>
      ))}
    </>
  );
}

export default StudentSubjects;
