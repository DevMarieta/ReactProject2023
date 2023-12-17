import React, { useEffect, useState } from "react";

export default function SpinnerLoader() {
  const [text, setText] = useState("");
  const [timeout, setTimeout] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setText (
        "nnnnnnnn"
        )
    }, 3000)
  }, [])

  return (
    <>
       <div>
        {
          showImg ? (
               
                <img src="./Infinity-1s-200px.gif"  />
             ):(
                 <h3>{text}</h3> 
             )
             }
       </div>
    </>
  );
}
