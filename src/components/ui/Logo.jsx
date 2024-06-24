import { Link } from 'react-router-dom'

const Logo = (props) => {
    return (
        <Link to={props.to}>
            <img
                src={props.src}
                alt={props.alt}
                className={props.className}
                onClick={props.handleClick}
            />
        </Link>
    )
}

export default Logo
