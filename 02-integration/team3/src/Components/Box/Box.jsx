import style from './Box.module.css';

import Logo from './Elements/Logo'
import Tags from './Elements/Tags'
import Company  from './Elements/Company';
import Info from './Elements/Info';
import Position from './Elements/Position';

const Box = (props) => {
    return (
        <>
        <div className={style.box}>
        <Logo src={props.logo} alt={`Logo of company ${props.company}`} />
        <div className={style.box2}>
        <Company company = {props.company}/>
        <Position position = {props.position}/>
        <Info info={props.info} />
        </div>
        <div className={style.tagsBox}>
        <Tags tags={props.tags}/> 
        </div> 
        </div>
        </>
        
    )
}

export default Box;