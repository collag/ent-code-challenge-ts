import { formatInput } from "./management";
import SingleBar from "../SingleBar";
import React from "react";
import { SingleBarProps } from "../SingleBar";
import { ApiData } from "./management";

export interface MultiBarProps {
  values: SingleBarProps[] | ApiData[];
}

//Displays multibar component either hard-coded or api based data
const MultiBar: React.FC<MultiBarProps> = ({ values }) => {
  const formatedInputArr = formatInput(values);

  return (
    <div>
      {formatedInputArr.map((item: SingleBarProps) => {
        return (
          <SingleBar left={item.left} right={item.right} title={item.title} />
        );
      })}
    </div>
  );
};

export default MultiBar;
