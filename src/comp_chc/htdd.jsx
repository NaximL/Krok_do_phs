

const Htd = ({obj}) => {
    return ( 
        <div className="Htd" onClick={()=>{document.location.href=`/card/${obj.tema}/1`}}>
            <h2 className="obg">{obj.kroki[0].golov_text}</h2>
        </div>
     );
}
 
export default Htd;