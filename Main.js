import { useState, useRef, useEffect } from "react";

const Main = () => {
  const [name, setName] = useState("");
  const renderCount = useRef(0);
  const inputDom = useRef(null);

  const handleFirstName = (e) => {
    setName(e.target.value);
  };

  const focusInput = () => {
    inputDom.current.focus();
  };

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
  });

  return (
    <div>
      <input
        ref={inputDom}
        type="text"
        name="FirstName"
        id="FirstName"
        onChange={handleFirstName}
      />
      <h2>{name}</h2>
      <h3>{renderCount.current}</h3>
      <button onClick={focusInput}>Focus</button>
    </div>
  );
};

export default Main;
