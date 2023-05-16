import img404 from "../../static/img/pila-de-libros.png"
export const Error_404 = () => {
    return (
        <>
            <div className="container">

                <div className=" d-flex justify-content-center m-3">
                    <div className="w-100">
                        <div className="position-absolute top-50 start-50 translate-middle">

                            <h1 style={{ fontSize: "10rem", }}>
                                <p className="text-center">Error</p>
                                4<img src={img404} alt='404' width='180px' height='180px' />4</h1>
                            <p className="d-flex justify-content-center fs-1">Page not found</p>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}