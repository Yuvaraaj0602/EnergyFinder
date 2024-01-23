import logo from './logo.svg';
import './App.css';


function App() {
  const Calculate=()=>{
  var name=document.getElementById("ename").value
  var cont =document.getElementById("cont").value
  var city =document.getElementById("city").value
  var dist =document.getElementById("district").value
  var state =document.getElementById("state").value
  var rm = document.getElementById("room").value;
  var pm = parseInt(document.getElementById("person").value);

  let obj={Name:name,Contact:cont,City:city,District:dist,State:state,Rooms:rm,Persons:pm}
  localStorage.setItem('Details',JSON.stringify(obj));
  
  var room = parseInt(rm);
   var cal= room * 150;
   var bt=""
  if (pm == 1) {
    cal += 100;
  } else if (pm == 2) {
    cal += 200;
  } else if (pm == 3) {
    cal += 300;
  }
  else if (pm == 4) {
   cal += 400;
  }
  else if (pm == 5) {
      cal += 500;
  }
  if (cal <= 500) {
      bt = 70;
  } else if (cal > 500) {
      bt = 150;
  }
  document.getElementById("shw").innerHTML = `<p>
  You can use solar panel of ${cal}
  watts and the battery of
  ${bt}Ah for your Household usage
</p>`;
alert(
 ` You can use solar panel of ${cal}
  watts and the battery of
  ${bt}Ah for your Household usage`
)
document.getElementById("ename").value=""
document.getElementById("cont").value=""
document.getElementById("city").value=""
document.getElementById("district").value=""
document.getElementById("state").value=""
document.getElementById("room").value=""
document.getElementById("person").value=""
}
  return (
    <div className="container" style={{background:"linear-gradient(to left,skyblue,aquamarine,aqua)"}}>
    <header>
      <div className="container">
        <nav className="navbar navbar-expand-lg border">
          <div className="container-fluid">
            <a className="navbar-brand text-primary fs-2" href="#">ENERGY FINDER</a>
          </div>
        </nav>
      </div>
    </header>
    <div className="text-center mt-5">
      <h1>GOVERNMENT MISSION</h1>
      <div className="d-flex flex-row justify-content-evenly ">

        <h5 className="card w-50 p-4 m-2">
          By 2030, increase substantially the share of renewable energy in the
          global energy mix
        </h5>
        <h5 className="card w-50 p-4 m-2">
          By 2030, ensure universal access to affordable, reliable and modern
          energy services
        </h5>
        <h5 className="card w-50 p-4 m-2">By 2030, double the global rate of improvement in energy efficiency</h5>
      </div>
      </div>
    <div className="text-center fw-4 ">
        <h1>My Vision</h1>
        <h5 className="card p-5 ">By using this website you can Calculate your Household electricity needs and you can install renewable energy source where electricity can't get through EB Line </h5>
    </div>
    <div
      className="row d-flex flex-row justify-content-between border border-dark-subtle"
    >
      <div className="col-5">
        <img
          src="https://etimg.etb2bimg.com/photo/105585282.cms"
          style={{borderRadius: "20px"}}
          className="w-100"
          alt=""
        />
      </div>

      <div className="col-6">
        <div className="text-end border border-dark-subtle" style={{paddingLeft: "50px"}} action="">
          
            <h3 className="text-center text-decoration-underline">
              Watt and Component Calculator
            </h3>
            
              <div>
                <input type="text" id="ename" placeholder="Name"  style={{borderRadius:"20px",border: "none",margin: "5px",width: "300px",height: "30px",paddingLeft:"10px"}}/>
              </div>
            
            
              <div>
                <input type="text" id="cont" placeholder="Contact no." style={{borderRadius:"20px",border: "none",margin: "5px",width: "300px",height: "30px",paddingLeft:"10px"}} />
              </div>
            
            
              <div>
                <input type="text" id="city" placeholder="City" style={{borderRadius:"20px",border: "none",margin: "5px",width: "300px",height: "30px",paddingLeft:"10px"}}/>
              </div>
            
            
              <div>
                <input type="text" id="district" placeholder="District" style={{borderRadius:"20px",border: "none",margin: "5px",width: "300px",height: "30px",paddingLeft:"10px"}}/>
              </div>
            
            
              <div>
                <input type="text" id="state" placeholder="State" style={{borderRadius:"20px",border: "none",margin: "5px",width: "300px",height: "30px",paddingLeft:"10px"}}/>
              </div>
            
            
              <div>
                <input type="text" id="room" placeholder="Number of rooms" style={{borderRadius:"20px",border: "none",margin: "5px",width: "300px",height: "30px",paddingLeft:"10px"}}/>
              </div>
            
            
              <div>
                <input type="text" id="person" placeholder="Number of persons" style={{borderRadius:"20px",border: "none",margin: "5px",width: "300px",height: "30px",paddingLeft:"10px"}}/>
              </div>
            
            
              <div  className="text-center">
                <button className="btn btn-light m-3" onClick={Calculate} style={{}}>
                  Calculate
                </button>
              </div>
            
        </div>
      </div>
    </div>
    <div className="fs-2 text-center " id="shw" style={{width: "max-content", height: "100px"}}>   
    </div>
    <div>
        <div className="row  h-50">
            <div className="col w-75 ">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">Solar Energy</h5>
                  <p className="card-text">Harnessing solar energy aims to generate sustainable and clean electricity by converting sunlight into usable power, reducing reliance on fossil fuels and mitigating environmental impact.</p>
                  <a href="#" className="btn btn-primary">More Info</a>
                </div>
              </div>
            </div>
            <div className="col w-75">
              <div className="card">
                <div className="card-body">
                  <h5 className="card-title">Wind Energy</h5>
                  <p className="card-text">Harnessing wind energy aims to generate clean, renewable electricity by utilizing the kinetic energy of wind to turn turbines, reducing reliance on fossil fuels and mitigating environmental impact. The objective is to contribute significantly to global energy needs while promoting sustainability and combating climate change.</p>
                  <a href="#" className="btn btn-primary">More Info</a>
                </div>
              </div>
            </div>
          </div>
    </div>
    <div className="d-flex flex-row justify-content-center m-5">
        <div id="carouselExample" className="carousel slide ">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={"https://www.ecomena.org/wp-content/uploads/2017/11/renewable-energy-rural-areas.jpg"} className="d-block " width="900px" height="500px"/>
              </div>
              <div className="carousel-item">
                <img src={"https://www.pv-magazine-india.com/wp-content/uploads/sites/8/2017/04/04016_Image_1-1200x788.jpg"} className="d-block"width="900px" height="500px"/>
              </div>
              <div className="carousel-item">
                <img src={"https://www.forbesindia.com/fbimages/900x600/proportional/jpeg/blog/wp-content/uploads/2019/04/Vikram-Solar_BG.jpg"} className="d-block" width="900px" height="500px"/>
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
              <span className="carousel-control-prev-icon"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
              <span className="carousel-control-next-icon"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
    </div>
    <div className="container border">
      <div className="row">
          <div className="col-md-3">
                  <div className="" >
                      <div className="row ">
                        <div className="col-4">
                          <img src={"https://d1csarkz8obe9u.cloudfront.net/posterpreviews/solar-panels-electricity-generation-modern-design-template-d1e508399c828dfd7bdc47af1a014772_screen.jpg?ts=1694289822"} className="img-thumbnail rounded-circle m-3" />
                        </div>
                        <div className="col-8">
                          <div className="card-body">
                            <h3 className="card-title">YUVARAAJ CK</h3>
                            <p className="card-text">Renewable Energy Source Advisor</p>
                          </div>
                        </div>
                      </div>
                    </div>
              </div>
          
          <div className="col-md-3">
              <h3><i className="fa-solid fa-phone"></i> Phone No.</h3>
              <p>7867011259</p>

          </div>
          <div className="col-md-3">
              <h3><i className="fa-solid fa-envelope"></i> E-mail</h3>
              <p>yuvaraajkannan@gmail.com</p>
          </div>
          <div className="col-md-3">
              <h3><i className="fa-solid fa-location-dot"></i> Address</h3>
              <p>17 Ayur vigyan Nagar,New Delhi, India</p>
          </div>
      </div>
      <div className="bg-light">
          2024 Created by Yuvaraaj.
      </div>
  </div>
  </div>  

   
  );
}

export default App;
