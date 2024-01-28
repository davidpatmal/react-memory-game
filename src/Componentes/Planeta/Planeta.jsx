import React from "react"
import { useState } from "react"

const Planeta = ({ planet, actualizar }) => {
    const [reverso, setReverso] = useState()
    const [checkArray, setCheckArray] = useState([])

    const cartaArriba = () => {
        setReverso(!reverso)
    }

    const clickCard = () => {
        checkArray.push()
        if (checkArray.length === 2 && checkArray[0] !== checkArray[1]) {
            console.log(checkArray)
        }
    }

    return (
        <>
            {reverso ? (
                <img
                    onClick={() => {
                        cartaArriba()
                        clickCard()
                    }}
                    className="planeta"
                    src={planet.img}
                    alt="imagenes"
                />
            ) : (
                <img onClick={cartaArriba} src="http://localhost:3000/fotos/universe.svg" alt="imagen" />
            )}
        </>
    )
}
export default Planeta
