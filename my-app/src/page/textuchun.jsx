import { useState } from "react";

const ExpandableText = ({ text, maxLength = 350 }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <p className="text-container">
      {expanded ? text : `${text.slice(0, maxLength)}...`}
      <span
        onClick={() => setExpanded(!expanded)}
        style={{
            color: "#007bff",
            cursor: "pointer",
            fontWeight: "400",
            marginLeft: "5px",
        }}
      >
        {expanded ? " Kamroq" : " Ko'proq"}
      </span>
    </p>
  );
};

export default ExpandableText;
