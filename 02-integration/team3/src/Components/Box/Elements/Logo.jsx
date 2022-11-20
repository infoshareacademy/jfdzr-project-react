import style from './Logo.module.css';
//import logoIcon from './'



const Logo = (props) => {

    return (
        <img className={style.logo} src={props.src} alt={props.alt} />
    )
}

export default Logo;