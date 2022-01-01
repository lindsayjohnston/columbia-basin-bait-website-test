import React from 'react';
import './App.css';
import MainBodyLandscape from '../src/components/landscape/MainBodyLandscape/MainBodyLandscape';
import MainBodyPortrait from '../src/components/portrait/MainBodyPortrait/MainBodyPortrait';
import topImage from '../src/media/images/man-fishing.jpg';
import locationImage from '../src/media/images/kid-fish.jpg';
import aboutImage from '../src/media/images/tackle-box.jpg';
import contactImage from '../src/media/images/red-phone.jpg';


let screenOrientation= null;
if((window.innerHeight / window.innerWidth) < .87){
  screenOrientation= "landscape";
} else {
  screenOrientation= "portrait";
};

class App extends React.Component {
  
  state= {
    sectionShown:'top',
    menuModalShown: false,
    screenOrientation:screenOrientation,
    sections: [
      { id: "top",
        title: null,
        image: topImage,
        content1: 
        <button>
          <a href="https://www.facebook.com/columbiabasin.bait/" target="_blank" rel="noreferrer">Like us on Facebook!</a> 
        </button>, 
        content2:
          <div>
            <h1 className="paddingBottom10px">Dedicated to making the best bait to help you catch more fish! </h1>
            
            <p className="paddingBottom10px">Find us in your local outdoor retailer!</p>
           
          </div>,
        },
        { id: "location",
        title: "Location",
        image: locationImage,
        content1: 
          <div>
            <p>
            83508 Harrington Rd</p>
            <p>
            West Richland, WA 99353 </p>
          </div> 
          ,
        content2: null
        },
        { id: "about",
        title: "About",
        image: aboutImage,
        content1: 
          <div>
            <h2 className="paddingBottom10px">Columbia Basin Bait</h2>
            <h3 className="paddingBottom10px"> Local family owned business.</h3>
          </div>,
        content2:
          <p>We're dedicated to making the best bait to help you catch more fish! Find us in your local outdoor retailer.</p>
        },
        { id: "contact",
        title: "Contact",
        image: contactImage,
        content1: 
          <div>
            <h3>Call Us:</h3>
            <p>(509) 948-3845</p>
            
            <h3>E-mail:</h3>
            <a href="mailto:columbiabasinbait@gmail.com">columbiabasinbait@gmail.com</a>
           
            <h3>Social:</h3>
            <a href="https://www.facebook.com/columbiabasin.bait/" target="_blank" rel="noreferrer" >Facebook</a>
          </div>
        },
    
    ]
  }

  constructor(props) {
    super(props);
    this.checkScreenOrientation = this.checkScreenOrientation.bind(this);
    this.setScreenOrientation = this.setScreenOrientation.bind(this);
    this.sectionShownHandler.bind(this);
    this.menuModalCloseHandler.bind(this);
    this.menuModalOpenHandler.bind(this);
  }

  checkScreenOrientation = () => {
    let newOrientation= null;

    if((window.innerHeight/ window.innerWidth) < .87){
      newOrientation= "landscape";
    } else {
      newOrientation= "portrait";
    } 

    if(newOrientation !== this.state.screenOrientation){
      this.setScreenOrientation(newOrientation);
    }
  }

  setScreenOrientation= (newOrientation)=>{
    this.setState({
      screenOrientation: newOrientation
    })
  }

  sectionShownHandler = (sectionId) =>{
    this.setState ({
      sectionShown : sectionId
    })
  }

  menuModalCloseHandler = () =>{
    this.setState ({
      menuModalShown: false
    })
  }

  menuModalOpenHandler = () =>{
    this.setState ({
      menuModalShown: true
    })
  }

  componentDidMount() {
    window.addEventListener('resize', this.checkScreenOrientation);
    window.addEventListener("orientationchange", this.checkScreenOrientation);
  }

  render(){
    let appBody = null;
    let appClasses= "";
 
    if (this.state.screenOrientation === "landscape") {
      appBody = <MainBodyLandscape 
                  menuClick = {this.sectionShownHandler}
                  sectionShown= {this.state.sectionShown} 
                  sections={this.state.sections} />;
      appClasses= "appLandscape";
    } else {
      appBody = <MainBodyPortrait 
                  // menuClick = {this.sectionShownHandler}
                  barsClick= {this.menuModalOpenHandler}
                  closeModalClick={this.menuModalCloseHandler}
                  menuModalShown= {this.state.menuModalShown}
                  sectionShown= {this.state.sectionShown} 
                  sections={this.state.sections}
                />;
      appClasses= "appPortrait";
    }

    return (
      <div className={appClasses}>
        {appBody}
      </div>
    );

  }
  
}

export default App;
