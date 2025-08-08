import linux from "../public/linux.jpg" ;
import cybersec from "../public/sybersec.jpg"
import reactimg from "../public/Reactimg.png"
import nextimg from "../public/Nextimg.png" 
import djangoimg from "../public/Djangoimg.png"
function App() {
  return (
    <>
      <div style={{ display : "flex" , justifyContent : "space-between"}}>
        <h1 style={{ fontSize: "100px"  }}>Please Hire Me</h1>
        <img src={linux} />
        <img src={cybersec} style={{ width : "300px" , height : "300px"}}/>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' , }}>
        <img src={reactimg} />
        <img src={nextimg} />
        <img src={djangoimg} />
      </div>
    </>
  )
}

export default App
