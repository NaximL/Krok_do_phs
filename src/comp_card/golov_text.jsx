

const G_text = ({text,children}) => {
    return ( 
        <div className="Zagolov_card">
            <h1>{text}</h1>
            {children}
        </div>
     );
}
 
export default G_text;