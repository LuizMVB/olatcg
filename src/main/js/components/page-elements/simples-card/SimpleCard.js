import { Link } from "react-router-dom";
import Toolkit from "../../../infra/Toolkit";

const SimpleCard = ({
    img,
    title,
    description,
    path
}) => {
    const msg = Toolkit.Messages.getMessages;
    return (
        <div className="card-panel red lighten-5 hoverable center-align">
            <img src={img} alt="" width="190" height="190" />
            <h3 className="header center grey lighten-1">{title}</h3>
            <h6 className="grey-text text-darken-3">{description}</h6>
            <br />
            <Link to={path}>
                <button className="waves-effect waves-light btn left-align pink lighten-1">{msg('common.button.value.vamosLa')}</button>
            </Link>
        </div>
    );
};

export default SimpleCard;