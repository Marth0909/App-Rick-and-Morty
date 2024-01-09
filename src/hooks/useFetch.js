import axios from "axios"
import { useState } from "react"


const useFetch = (url) => { //vamos a recibir la url como parámetro del hook cuando se ejecute useFetch
    const [response, setResponse] = useState()
    const [hasError, sethasError] = useState(false)//se va iniciar en false porque al comienzo no se sabe si hay o no error

    const getApi = ()  => {
        axios.get(url)
        .then(resp  =>  {
            setResponse(resp.data) //setResponse porque ahi se va guardar la información
            sethasError(false) //aquí indica que no hay error
        })
        .catch(error  => {
            console.log(error)
        console.log(error);
        sethasError(true) //aquí indica que hay error
        })
    }
    return [response, getApi, hasError]
}

export default useFetch



