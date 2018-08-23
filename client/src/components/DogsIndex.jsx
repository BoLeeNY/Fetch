import React from 'react';


//List all dogs (include each dog's image, name, breed, and age).
//Display in a grid.
function DogsIndex(props) {
    return (
        <div className="AllDogsPg">
            <h2 className="pageHeader">Class Roster</h2>
            <div className="grid-container">
                {
                    props.dogs.map(dog => (
                        <div key={dog.id} className="grid-item"
                            onClick={(ev) => {
                                ev.preventDefault();
                                const grades = props.grades.filter(grades => {
                                    return grades.dogs_id === dog.id
                                })
                                props.selectDog(dog, grades)
                            }}>
                            <img src={dog.picture} alt="🐾 Sorry, no image 🐾" className="pupperPics" />
                            <p className="dogName">{dog.name}</p>
                            <p className="desc">{dog.breed}, {dog.age}yrs</p>
                        </div>
            ))}
            </div>
        </div>
    )
}

export default DogsIndex;