import React from 'react';
import Person from './Person'

function NameList() {
    const names = ['Lubo', 'Gosho', 'Pesho', 'Stankata']
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 24,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Eddie',
            age: 27,
            skill: 'JS'
        },
        {
            id: 3,
            name: 'Kenny',
            age: 44,
            skill: 'Angular'
        },
        {
            id: 4,
            name: 'Jack',
            age: 34,
            skill: 'Java'
        }
    ]
// const personsList = persons.map(person => <Person key={person.id} person={person}></Person>)
//     return (
//         <div>{personsList}</div>
//     )

const namesList = names.map((name, index) => <h2 key={index}>{name} - {index}</h2>)
        return (
            <div>{namesList}</div>
        )
}
export default NameList
