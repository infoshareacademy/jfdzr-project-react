const Article = (props) => {

    return (
        <article>
            <h3>{props.company}</h3>
            <h1>{props.position}</h1>
            <p>{props.postedAt}, {props.contract}, {props.location}</p>
        </article>
    )
}

export default Article 