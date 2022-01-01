import "./SectionLandscapeCentered.css";

const sectionLandscapeCentered = (props) =>{
    const sectionsInfo= props.sections[props.order];

    return(
        <div className="sectionLandscapeCentered">
            <div className="sectionHeadingDiv">
                <div className="anchorLinkDiv" id={sectionsInfo.id}></div>
                <h1>{sectionsInfo.title}</h1>
            </div>
            <div className="content">
                <div className="left">
                    <div className="imageDiv">
                        <img src= {sectionsInfo.image} alt={sectionsInfo.title}></img>
                    </div>
                    
                </div>
                <div className="right">
                    <div className="content1Div"> {sectionsInfo.content1}</div>
                    <div className="content2Div"> {sectionsInfo.content2}</div>
                </div> 
            </div>
        </div>
    )

}

export default sectionLandscapeCentered;