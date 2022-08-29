import { useState, useEffect } from "react";

import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component.jsx";
import "./App.css";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState(persons);

  //initial data api
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setPersons(users));
  }, []);

  //initial data api
  useEffect(() => {
    //filter the person to search
    const newFilteredPersons = persons.filter((person) => {
      return person.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredPersons(newFilteredPersons)
  }, [persons, searchField]);

  //If input is changed this will trigger
  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Restor Family</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Persons"
        className="persons-search-box"
      />
      <CardList persons={filteredPersons} />
    </div>
  );
};

export default App;
