export const Titulo = (props) => {
    // posso desestruturar abrindo {} e passando o nome sem o props 
    return(
        <>
        <h2 style={{color: props.cor }}>{props.titulo}</h2>
        </>
    )
}