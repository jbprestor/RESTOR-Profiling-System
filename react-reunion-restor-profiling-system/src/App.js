import { Component } from "react";

import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      persons: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { persons: users };
          },
          () => {
            console.log(this.state);
          }
        )
      );
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  render() {
    const { persons, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredPersons = persons.filter((person) => {
      return person.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className="App">
        <input
          className="search-box"
          type="search"
          placeholder="Search Person"
          onChange={onSearchChange}
        />
        {filteredPersons.map((person) => {
          return (
            <div key={person.id}>
              <h1>{person.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
