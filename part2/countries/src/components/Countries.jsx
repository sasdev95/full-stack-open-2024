import { useState } from 'react'
import CountryDetails from './CountryDetails'

const Countries = ({ countries, filter }) => {
    const filteredCountries = countries.filter(country =>
        country.name.common.toLowerCase().includes(filter.toLowerCase())
    )
    
    const [selectedCountry, setSelectedCountry] = useState(null)

    const handleShowClick = (country) => {
        setSelectedCountry(country === selectedCountry ? null : country)
    }

    if (filteredCountries.length > 10) {
        return (
            <p>Too many matches, specify another filter</p>
        )
    } else if (filteredCountries.length === 1) {
        const country = filteredCountries[0]
        return (
            <CountryDetails country={country} />
        )
    }

    // If ten or fewer countries, but more than one
    return (  
        <div>
            {filteredCountries.map(country => (
                <div key={country.name.common}>
                    <p>
                        {country.name.common} &nbsp;
                        <button onClick={() => handleShowClick(country)}>
                            {selectedCountry === country ? 'hide' : 'show'}
                        </button>
                    </p>
                    
                    {selectedCountry === country && <CountryDetails country={country} />}
                </div>
            ))}
        </div>
    )
}

export default Countries
