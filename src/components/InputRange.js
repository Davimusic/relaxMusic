import React, { useState } from "react";

const RangeInput = ({id}) => {
    const [value, setValue] = useState(0);

    function reubicar(val){
        setValue(val)
        let audio = document.getElementById('audioRep')
        audio.currentTime = val
    }

    return (
        <input
        type="range"
        min="0"
        max="100"
        id={id}
        value={value}
        className="slider"
        style={{}}
        onChange={(e) => reubicar(e.target.value)}
        />
    );
};

export default RangeInput;