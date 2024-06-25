export const ListCategories = ({categories}) => {
    return (
        <>
        <h1>Meu Estoque:</h1>
        <ul>
          {categories.map(({ label, slug }) => (
            <li key={slug}>{label}</li>
          ))}
        </ul>
        </>
    )
}