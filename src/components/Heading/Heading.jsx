import "../../css/heading.css";

// Heading component for the navbar
function Heading({children}) {
    return (
        <h2 className="title">{children}</h2>
    )
}

export {Heading}