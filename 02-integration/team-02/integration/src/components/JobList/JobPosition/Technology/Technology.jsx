import styles from "./Technology.module.css";

const Technology = (props) => {
  console.log(props);
  return (
    <div className={styles.technologies}>
      {props.tech.map((item) => {
        return (
          <div key={item}>
            <p className={styles.lang}>{item}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Technology;
