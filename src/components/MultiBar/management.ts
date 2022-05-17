//Formats the hard-coded and api values to be same object
import {SingleBarProps} from '../SingleBar';

export interface ApiData {
  name: string;
  incomplete:number;
  complete:number;
}

export const formatInput = (input: any) => {
  if(!input || input.length === 0 || !Array.isArray(input)){
    return [];
  }
  if (!input[0].title) {
    const newArr = input.map((item:ApiData) => {
      return {
        title: item.name,
        left: { color: "#9ACD32", value: item.incomplete },
        right: { color: "#ff5349", value: item.complete },
      };
    });
    return newArr;
  } else {
    const newArr = input.map((item:SingleBarProps) => {
      return { ...item };
    });
    return newArr;
  }
};
