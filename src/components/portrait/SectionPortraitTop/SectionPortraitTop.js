import "./SectionPortraitTop.css";

const sectionPortraitTop = (props) =>{
    const sectionsInfo= props.sections[0];

    return(
        <div className="sectionPortraitTop">
            <div className="sectionHeadingDiv">
                <div className="anchorLinkDiv" id={sectionsInfo.id}></div>
            </div>
            <div className="content">
                <div> 
                    <div className="imageDiv">
                        <img src={sectionsInfo.image} alt={sectionsInfo.title}></img>
                    </div>
                </div>
                <div className="content1Div">
                   {sectionsInfo.content1}
                </div>
                <div className="content2Div">
                    {sectionsInfo.content2}
                </div>
            </div>
        </div>
    )

}

export default sectionPortraitTop;