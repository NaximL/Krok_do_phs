import user from "../../imgs/user.png";

const Wfa = ({ clas, text, src, d }) => {
    return (
        <div
            className={clas}
            onClick={() => d ? (document.location.href = src) :window.open(src)}
        >
            <b>{text}</b>
        </div>
    );
};

export default Wfa;