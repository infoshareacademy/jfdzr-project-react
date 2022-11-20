import style from './Company.module.css'

const Company = (props) => {

    return(<>
    <h1 className = {style.Company}>{props.company}</h1>
    </>)
    
}

export default Company;