


const G_img = ({img,children}) => {
    
    return ( 
        <div className="Card_img_conte" >
            <img className="Card_img" src={img}/>
            {children}
        </div>
     );
}
 
export default G_img;