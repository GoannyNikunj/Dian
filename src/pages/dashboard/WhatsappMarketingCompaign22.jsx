import React, { useState } from "react";
import WhatsappMarketingCompaignSubMenu11 from "./WhatsappMarketingCompaignSubMenu11";

function App() {
  const [dataFromChild4, setdataFromChild4] = useState(null);

  const handleDataFromChild4 = (data) => {
    setdataFromChild4(data);
  };

  return (
    <div>
      <p>{dataFromChild4}</p>
      <WhatsappMarketingCompaignSubMenu11 MainPageFunctionKey2={handleDataFromChild4} />
    </div>
  );
}

export default App;
