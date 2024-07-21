import { useState } from "react";

interface Props {
  maxChars?: number;
  children: string;
}
function ExpandableText({ maxChars = 100, children }: Props) {
  const [isExpanded, setExpanded] = useState(false);

  if (children.length <= maxChars) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxChars) + "...";

  return (
    <div className="my-4">
      <p>
        {text}{" "}
        <button className="d-inline" onClick={() => setExpanded(!isExpanded)}>
          {isExpanded ? "See less" : "See more"}
        </button>
      </p>
    </div>
  );
}

export default ExpandableText;
