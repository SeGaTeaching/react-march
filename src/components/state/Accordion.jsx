import { useState } from "react";

function Accordion(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion">
      <h3 onClick={() => setIsOpen(!isOpen)} style={{ cursor: "pointer" }}>
        {props.title} {isOpen ? "-" : "+"}
      </h3>
      {isOpen && <div>{props.children}</div>}
    </div>
  );
}

export default Accordion;
