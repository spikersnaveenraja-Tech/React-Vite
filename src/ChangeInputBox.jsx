import { useState } from "react"

export default function ChangeInputBox() {

    const [text, setText] = useState("Naveen")

    return (
        <>
            <div className="container">
                <div className="mt-3">
                    <input type="text" value={text} onChange={(eve) => setText(eve.target.value)} />
                </div>
                <div className="mt-3">
                    <span className="h3">Typed Text : </span>
                    <span>{text}</span>
                </div>
            </div>
        </>
    )
}