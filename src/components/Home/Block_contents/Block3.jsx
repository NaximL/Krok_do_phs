import TypingTexts from "../../Help_comps/typedtext";


const Main_content_B3 = () => {
    return ( 
    <section className="Maon_B3">
        <div className="Typing">
            <div className="track-visibility"><TypingTexts text={"Панічна атака ? Як заспокоїти себе ?"} d={true}/></div>
            <p className="track-visibility">Заспокоїти себе можна за допомогою інтерактивних картор які допоможуть тобі у різних ситуаціях</p>
            
        </div>
    <div className="Phone_b3">
        <iframe className="test" src={"/card/stress/1"}></iframe>
        
    </div>
    </section> );
 }
 
export default Main_content_B3;