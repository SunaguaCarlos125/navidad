import './Pags.css' 
function Canciones(){

    return(
        <div className="pag">
            <h1>Canciones con Tematica Navideña</h1>
            <div className="videos">
                <div className='video'><iframe width="560" height="315" src="https://www.youtube.com/embed/qLQIdX1RR9o" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3>Laura Pausini - Santa Claus LLego a La Ciudad</h3>
                </div>
                <div className='video'><iframe width="560" height="315" src="https://www.youtube.com/embed/aAkMkVFwAoo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3>Mariah Carey - All I Want for Christmas Is You</h3>
                </div>
                <div className='video'><iframe width="560" height="315" src="https://www.youtube.com/embed/gset79KMmt0" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3>Sia - Snowman</h3>
                </div>
                <div className='video'><iframe width="560" height="315" src="https://www.youtube.com/embed/E8gmARGvPlI" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                    <h3>Wham! - Last Christmas</h3>
                </div>
            </div>
        </div>

    );

}
export default Canciones;

