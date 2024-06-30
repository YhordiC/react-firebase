import Img1 from "../img/img1.jpg"
import Img2 from "../img/img2.jpg"
import Img3 from "../img/img3.jpg"
import "../App.css"
import Logeo from "./Logeo"
import Register from "./Register"
import {useState} from "react"
import firebaseApp from "../credenciales"
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword} from "firebase/auth"

const auth = getAuth(firebaseApp)

const Login = () => {

  const [Login, setLogin] = useState(false) // Con login cambiare de logear a registrar/ false es registrar
  const handlesubmit = async (e) => {
    e.preventDefault();

    const correo = e.target.email.value;
    const password = e.target.password.value;
    
    if(Login){
      try{
        await signInWithEmailAndPassword(auth, correo, password)
      }catch(e){
        console.error('No se pudo. Este es el error ' + e)
        alert('Revise su correo o password')
      }
      
    } else {
      try{
        await createUserWithEmailAndPassword(auth,correo, password)
      } catch(e){
        console.error('Error al registrarse' + e)
        alert('Uvo un error al registrarse.')
      }
      
    }
    

   
  }  
  
  return(
        <div className="row constainer p-4">
            <div className="col-md-8">
            <div id="carouselExampleFade" className="carousel slide carousel-fade">
              <div className="carousel-inner ">
                <div className="carousel-item active ">
                  <img src={Img1} className=" d-block ancho-imagen" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={Img2} className="d-block ancho-imagen" alt="..."/>
                </div>
                <div className="carousel-item">
                  <img src={Img3} className="d-block ancho-imagen" alt="..."/>
                </div>
              </div>
             <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
               <span className="carousel-control-prev-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Previous</span>
             </button>
             <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
               <span className="carousel-control-next-icon" aria-hidden="true"></span>
               <span className="visually-hidden">Next</span>
             </button>
            </div> 
            </div>

            <div className='col-md-4'>
              <div className="mt-5 ms-5">
                <section className="container-btn-form">
                  <button onClick={() => {setLogin(false)}}
                    style={{
                      backgroundColor: Login ? 'rgb(0, 119, 255)' : 'rgb(4, 71, 147)',
                      borderBottomColor: Login ? '' : 'rgb(76, 150, 235)'
                    }}
                    >Registrar</button>
                  <button onClick={() => {setLogin(true)}}
                     style={{
                      backgroundColor: Login ? 'rgb(4, 71, 147)' : 'rgb(0, 119, 255)',
                      borderBottomColor: Login ? 'rgb(76, 150, 235)' : ''
                    }}>Logear</button>
                </section>
                {Login ? <Logeo handlesubmit={handlesubmit}/> : <Register handlesubmit={handlesubmit}/>}
                
                
              </div>
            </div>
        </div>
    )
}

export default Login;