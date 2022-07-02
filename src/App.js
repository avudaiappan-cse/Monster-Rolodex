import React, { useEffect, useState } from "react";
import "./App.css";
import FilterBox from "./Components/FilterBox";
import RenderCard from "./Components/RenderCard";
import SearchBox from "./Components/SearchBox";

const App = () => {
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const [filter, setFilter] = useState("A-Z");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    callAPIAndStore();
  }, []);

  useEffect(() => {
    const filterData = monsters.filter((monster) =>
      monster.name.includes(keyword)
    );
    setFilteredMonsters(filterData);
  }, [monsters, keyword]);

  useEffect(() => {
    if (filter === "A-Z") {
      filteredMonsters.sort(compare);
    } else {
      filteredMonsters.sort((b, a) => compare(a, b));
    }
    setFilteredMonsters([...filteredMonsters]);
  }, [filter]);

  const compare = (a, b) => {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  };

  const onFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const callAPIAndStore = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    data.sort(compare);
    setMonsters(data);
  };

  const onSearch = (e) => {
    setKeyword(e.target.value);
  };

  return (
    <div className="App">
      <h1 className="title">Monsters Rolodex</h1>
      <div className="input__container">
        <SearchBox onChange={onSearch} />
        <FilterBox onChange={onFilterChange} value={filter} />
      </div>
      <div className="card__container">
        <RenderCard data={filteredMonsters} />
      </div>
    </div>
  );
};

// class App extends Component {
//   constructor() {
//     super();
// this.state = {
//   monsters: [],
//   filter: "A-Z",
//   keyword: "",
// };
//     this.callAPIAndStore = this.callAPIAndStore.bind(this);
//     this.onFilterChange = this.onFilterChange.bind(this);
//     this.onSearch = this.onSearch.bind(this);
//   }

//   compare(a, b) {
//     if (a.name < b.name) {
//       return -1;
//     }
//     if (a.name > b.name) {
//       return 1;
//     }
//     return 0;
//   }

//   onFilterChange(e) {
//     this.setState({
//       filter: e.target.value,
//     });
//   }

//   async callAPIAndStore() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     data.sort(this.compare);
//     this.setState({
//       monsters: data,
//     });
//   }

//   onSearch(e) {
//     this.setState({
//       keyword: e.target.value,
//     });
//   }
//   componentDidMount() {
//     this.callAPIAndStore();
//   }

//   render() {
// const { keyword, filter } = this.state;
// const { onSearch, onFilterChange } = this;
// const filterData = this.state.monsters.filter((monster) =>
//   monster.name.includes(keyword)
// );
// if (filter === "A-Z") {
//   filterData.sort(this.compare);
// } else {
//   filterData.sort((b, a) => this.compare(a, b));
// }
//     return (
//       <div className="App">
//         <h1 className="title">Monsters Rolodex</h1>
//         <div className="input__container">
//           <SearchBox onChange={onSearch} />
//           <FilterBox onChange={onFilterChange} value={this.state.filter} />
//         </div>
//         <div className="card__container">
//           <RenderCard data={filterData} />
//         </div>
//       </div>
//     );
//   }
// }

export default App;
