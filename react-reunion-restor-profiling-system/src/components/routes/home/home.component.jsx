import { useState, useEffect } from "react";

import CardList from "../../card-list/card-list.component.jsx";
import SearchBox from "../../search-box/search-box.component.jsx";


const Home = () => {
  const [searchField, setSearchField] = useState("");
  const [persons, setPersons] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState(persons);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const person1 = [
    {
      id: "0",
      name: "Orcisimo Restor",
      email: "N/A",
      phoneNumber: "0909090909",
      BirthDate: "11-11-1999",
      Gender: "Male",
      Address: "",
      imageUrl: "https://robohash.org/1?set=set2&size=180x180",
    },
    {
      id: "1",
      name: "Terio Restor",
      email: "N/A",
      phoneNumber: "0909090909",
      BirthDate: "11-11-1999",
      Gender: "Male",
      Address: "",
      imageUrl: "https://robohash.org/1?set=set2&size=180x180",
    },
    {
      id: "2",
      name: "Inday Restor Pasaylo",
      email: "N/A",
      phoneNumber: "0909090909",
      BirthDate: "11-11-1999",
      Gender: "Male",
      Address: "",
      imageUrl: "https://robohash.org/1?set=set2&size=180x180",
    },
    {
      id: "3",
      name: "Ireneo Restor",
      email: "N/A",
      phoneNumber: "0909090909",
      BirthDate: "11-11-1999",
      Gender: "Male",
      Address: "",
      imageUrl: "https://robohash.org/1?set=set2&size=180x180",
    },
    {
      id: "4",
      name: "Nene Restor Palingcod",
      email: "N/A",
      phoneNumber: "0909090909",
      BirthDate: "11-11-1999",
      Gender: "Female",
      Address: "",
      imageUrl: "https://robohash.org/1?set=set2&size=180x180",
    },
    {
      id: "5",
      name: "Luz Restor Rapista",
      email: "N/A",
      phoneNumber: "0909090902",
      BirthDate: "11-11-1999",
      Gender: "Female",
      Address: "",
      imageUrl: "https://robohash.org/1?set=set2&size=180x180",
    },
    {
      id: "6",
      name: "Juanita Restor Nano",
      email: "N/A",
      phoneNumber: "0909090911",
      BirthDate: "11-11-1999",
      Gender: "Female",
      Address: "",
      imageUrl: "https://robohash.org/1?set=set2&size=180x180",
    },
    {
      id: "7",
      name: "Romeo Restor",
      email: "N/A",
      phoneNumber: "0909090909",
      BirthDate: "11-11-1999",
      Gender: "Male",
      Address: "",
      imageUrl: "https://robohash.org/1?set=set2&size=180x180",
    },
  ];

  //initial data api
/*   useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((user) => setPersons(user));
  }, []);
 */
  //initial data api
  useEffect(() => {
    //filter the person to search
    const newFilteredPersons = person1.filter((person) => {
      return person.name.toLocaleLowerCase().includes(searchField);
    });
    setFilteredPersons(newFilteredPersons);
  }, [/* person1, searchField */]);

  //If input is changed this will trigger
    const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Restor Family</h1>
      {/*
      <SearchBox
       onChangeHandler={onSearchChange}
        placeholder="Search Persons"
        className="persons-search-box"
      />
    */}
      <CardList persons={filteredPersons} />
    </div>
  );
};

export default Home;
