import style from "./spinner.module.css";

const spinner = () => {
  return (
    <div className={style.spinner}>
     
        <div></div>
        <div></div>
        <div></div>
     
    </div>
  );
};

export default spinner;
