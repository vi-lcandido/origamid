import React from "react";
import "./App.css";

const App = () => {
  //   return React.createElement(
  //     "a",
  //     { href: "https://www.origamid.com" },
  //     "Origamid"
  //   );
  //Com a configuração no webpack posso trocar o return pelo jsx
  return <a href="https://www.origamid.com">Origamid</a>;
};

export default App;
