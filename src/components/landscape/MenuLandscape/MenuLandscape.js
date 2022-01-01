import './MenuLandscape.css';

const menuLandscape = (props) =>{
  const sectionsInfo= props.sections;
  return(
      <div className="menuLandscape">
            <div className="title" >
                <a href= "#top">
                  <h1>Tri-Cities Flower Farm</h1>
                </a>
            </div>
            <div className="sectionLinks">
                {sectionsInfo.map( section =>(
                  <a href={"#" + section.id}>{section.title}</a>
                ))}
            </div>
      </div>
  )
};

export default menuLandscape;