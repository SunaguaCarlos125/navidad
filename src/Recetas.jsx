import './Pags.css'
function Recetas(){

    return(
        <div className="pag">
            <h1>Recetas Navideñas</h1>
            <div className="recetas">
                <div className="card" style={{ width: "18rem" }}>
                    <img src="./EnsaladaFruta.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Ensalada Festiva de Manzana y Nuez</h5>
                        <p className="card-text">Ensalada refrescante y crujiente, ideal para acompañar platos fuertes de Navidad. Combina cubos de manzana roja y verde, apio finamente picado, nueces y pasas/arándanos secos. El aderezo es una mezcla simple y cremosa de crema agria o yogur y mayonesa, con un toque opcional de azúcar. Se recomienda enfriar por 30 minutos antes de servir para intensificar los sabores.</p>
                    </div>
                    
                </div>

            
                <div className="card" style={{ width: "18rem" }}>
                    <img src="./Pavo.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Pavo Glaseado Rápido con Miel y Naranja</h5>
                        <p className="card-text">Pavo navideño asado con un glaseado dulce y cítrico de miel, jugo de naranja y romero. Esta mezcla no solo le da un brillo espectacular a la piel, sino que también garantiza una carne jugosa y aromática. Se sazona con sal y pimienta, se unta con mantequilla y se pincela repetidamente con el glaseado mientras se hornea a 160 grados.</p>
                    </div>
                    
                </div>

            
                <div className="card" style={{ width: "18rem" }}>
                    <img src="./galletas.jpg" className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">Galletas de Jengibre (Gingerbread)</h5>
                        <p className="card-text">El dulce clásico y aromático de la Navidad. Estas galletas de textura firme son perfectas para cortar en formas festivas (muñecos, estrellas o árboles) y decorar. La masa incorpora una mezcla potente de jengibre, canela y clavo, y melaza para el color y sabor característico. Deben enfriarse antes de cortar y se hornean en poco tiempo.</p>
                    </div>
                    
                </div>

            </div>
        </div>

    );

}
export default Recetas;