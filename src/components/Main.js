import React from "react";
import dataButtons from "../databuttons";
import Button from "./Buttons";

function Main() {
    let listOfButtons = dataButtons.map(Buttons => {
        return <Button button={Button} />
    })

    return (
        <div>
            <h1>Тату машинки</h1>
                <div className="button-wrapper">{listOfButtons}</div>
        </div>
    )
}







export default Main;