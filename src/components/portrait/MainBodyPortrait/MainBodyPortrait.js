import './MainBodyPortrait.css';
import MenuPortrait from '../MenuPortrait/MenuPortrait';
import SectionPortraitTop from "../SectionPortraitTop/SectionPortraitTop";
import SectionPortrait from "../SectionPortrait/SectionPortrait";


const mainBodyPortrait = (props) =>{
    //if stuff
    
    return(
        <div className="mainBodyPortrait">
            <MenuPortrait
                sections={props.sections}
                barsClick={() => props.barsClick()}
                menuModalShown={props.menuModalShown}
                closeModalClick={() => { props.closeModalClick() }}
            />
            <SectionPortraitTop
                sections={props.sections}

            />
            <SectionPortrait
                sections={props.sections}
                order="1"
                fontClass="fontColorLight"
                bgClass="bgColorMain" />
            <SectionPortrait
                sections={props.sections}
                order="2"
                fontClass="fontColorDark"
                bgClass="bgColorLight" />
            <SectionPortrait
                sections={props.sections}
                order="3"
                fontClass="fontColorLight"
                bgClass="bgColorDark" />
        </div>
    )
  };
  
  export default mainBodyPortrait;