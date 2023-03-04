import { useState } from "react";
import { useRouter } from "next/router";

const WellLemmeTellYouSumn = () => {
  const router = useRouter();
  const [re, reify] = useState("Hmm...");
  const [colorer, setColor] = useState("black");
  let [ble, setBle] = useState(0);
  let [dar, setDar] = useState(0);
  let [ese, setEse] = useState(0);
  let [eto, setEto] = useState(0);

  console.log(router.query.something);


  const randomer = () => {
    const randomNo = Math.floor(Math.random() * 4 + 1);
    return randomNo;
  };

  const change = () => {
    switch (randomer()) {
      case 1:
        reify("Blessing is the culprit 😒");
        setColor("green");
        setBle(ble + 1);
        break;
      case 2:
        reify("Dara is the culprit 😜");
        setColor("blue");
        setDar(dar + 1);
        break;
      case 3:
        reify("Ese-Abasi is the culprit 😎");
        setColor("orange");
        setEse(ese + 1);
        break;
      case 4:
        reify("Etoro is the culprit 😢");
        setColor("purple");
        setEto(eto + 1);
        break;
      default:
        reify("Edidiong");
        setColor("red");
    }
  };
  return (
    <div className="azure"><br/>
      <h1 className="stuff" onClick={change}>
        Who is a big head?: <span style={{ color: colorer }}>{re}</span>
      </h1><br/><br/>

      <h3>
        Blessing:{" "}
        <span
          style={{
            color: ble === 0 ? "black" : "green",
            fontSize: ble === 0 ? "1.17em" : "1.5em",
          }}
        >
          {ble}
        </span>
      </h3>
      <h3>
        Dara:{" "}
        <span
          style={{
            color: dar === 0 ? "black" : "blue",
            fontSize: dar === 0 ? "1.17em" : "1.5em",
          }}
        >
          {dar}
        </span>
      </h3>
      <h3>
        Ese-Abasi:{" "}
        <span
          style={{
            color: ese === 0 ? "black" : "orange",
            fontSize: ese === 0 ? "1.17em" : "1.5em",
          }}
        >
          {ese}
        </span>
      </h3>
      <h3>
        Etoro:{" "}
        <span
          style={{
            color: eto === 0 ? "black" : "purple",
            fontSize: eto === 0 ? "1.17em" : "1.5em",
          }}
        >
          {eto}
        </span>
      </h3>
    </div>
  );
};

export default WellLemmeTellYouSumn;
