import { Link } from "react-router-dom";


const Wfa = ({ clas, text, src }) => {
    return (
        <Link to={src} className={`${clas} dge`}>
            <b>{text}</b>
        </Link>
    );
};

export default Wfa;
