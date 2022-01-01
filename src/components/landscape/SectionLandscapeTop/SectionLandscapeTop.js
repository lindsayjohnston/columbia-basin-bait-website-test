import "./SectionLandscapeTop.css";

const sectionLandscapeTop = (props) =>{
    const topSection= props.sections[0];

    return(
        <div className="sectionLandscapeTop">
            <div className="sectionHeadingDiv">
                <div className="anchorLinkDiv" id={topSection.id}></div>
            </div>
            <div className="content">
                <div className="left">
                  <div className="content2Div">
                      {topSection.content2}
                  </div>
                  <div className="content1Div">
                      {topSection.content1}
                  </div>
                </div>
                <div className="right"> 
                    <div className="imageDiv">
                        <img src={topSection.image}></img>
                  
                    </div>
                 
                </div>
            </div>
        </div>
    )

}

export default sectionLandscapeTop;