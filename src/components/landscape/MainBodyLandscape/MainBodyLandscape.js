import './MainBodyLandscape.css';
import MenuLandscape from '../MenuLandscape/MenuLandscape';
import SectionLandscapeTop from "../SectionLandscapeTop/SectionLandscapeTop";
import SectionLandscapeCentered from "../SectionLandscapeCentered/SectionLandscapeCentered";
import SectionLandscapeTitleRight from "../SectionLandscapeTitleRight/SectionLandscapeTitleRight";
import SectionLandscapeTitleLeft from "../SectionLandscapeTitleLeft/SectionLandscapeTitleLeft";


const mainBodyLandscape = (props) =>{
  
  return(
      <div className="mainBodyLandscape">
           <MenuLandscape sections={props.sections}/>
           <SectionLandscapeTop 
                sections={props.sections}/>
           <SectionLandscapeCentered 
                sections={props.sections}
                order= "1"
                />
           <SectionLandscapeTitleRight 
                sections={props.sections}
                order= "2"
                />
           <SectionLandscapeTitleLeft 
                sections={props.sections}
                order= "3"
                />
      </div>
  )
};

export default mainBodyLandscape;