import { useState } from "react"

interface MemoizationProps {
    finacialData: {
        incomes: number[],
        outcomes: number[],
    }
}

export const Memoization: React.FC<MemoizationProps> = ({finacialData}) => {
    const [showValues, setShowValues] = useState(true)
    // total é o valor acumulativo. iniciando com 0
    const totalIncomes = finacialData.incomes.reduce((total, income) => {
        return total += income
    },0)

    const totalOutcomes = finacialData.outcomes.reduce((total, outcome) => {
        return total += outcome
    },0)

    return(
        <div>
            <h1>Memoization</h1>

            <h2>UseMemo</h2>

            <p>{`Total do valor de entrada é : ${showValues ? totalIncomes : "XXXXXX" }`}</p>
            <br />
            <p>{`Total do valor de entrada é : ${showValues ? totalOutcomes : "XXXXXXX"}`}</p>

            <br />
            <br />
            <button onClick={() => setShowValues(!showValues)}>
                {showValues ? "Ocultar Valores" : "Mostar Valores"}
            </button>
        </div>
    )
}