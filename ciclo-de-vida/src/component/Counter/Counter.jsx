import React from "react";

export class Counter extends React.Component{
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