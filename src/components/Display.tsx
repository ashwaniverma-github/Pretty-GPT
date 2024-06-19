import React, { useEffect, useState } from "react";
import Typewriter from "typewriter-effect";

interface DisplayProps {
  response: string;
}

export default function Display({ response }: DisplayProps) {
  const [key, setKey] = useState(0);

  // Update the key whenever the response changes to re-render the Typewriter component
  useEffect(() => {
    setKey(prevKey => prevKey + 1);
  }, [response]);

  return (
    <div className="flex justify-center min-h-screen ">
      <div className=" mb-5 w-4/5 max-w-lg m-4 mt-20 sm:mt-4">
        <Typewriter 
          key={key}
          options={{
            delay:50
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString(response)
              .callFunction(() => {
                console.log("String typed out!");
              })
              .pauseFor(3000)
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </div>
    </div>
  );
}
