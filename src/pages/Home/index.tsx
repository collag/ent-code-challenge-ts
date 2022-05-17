import useFetch from "../../services/useFetch";
import MultiBar from "../../components/MultiBar";
import SingleBar from "../../components/SingleBar";
import { values, singleBarValues, url } from "./management";
import React from "react";


//Parent component to SingleBar and MultiBar
const Home: React.FC = () => {
  
  const [data]= useFetch(url);
  const multibarValues = values;

  return (
    <>
      <div style={{ marginBottom: "3rem" }}>
        <h2>SingleBar Component</h2>
        <SingleBar
          left={singleBarValues.left}
          right={singleBarValues.right}
          title={singleBarValues.title}
        />
      </div>
      <div style={{ marginBottom: "3rem" }}>
        {multibarValues && (
          <div>
            <h2>MultiBar Component</h2>
            <MultiBar values={multibarValues} />
          </div>
        )}
      </div>
      <div style={{ marginBottom: "3rem" }}>
        {data && data.length >= 1 ? (
          <div>
            <h2>AsyncMultiBar Component</h2>
            <MultiBar values={data} />
          </div>
        ) : (
          <>
            <h2>AsyncMultiBar Component</h2>
            <h2 style={{ textAlign: "center" }}>Loading...</h2>
          </>
        )}
      </div>
    </>
  );
};

export default Home;
