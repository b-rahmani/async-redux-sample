import style from "./card.module.css";
const card = (props) => {
  const { name, email, address } = props;
  return (
    <div className={style.card}>
      <p>name : {name}</p>

      <p>email : {email}</p>
      <p>address: {address.street}</p>
    </div>
  );
};

export default card;
