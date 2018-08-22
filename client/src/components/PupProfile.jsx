import React, { Component } from 'react';
// maybe needs a change
import { fetchOneGrade, updateDoggy, deleteDog, updateGrades } from '../services/api';
import UpdateGrades from './UpdateGrades';
// import DeleteButton from './Deletebutton';
import UpdateDog from './UpdateDog';



class PupProfile extends Component {
  constructor(props) {
    super(props);
    const { dogs, dog, dogGrade } = props;
    this.state = {
      id: dog.id,
      owner: dog.owner,
      name: dog.name,
      breed: dog.breed,
      size: dog.size,
      age: dog.age,
      picture: dog.picture,
      dogs_id: dog.id,
      leash_training: false,
      leave_it: false,
      potty_training: false,
      quiet: false,
      sit: false,
      stay: false,
    }

    // this.handleDeleteClick = this.handleDeleteClick.bind(this);

  }



  // handle change
  handleChange(e) {

  }
  // handle submit

  // handle delete 
  // handleDeleteClick() {
  //   deleteDog()
  //     .then(res => {
  //       this.fetchOneDog();
  //     })
  // }

  render() {
    return(
      <div>
        <h2>{this.state.name}</h2>
        {/* <UpdateGrades />
        <DeleteButton dogs={this.state.dogs} handleDeleteClick={this.handleDeleteClick} /> */}
        <img src={this.state.picture} alt={'🐾 Sorry, No Image 🐾'} height="200" width="200" className="pupperPic"/>
        <h2>{this.state.name}</h2>
        <p>Owner: {this.state.owner}</p>
        <p>Breed: {this.state.breed}</p>
        <p>Size: {this.state.size}</p>
        <p>Age: {this.state.age}</p>
        <p>Id: {this.state.dogs_id}</p>
        <p>Leash Training: {this.state.leash_training?"True":"False"}</p>
        <p>Leave It: {this.state.leave_it?"True":"False"}</p>
        <p>Potty Training: {this.state.potty_training?"True":"False"}</p>
        <p>Quiet: {this.state.quiet?"True":"False"}</p>
        <p>Sit: {this.state.sit?"True":"False"}</p>
        <p>Stay: {this.state.stay?"True":"False"}</p>
        <button 
            onClick={(ev) => {
              ev.preventDefault();
              const dogState = this.state;
              this.props.editDog(dogState)}} >
              Edit Dog
            </button>
        <button 
            onClick={(ev) => {
              ev.preventDefault();
              const dogState = this.state;
              this.props.newGrade(dogState)}} >
              New Gradebook
          </button>   
        <button onClick={(ev) => {
          ev.preventDefault();
          const dog = this.state;
          this.props.handleDeleteDog(dog)}} >
          Delete</button>
      </div>
     

     
    // render pup profile
    // render forms (update)
    // render forms (gradebook)
    );
  }

}


export default PupProfile;
