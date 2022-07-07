import React from "react";
import "./Card.css";

const Card = ({ name, email }) => {
  return (
    <div className="card">
      <img width="100%" src={`https://robohash.org/${name}`} alt={name} />
      <p className="card__title">{name}</p>
      <p className="card__email">{email}</p>
    </div>
  );
};

// Class Component _old
// class Card extends Component {
//   render() {
//     const { name, email } = this.props;
//     return (
//       <div className="card">
//         <img width="100%" src={`https://robohash.org/${name}`} alt={name} />
//         <p className="card__title">{name}</p>
//         <p className="card__email">{email}</p>
//       </div>
//     );
//   }
// }

export default Card;
