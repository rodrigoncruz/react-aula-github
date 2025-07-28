function Secao({img, title}) {
    return (
        <>
            <div className="container">
                <h5>{title}</h5> 
                <img width={400} height={300} src={img} alt="teste de imagem" />
            </div>
        </>
    )
}

export default Secao 