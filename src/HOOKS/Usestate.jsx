import { useState } from "react"

export default function Usestate(){
    let [num, setNum] = useState(0);
    console.log(num);
    let [showImage,setShowImage] = useState(false);
    

    function plus() {
        setNum(num + 1)
    }

    function minus() {
        setNum(num - 1)
    }

    function reset() {
        setNum(0)
    }
    function image(){
         setShowImage(!showImage)
    }

    
    return (
        <div>
            <h1>
                Number is {num}
            </h1>
            <button onClick={plus}>
                Plus
            </button>
            <button onClick={minus}>
                Minus
            </button>
            <button onClick={reset}>
                Reset
            </button>
            <button onClick={image}>    
                {showImage ? "Sclick" :"Hclick"}    
            </button> 
      {showImage && (
        <div>
          <img
            src="https://gallerypng.com/wp-content/uploads/2024/05/god-krishna-png-images.png"
            alt="God Krishna"
            style={{ width: "500px", height: "600px" }}
          />
        </div>
      )}
           
        </div>
    );
}




