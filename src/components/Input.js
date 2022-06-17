import React, { Fragment, useState } from 'react'
import { BsSearch } from 'react-icons/bs'
import { HiOutlineLocationMarker } from 'react-icons/hi'

const API = 'http://api.weatherapi.com/v1'
const API_KEY = '002759744c354232b78210806221506'

function Input() {
  const [city, setCity] = useState('')
  const [weatherForecast, setWeatherForecast] = useState(null)

  const handleChange = (e) => {
    setCity(e.target.value)
  }

  const handleSearch = () => {
    fetch(`${API}/current.json?key=${API_KEY}&q=${city}&lang=pt`)
      .then((response) => {
        if (response.status === 200) {
          return response.json()
        }
      })
      .then((data) => {
        console.log(data)
        setWeatherForecast(data)
      })
  }
   const handleKeyPress = (e) => {
    if(e.charCode === 13){
      handleSearch()
    }
   }
  

  return (
    <Fragment>
      <div className='flex flex-row justify-center my-6'>

        <div className='flex flex-row w-34 items-center justify-center space-x-4'>

          <input
          onKeyPress={handleKeyPress}
            onChange={handleChange}
            value={city}
            type="text"
            placeholder='Insira aqui o nome da cidade...'
            className='p-2 w-80 sm:text-xs shadow-xl focus:outline-none capitalize placeholder:lowercase'
          />
          <BsSearch
            size={20}
            onClick={handleSearch}
            className='text-white cursor-pointer transition ease-out hover:scale-125' />
          <HiOutlineLocationMarker size={30} className='text-white cursor-pointer transition ease-out hover:scale-125' />

          {
            weatherForecast ? (
              <div>
                <div>
                  <div>
                    <img src={weatherForecast.current.condition.icon} alt="icon" />
                  </div>
                </div>

                <div>

                </div>



              </div>
            ) : null}

        </div>
      </div>
      {
        weatherForecast ? (
          <div>
            <div className='flex items-center justify-center  '>
              <div className='flex flex-col  text-sm bg-amber-50 m-5 p-10'>
                <p>{weatherForecast.current.condition.text}</p>
                <p className='text-xl'>Temp: {weatherForecast.current.temp_c}°</p>
                <p className='font-xs'>Sensação: {weatherForecast.current.feelslike_c}°</p>
                <p className='text-xs'>Humidade: {weatherForecast.current.humidity}%</p>
              </div>
            </div>

            <div className='flex items-center justify-center mt-5'>
              <p className='text-white text-xl font-extralight'>{weatherForecast.location.localtime}</p>
            </div>
            <div className='flex items-center justify-center mt-5'>
              <p className='text-white text-3xl font-medium'>{weatherForecast.location.country}</p>
            </div>

          </div>
        ) : null}

    </Fragment>
  )
}

export default Input
