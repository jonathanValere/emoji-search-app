import styles from "./Line.module.css";
import { useState } from "react";

export default function Line({ onClick, data }) {
  // States ----------
  const [isActive, setIsActive] = useState(false);
  const [copy, setCopy] = useState("");
  // ------

  //   Gestion des évènements ---------------------
  //   MouseOver-------
  //   Afficher/Masquer le <span>
  const handleOnMouseOver = () => {
    return setIsActive(true);
  };

  const handleOnMouseOut = () => {
    return setIsActive(false);
  };
  //   -------------
  // onClick ------
  const handleCopy = (event) => {
    let control = event.cmdKey;
    let keyUser = event.key;
    control = true;
    return console.log(control, keyUser, event);
  };
  //   --------
  //    ----------------------------------------

  return (
    <li
      onClick={onClick}
      onMouseOver={handleOnMouseOver}
      onMouseOut={handleOnMouseOut}
    >
      <p>
        {data.symbol} {data.title}
      </p>
      {isActive && <span>Click to copy !</span>}
    </li>
  );
}
