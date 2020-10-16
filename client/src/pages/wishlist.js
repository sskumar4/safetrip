import React, { Component } from "react";
import CityCard from "./../components/CityCard";
import Wrapper from "./../components/Wrapper";
import Title from "./../components/Title";
import cities from "./../cities.json";

class Wishlist extends Component {
  // Setting this.state.cities to the cities json array
  state = {
    cities
  };

  removeCity = id => {
    // Filter this.state.friends for friends with an id not equal to the id being removed
    const cities = this.state.cities.filter(friend => friend.id !== id);
    // Set this.state.friends equal to the new friends array
    this.setState({ cities });
  };

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title>Wish List</Title>
        {this.state.cities.map(city => (
          <CityCard
            removeCity={this.removeCity}
            id={city.id}
            key={city.id}
            name={city.name}
            image={city.image}
            occupation={city.occupation}
            location={city.location}
          />
        ))}
      </Wrapper>
    );
  }
}

export default Wishlist;
