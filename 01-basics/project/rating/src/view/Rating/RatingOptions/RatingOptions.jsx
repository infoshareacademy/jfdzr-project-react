import Button from "../../../components/Button/Button";
import styles from "./RatingOptions.module.css";

function RatingOptions(props) {
  return (
    <div className={styles.box}>
      {props.options.map((option) => {
        return <Button key={option} name={option} />;
      })}
    </div>
  );
}

export default RatingOptions;
