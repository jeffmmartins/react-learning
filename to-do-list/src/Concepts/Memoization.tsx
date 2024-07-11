import { useCallback, useMemo, useState } from "react"

interface MemoizationProps {
    finacialData: {
        incomes: number[],
        outcomes: number[],
    }
}

export const Memoization: React.FC<MemoizationProps> = ({finacialData}) => {
    const [showValues, setShowValues] = useState(true)
    // total é o valor acumulativo. iniciando com 0

    // usar useMemo quando tiver calculos complexos para caso nao altere valor constnate desse calculo pra nao refazer o calculo e perder a performace do app
    // essa depedencia do usememo é para quando alterar valores no finacialData ai ele faz a re-renderização, fazendo o recalculo 
    const totalIncomes = useMemo(() => {
        finacialData.incomes.reduce((total, income) => {
        return total += income
        },0)
    },[finacialData.incomes])
    
    const totalOutcomes = useMemo(() => {
        finacialData.outcomes.reduce((total, outcome) => {
        return total += outcome
        },0)
    },[finacialData.outcomes])
    

    // para verificar se o componente está rendenrizando. 
    console.log("Re-rendenrização do componente")

    const aplicarDesconto = useCallback((desconto: number) => {
        return totalOutcomes * (1-desconto)
    },[totalOutcomes])

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