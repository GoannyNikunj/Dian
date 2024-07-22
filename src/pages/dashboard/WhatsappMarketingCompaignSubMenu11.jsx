import React from "react";

const App = (props) => {
  const sendDataToParent = () => {
    const data = "Data sent from child to parent";
    props.MainPageFunctionKey2(data);
  };

  return (
    <div>
      <button onClick={sendDataToParent}>Send Data to Parent</button>
    </div>
  );
};

export default App;
