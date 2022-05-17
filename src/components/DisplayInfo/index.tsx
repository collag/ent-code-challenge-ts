import React from "react";

interface DisplayBoxProps {
  total: number;
  title: string;
  percent: number;
  value: number;
}

//Displays details of data from moused over color bar
const DisplayBox: React.FC<DisplayBoxProps> = ({
  total,
  title,
  percent,
  value,
}) => {
  return (
    <div style={{ backgroundColor: "#C8C8C8", display: "flex" }}>
      <span style={{ marginRight: "1.5rem" }}>{title}</span>
      <span style={{ marginRight: "1.5rem" }}>{`Value: ${value}`}</span>
      <span
        style={{ marginRight: "1.5rem" }}
      >{`${percent}% of total ${total}`}</span>
    </div>
  );
};

export default DisplayBox;
