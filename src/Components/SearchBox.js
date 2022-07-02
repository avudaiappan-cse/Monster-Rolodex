import React from "react";
import "./SearchBox.css";

const SearchBox = ({ onChange }) => {
  return (
    <input
      type="search"
      className="searchbar"
      placeholder="Search a monster"
      onChange={onChange}
    />
  );
};

// class SearchBox extends Component {
//   render() {
//     const { onChange } = this.props;
//     return (
//       <input
//         type="search"
//         className="searchbar"
//         placeholder="Search a monster"
//         onChange={onChange}
//       />
//     );
//   }
// }

export default SearchBox;
