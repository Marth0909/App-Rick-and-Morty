import { useEffect, useRef, useState } from 'react'
import './App.css'
import useFetch from './hooks/useFetch'
import getRandomNumber from './utils/getRandomNumber'
import LocationCard from './components/LocationCard'
import ResidentCard from './components/ResidentCard'

function App() {
 const locationId = getRandomNumber(126)
 const [inputValue, setinputValue] = useState(locationId)//inputValue es el estado que guarda la inforamación que el usuario escribe en el input
 const url = `https://rickandmortyapi.com/api/location/${inputValue}`
const [ location, getLocation, hasError] = useFetch(url) //peticion de location


useEffect(() => { //parte de la peticion de location
  getLocation()
}, [inputValue])

 const inputLocation = useRef()
 const handleSubmit = e => {
  e.preventDefault()
  setinputValue(inputLocation.current.value)//inputLocation es un objeto que adentro tiene current
 }
  
  return (
   
    <div>
      <header className='background'>
        
      </header>  
      <form onSubmit={handleSubmit} className="form-container">
        <input ref={inputLocation} type="text" className="input-field" />
        <button className="search-button"> Search</button>
      </form>
      {
        hasError
        ? <h2>Hey! you must provide an id from 1 to 126</h2>
        :  (
          <>
            <LocationCard
              location={location} 
            />
            <div className='resident__container'>
              {
                location?.residents.map(url =>(
                 <ResidentCard 
                  key={url}
                  url={url}
                  />
                )) 
              }
            </div>
          </>
           )}
     </div> 
      )
    }
export default App
