import { useState } from "react"

export default function SelectBoxEvent() {

    const [selectItem, setSelectItem] = useState("")

    return (
        <>
            <div className="container m-3">
                <label htmlFor="country" className="form-label">Country</label>
                <select name="country" id="country" className="form-select" onChange = {(e)=>{setSelectItem(e.target.value)}}>
                    <option value="--"></option>
                    <option value="India">India</option>
                    <option value="Pakisthan">Pakisthan</option>
                    <option value="China">China</option>
                    <option value="Thailand">Thailand</option>
                </select>
                <div className="mt-5">
                    <span className="text-primary">You selected Item</span>
                    <span className ="ms-2 h5">{selectItem}</span>
                </div>

            </div>
        </>
    )
}