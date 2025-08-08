import linux from "/linux.jpg" ;
import cybersec from "/sybersec.jpg"
import reactimg from "/Reactimg.png"
import nextimg from "/Nextimg.png" 
import djangoimg from "/Djangoimg.png"
function App() {
  return (
    <>
      <div style={{ display : "flex" , justifyContent : "space-between"}}>
        <h1 style={{ fontSize: "100px"  }}>Please Hire Me</h1>
        <img src={linux} alt="linux-img"/>
        <img src={cybersec} alt="cybersec-img" style={{ width : "300px" , height : "300px"}}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , }}>
        <img src={reactimg} alt="react-img" />
        <img src={nextimg} alt="next-img"/>
        <img src={djangoimg} alt="django-img"/>
      </div>
    </>
  )
}

export default App
