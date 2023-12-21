import { useState, useEffect } from 'react'
import axios from 'axios'

const CountryDetails = ({ country }) => {
    const [weatherData, setWeatherData] = useState(null)

    useEffect(() => {
        // f2c8fe778a3e72056bb74123de6c76f2
        const apiKey = import.meta.env.VITE_OPEN_WEATHERMAP_API_KEY

        if (!apiKey) {
            console.error('OpenWeatherMap API key is missing. Add it to the .env file.')
            return
        }

        const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${country.capital}&appid=${apiKey}`
    
        // Fetch weather data
        axios.get(weatherUrl)
            .then(response => {
                setWeatherData(response.data)
            })
            .catch(error => {
                console.error('Error fetching weather data:', error)
            })
    }, [country.capital])

    const getWeatherIcon = (iconCode) => {
        // Map OpenWeatherMap icon codes to corresponding icon URLs
        const iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`
        return <img src={iconUrl} alt="Weather Icon" />
    }

    return (
        <div>
            <h1>{country.name.common}</h1>
            <p>capital {country.capital}</p>
            <p>area {country.area}</p>

            <h3>languages:</h3>
            <ul>
                {Object.values(country.languages).map(language => (
                    <li key={language}>{language}</li>
                ))}
            </ul>

            <img src={country.flags.png} alt={country.flags.alt} />
            {weatherData && (
                <div>
                    <h2>Weather in {country.capital}</h2>
                    <p>temperature {(weatherData.main.temp - 273.15).toFixed(2)}° Celsius</p>
                    {weatherData.weather[0].icon && getWeatherIcon(weatherData.weather[0].icon)}
                    <p>wind {weatherData.wind.speed} m/s</p>
                </div>
            )}
        </div>
    )
}

export default CountryDetails