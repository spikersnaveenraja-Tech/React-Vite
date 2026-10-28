import { useState } from "react";

export default function expression() {

    const [isApple, setIsApple] = useState(true)
    const [isOrange, setIsOrange] = useState(true)
    const [isPineApple, setIsPineApple] = useState(true)
    const [isKiwi, setIsKiwi] = useState(true)

    return(
        <>
        <div className={"h2 text-center text-primary"}>D-MART</div>
          <div className={"container"}>
            <div className = {isApple ? "d-block" : "d-none"}>
                <div> Fruit Name : Apple </div>
                    <div> Fruit price : 50 </div>
                    <hr/>
                </div>

                <div className = { isOrange ? "d-block" : "d-none" } >
                    <div> Fruit Name : Orange </div>
                    <div> Fruit price : 45 </div>
                    <hr/>
                </div>
                <div className = { isPineApple ? "d-block" : "d-none" } >
                    <div> Fruit Name : Pineapple </div>
                    <div> Fruit price : 75 </div>
                    <hr/>
                </div>
                <div className = { isKiwi ? "d-block" : "d-none" } >
                    <div> Fruit Name : kiwi </div>
                    <div> Fruit price : 25 </div>
                    <hr/>
                </div>


          </div>
        
        </>
    )
}