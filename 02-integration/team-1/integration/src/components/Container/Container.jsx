import CompanyLogo from "../../view/CompanyLogo/CompanyLogo.jsx"
import Technologies from "../Technologies/Technologies.jsx"
import Article from "../../view/Article/Article.jsx"

const Container = ({data}) => {
    console.log(data)
    return <>
    <div>
        <Article company={data.company} position={data.position} postedAt={data.postedAt} contract={data.contract} location={data.location}/>
        <CompanyLogo logo={data.logo} company={data.company}/>
    </div> 
    <Technologies technologies={data.languages}/>
    </>
}

export default Container