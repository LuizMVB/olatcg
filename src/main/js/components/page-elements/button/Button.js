const Button = ({
    onClick,
    disabled,
    label,
    icon
}) => {
    return (
        <button className="waves-effect waves-light btn" onClick={(event) => onClick(event)} disabled={disabled}>
            <i className="material-icons right">{icon}</i>
            {label}
        </button>
    );
}

export default Button;