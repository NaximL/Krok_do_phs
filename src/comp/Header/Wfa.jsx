import { Link } from "react-router-dom";


const Wfa = ({ clas, text, src }) => {
    return (
        <Link to={src} className={clas}>
            <b>{text}</b>
        </Link>
    );
};

export default Wfa;
