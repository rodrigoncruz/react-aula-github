function Apresentacao({name, age, city}) {
    return (
        <>
            <div className="container">
                <h1>{name}</h1>
                <p>Meu nome é {name}, tenho {age} anos, moro em {city}</p>
            </div>
        </>
    )
}

export default Apresentacao 