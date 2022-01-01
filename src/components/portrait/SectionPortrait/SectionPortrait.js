import "./SectionPortrait.css";

const sectionPortrait = (props) =>{
    const sectionClasses= "sectionPortrait " + props.fontClass + " " + props.bgClass;

    const sectionsInfo= props.sections[props.order];

    return(
        <div className={sectionClasses}>
            <div className="sectionHeadingDiv">
                <div className="anchorLinkDiv" id={sectionsInfo.id}></div>
                <h1>{sectionsInfo.title}</h1>
            </div>
            <div className="content">
                <div className="content1Div">
                    {sectionsInfo.content1}
                </div>
                <div className="imageDiv">
                    <img src={sectionsInfo.image} alt= {sectionsInfo.title}></img>
                </div>
                <div className="content2Div">
                    {sectionsInfo.content2}
                </div>
            </div>
        </div>
    )

}

export default sectionPortrait;