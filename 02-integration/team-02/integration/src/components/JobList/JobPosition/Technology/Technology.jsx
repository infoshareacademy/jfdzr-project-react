import styles from "./Technology.module.css";

const Technology = (props) => {
  console.log(props);
  return (
    <>
      {props.tech.map((item) => {
        return (
          <div className={styles.languages} key={tech}>
            <p>{item}</p>
          </div>
        );
      })}
    </>
  );
};

export default Technology;
