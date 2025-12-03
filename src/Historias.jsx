import './Pags.css'
function Historias(){

    return(
        <div className='pag'>
            <h1>Historias Navideñas</h1>
            <div className="historias">
                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                            <img src="Carol.jpg" class="d-block" alt="..." />
                            </div>
                            <div class="carousel-item">
                            <img src="Rey.jpg" class="d-block" alt="..."/>
                            </div>
                            <div class="carousel-item">
                            <img src="casca.jpg" class="d-block" alt="..."/>
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                </div>



                    <div class="accordion" id="accordionPanelsStayOpenExample">
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
1. Cuento de Navidad (A Christmas Carol)                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
                            <div class="accordion-body">
                                Ebenezer Scrooge es un anciano avaro que detesta la Navidad. La noche de Nochebuena, es visitado por el fantasma de su difunto socio, Jacob Marley, quien le advierte que tres espíritus lo visitarán. El Espíritu de las Navidades Pasadas le muestra su corazón joven y la fuente de su codicia; el de las Presentes le enseña la pobreza pero la alegría de la familia de su empleado, Bob Cratchit, y su hijo enfermo, Tiny Tim; y el de las Futuras le revela su propia muerte solitaria. Al amanecer, aterrorizado por la visión de su tumba sin nombre, Scrooge se arrepiente. Se convierte en un hombre generoso, manda un gran pavo a los Cratchit, sube el sueldo a Bob y salva la vida de Tiny Tim, encarnando el verdadero espíritu navideño.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                               2. El Regalo de los Reyes Magos (The Gift of the Magi)
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
                            <div class="accordion-body">
                                Della y Jim Dillingham Young son una joven pareja de bajos recursos pero profundamente enamorada. Ella posee un hermoso y largo cabello, y él, un valioso reloj de oro de herencia familiar. Justo antes de Navidad, Della desea comprar una cadena para el reloj de Jim, pero no tiene dinero. Ella toma la decisión de vender su preciado cabello. Al mismo tiempo, y sin que Della lo sepa, Jim vende su reloj para comprarle un juego de peinetas de carey para su cabello. Al intercambiar los regalos, se dan cuenta de que ambos sacrificaron su única posesión valiosa por la felicidad del otro, dejando sus regalos inútiles, pero demostrando que el amor desinteresado es el regalo más preciado de todos.
                            </div>
                            </div>
                        </div>
                        <div class="accordion-item">
                            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                                3. El Cascanueces y el Rey de los Ratones
                            </button>
                            </h2>
                            <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                            <div class="accordion-body">
                                La noche de Navidad, la joven Marie (o Clara) recibe como regalo un cascanueces de madera. Cuando la medianoche llega, el cascanueces cobra vida y lidera a un ejército de juguetes en una batalla contra el malvado Rey Ratón y sus súbditos. Marie ayuda al cascanueces a ganar el combate. En agradecimiento, el cascanueces se transforma en un apuesto Príncipe. Él la lleva a un viaje mágico a través del País de las Nieves hasta el maravilloso Reino de los Dulces, donde es recibida con bailes y celebraciones espectaculares. La historia celebra la magia, la imaginación y la creencia en las maravillas de la Navidad.
                            </div>
                            </div>
                        </div>
                    </div>
        </div>
        </div>
    );

}
export default Historias;