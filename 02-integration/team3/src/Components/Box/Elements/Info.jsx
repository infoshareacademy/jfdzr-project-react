import style from './Info.module.css';

const Info = (props) => {

    return(
        <>
        <div className = {style.info}>
        <p className = {style.info2}>{props.info.contract}</p>
        <p className = {style.info2}>{props.info.postedAt}</p>
        <p className = {style.info2}>{props.info.location}</p>
        </div>
        </>
        );
}

export default Info;