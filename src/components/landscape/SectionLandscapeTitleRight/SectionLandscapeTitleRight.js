import "./SectionLandscapeTitleRight.css";

const sectionLandscapeTitleRight = (props) =>{
    const sectionsInfo= props.sections[props.order];

    return(
        <div className="sectionLandscapeTitleRight">
            <div className="sectionHeadingDiv">
                <div className="anchorLinkDiv" id={sectionsInfo.id}></div>
            </div>
            <div className="content">
                <div className="left">
                <div className="imageDiv">
                        <img src= {sectionsInfo.image} alt={sectionsInfo.title}></img>
                    </div>
                </div>
                <div className="right">
                    <h1 className="sectionTitleLandscape">{sectionsInfo.title}</h1>
                    <div className="content1Div">
                        {sectionsInfo.content1}
                    </div>
                    <div className="content2Div">
                    {sectionsInfo.content2}
                    </div>
                </div>

            </div>
        </div>
    )

}

export default sectionLandscapeTitleRight;