import React from "react";
import "./FilterBox.css";

const FilterBox = ({ value, onChange }) => {
  return (
    <select name="sortBy" value={value} onChange={(e) => onChange(e)}>
      <option value="A-Z">Sort by A - Z</option>
      <option value="Z-A">Sort by Z - A</option>
    </select>
  );
};

// class FilterBox extends Component {
//   render() {
//     const { value, onChange } = this.props;
//     return (
//       <select name="sortBy" value={value} onChange={(e) => onChange(e)}>
//         <option value="A-Z">Sort by A - Z</option>
//         <option value="Z-A">Sort by Z - A</option>
//       </select>
//     );
//   }
// }

export default FilterBox;
