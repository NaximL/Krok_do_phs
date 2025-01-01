

const M_il = ({obj}) => {
    const sele = () => {
        localStorage.color = JSON.stringify({
            color1:obj.colors[0].color,
            color2:obj.colors[1].color,
        })
        document.getElementsByClassName("My_modal")[0].style ="display:none"
        document.getElementsByClassName("back")[0].style ="display:none"
        localStorage.color_vers =true
        document.body.style.overflow = 'auto';
        document.location.reload()
    }
    return ( 
        <div className="M_il" onClick={sele}>
            {obj.colors.map((g,index)=>(

            <div key={index} style={{backgroundColor:g.color}} className="M_il_d"></div>
            ))}
        </div>
     );
}
 
export default M_il;