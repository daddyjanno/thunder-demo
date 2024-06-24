export const Button = (props, { children }) => {
    return (
        <button className={props.className} onClick={props.onClick}>
            {props.text}
            {children}
        </button>
    )
}
