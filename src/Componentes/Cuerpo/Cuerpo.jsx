import React from "react"
import Gallery from "../Gallery/Gallery"

const Cuerpo = ({ cards }) => {
    return (
        <div>
            <Gallery imagen={cards}></Gallery>
        </div>
    )
}

export default Cuerpo
