import React from "react";

const SomePerson = ({ card }) => {
  return (
    <li className="get__item">
      <div className="get__item-photo">
        <img src={card.photo} alt="img" />
      </div>
      <p className="get__item-name">{card.name}</p>
      <span>{card.position}</span>
      <span>{card.email}</span>
      <span>{card.phone}</span>
    </li>
  );
};

export default SomePerson;
