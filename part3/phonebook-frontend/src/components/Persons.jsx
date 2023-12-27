/*
const Person = ({ person }) => (
    <p>
        {person.name} {person.number} &nbsp;
        <button>delete</button>
    </p>
)
*/

const Persons = ({ persons, nameFilter, onDelete }) => {
    const filteredPersons = persons.filter(person =>
        person.name.toLowerCase().includes(nameFilter.toLowerCase())
    )
    
    return (
        <div>
        {filteredPersons.map(person => (
            <p key={person.name}>
                {person.name} {person.number} &nbsp;
                <button onClick={() => onDelete(person.id)}>delete</button>
            </p>
        ))}
        </div>
    )

    /*
    <div>
        {persons
            .filter(person => (person.name.toLowerCase()).includes(nameFilter.toLowerCase()))
            .map(person => <Person key={person.name} person={person} />)
        }
    </div>
    */
}

export default Persons
