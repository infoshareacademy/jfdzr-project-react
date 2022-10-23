import buttonStyles from "./Button.module.css";

function Button(props) {
  return (
    <button
      //   style={{
      //     color: "green",
      //     fontSize: 40,
      //     // "font-size": 40,
      //   }}
      className={buttonStyles.button}
    >
      {props.name}
    </button>
  );
}

export default Button;
