import React from 'react';


//List all dogs (include each dog's image, name, breed, and age).
//Display in a grid.
function DogsIndex(props) {
    return (
        <div>
            <div className="AllDogsPg">
                <p className="pageHeader">Class Roster</p>
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
                                <img src={dog.picture} alt="Sorry, no image 🐾" className="pupperPics" />
                                <p className="dogName">{dog.name}</p>
                                <p className="desc">{dog.breed}, {dog.age}yrs</p>
                            </div>
                        ))}
                </div>
            </div>
            <footer>
                <h3 className="us">
                    <img className="planeteers" src="https://tinyurl.com/y8c792e" alt="planeteers" />
                    Carol, Al, Liz, Bo
            </h3>
            </footer>
        </div>
    )
}

export default DogsIndex;