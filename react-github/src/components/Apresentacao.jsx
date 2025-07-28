function Apresentacao({name, age, city, college}) {
    return (
        <>
            <div className="container">
                <h1>{name}</h1>
                <p>Meu nome é {name}, tenho {age} anos, moro em {city} e estou estudando {college}</p>
            </div>
        </>
    )
}

export default Apresentacao 