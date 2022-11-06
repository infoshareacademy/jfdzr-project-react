import style from './Position.module.css';


const Position = (props) => {
    return( <>
    <h2 className = {style.Position}>{props.position}</h2>
    </>)
}
export default Position;