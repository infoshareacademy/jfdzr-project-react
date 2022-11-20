import style from './Tags.module.css';

const Tags = (props) => {
console.log(props)
    return (
        
        <div className={style.tagsBox}>
        {props.tags.map((e,i)=>{
            return ( 
            <div className={style.tags} key={i}>{e}</div>
            )
        })}
        </div>
    )
}

export default Tags;