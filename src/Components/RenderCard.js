import React from "react";
import Card from "./Card";

const RenderCard = ({ data }) => {
  return data.map((monster) => (
    <Card
      name={monster.name}
      image={""}
      key={monster.id}
      email={monster.email}
    />
  ));
};

// class RenderCard extends Component {
//   render() {
//     return this.props.data.map((monster) => (
//       <Card
//         name={monster.name}
//         image={""}
//         key={monster.id}
//         email={monster.email}
//       />
//     ));
//   }
// }

export default RenderCard;
