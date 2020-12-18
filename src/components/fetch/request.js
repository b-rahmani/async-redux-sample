import axios from "axios";
import { useState } from "react";
import Card from "../card/card";
import style from "./request.module.css";
import Spinner from "../spinner/spinner";

const Request = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

    const getData = () => {
        setLoading(true);
      axios.get("https://jsonplaceholder.typicode.com/users")
          .then((res) => {
              setData(res.data);
              setLoading(false)
      
          })
          .catch(er => {
              console.log(er);
              setLoading(false)
          });
  };

  let datamap;
  if (data) {
    datamap = data.map((user) => (
      <Card
        name={user.username}
        key={user.id}
        email={user.email}
        address={user.address}
      />
    ));
  }
  const btnStyle = {
    position: "absolute",
    bottom: "0",
      textAlign: "center",
      margin: "0 auto",
    left:"50%"
  };

  return (
    <div className={style.request}>
      {loading ? <Spinner /> : datamap}

      <button style={btnStyle} onClick={getData}>
        دریافت اطلاعات{" "}
      </button>

      {/* <p>{loading ? "true" : "false"}</p> */}
    </div>
  );
};

export default Request;
