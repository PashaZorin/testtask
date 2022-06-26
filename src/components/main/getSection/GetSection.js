import React, { useEffect } from "react";
import Button from "../../Button";
import SomePerson from "./SomePerson";
import { useDispatch, useSelector } from "react-redux";
import { fetchDataGet } from "../../../store/todoSlice";
import "./getSection.scss";
import { v4 as uuidv4 } from "uuid";
const GetSection = () => {
  const dispatch = useDispatch();
  const getData = (data) => dispatch(fetchDataGet(data));
  const cardList = useSelector((state) => state.todos.cards);
  const _URL = useSelector((state) => state.todos._URL);
  const disabledBtn = useSelector((state) => state.todos.disabledBtn);

  useEffect(() => {
    getData(_URL);
  }, []);
  return (
    <div className="get">
      <h2 className="title">Working with GET request</h2>
      <ul className="get__content">
        {cardList.map((card) => (
          <SomePerson key={uuidv4()} card={card} />
        ))}
      </ul>
      <Button
        disabled={disabledBtn}
        onClick={() => {
          getData(_URL);
        }}
        text="Show more"
      />
    </div>
  );
};

export default GetSection;
