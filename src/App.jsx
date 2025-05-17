import { useState } from "react";
import { CommandK } from "./CommandK";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      type Cmd + K
      <CommandK />
    </div>
  );
}

export default App;
