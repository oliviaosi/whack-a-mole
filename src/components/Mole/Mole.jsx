import React from "react";

function Mole(){
const top = Math.floor(Math.random()* 400)+1;
const left= Math.floor(Math.random()* 800) +1;

return (<button style={{positon:"absolute", top:top, left:left}}>
    I am mole </button>);

}

export default Mole;