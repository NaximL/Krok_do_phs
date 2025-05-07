
const Block = ({id,children,hide}) => {

    return ( 
        <div id={`b${id}`} className={`B_main ${hide} track-visibility`}>
            {children}
        </div>
     ); 
}
 
export default Block;