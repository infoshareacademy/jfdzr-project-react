import style from "./JobDescription.module.css";

const JobDescription = (props) => {
  return (
    <>
      <p className={style.role}>{props.data.position}</p>
      <div className={style.conditionsPack}>
        <p className={style.conditions}>{props.data.postedAt}</p>.
        <p className={style.conditions}>{props.data.role}</p>.
        <p className={style.conditions}>{props.data.location}</p>
      </div>
    </>
  );
};

export default JobDescription;
