const Technologies = (props) => {

    return (
        <>
{props.technologies.map((language) => (
    <p>{language}</p>
))}
    </>
    )
}

export default Technologies 


