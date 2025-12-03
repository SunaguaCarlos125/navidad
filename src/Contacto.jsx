import './Pags.css'
function Contacto(){
return(

            <div className='pag'>
                <h1>Contactos</h1>
                <div className="contac">
                    <div className="card" style={{width: "18rem"}}>
                            <img src="VaultBoy.jpg" className="card-img-top" alt="..."/>
                            <div className="card-body">
                                <h4 className="card-title">Contactanos</h4>
                                <p className="card-text">Email: carlos.sl125000@gmail.com</p>       
                                <p className="card-text">Celular: 69954412</p>       
                                    
                            </div>

                        
                    </div>
                    <h5>Direccion:</h5>        
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.441161746338!2d-68.13196832400001!3d-16.503811084240475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x915f206517d882d1%3A0x7efa3457461b1e6a!2sComputer%20Career%20-%20UMSA!5e0!3m2!1sen!2sbo!4v1764730704839!5m2!1sen!2sbo"
                        width="600"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        >

                        </iframe>
                </div>
            </div>

        );

    }
export default Contacto;