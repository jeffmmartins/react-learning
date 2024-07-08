import React from "react";

export class Counter extends React.Component{
    constructor(){
        super();
        console.log("construido a classe counter")
    }
    render() {
        return (
            <>
                <h1>0</h1>
                <button>Aumentar</button>
                <button>Diminuir</button>
            </>
        )
    }
}