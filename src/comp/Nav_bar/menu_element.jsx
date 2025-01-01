

const Menu_el = ({did,ine,fun}) => {

    return ( 
        <div className="Menu_el" id={`d${ine}`} onClick={()=>{fun(ine)}}>
        <p id={`p${ine}`} className="Menu_placehold">{did.name}</p>
        </div>
     );
}
 
export default Menu_el;