import classes from "./MyInput.module.css";

const MyInput = (props: any) => {
  return <input {...props} className={props.className} />;
};

export default MyInput;
