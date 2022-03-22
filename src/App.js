import React, {useState} from "react";
import reviews from "./data";
import Review from "./component/Review";

function App() {
  const data=reviews
  let [position, setPosition] = useState(0)

  const exactPosition = (exact) => {
    if (exact > data.length - 1) {
      return 0
    }
    if (exact < 0) {
      return data.length - 1
    }

    return exact;
  }

  const handleClickRight = () => {
      setPosition((position) =>{
       let newPosition = position + 1;
       return exactPosition(newPosition);
     }); 
  };

  const handleClickLeft = () => {
    setPosition((position) => {
      let newPosition = position - 1;
      return exactPosition(newPosition)
    });
  };

  const randomPerson = () => {
    let randomNumber = Math.floor(Math.random() * data.length);
    if (randomNumber === position) {
      randomNumber = position + 1;
    }
    setPosition(exactPosition(randomNumber));
  };

      

  return (
    <main>
      <section className="container">
      <div className="title">
      <h2>Our Reviews</h2>
      <div className="underline" />
      </div>
      <Review review={data} position={position} handleClickLeft={handleClickLeft} handleClickRight={handleClickRight} randomPerson={randomPerson}/>
      </section>
    </main>
  );
}

export default App;
