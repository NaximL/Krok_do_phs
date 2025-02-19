
const Block_m = ({id,children,hide}) => {

    return ( 
        <div id={`b${id}`} className={`B_main ${hide} track-visibility`}>
            {children}
        </div>
     ); 
}
 
export default Block_m;