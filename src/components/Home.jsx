import appFirebase from "../credenciales"
import {getAuth, signOut} from 'firebase/auth'

const Auth = getAuth(appFirebase)

const Home = ({email}) => {
    return(
        <div>
         <p>Bienvenido <strong>{email}</strong> Haz iniciado sesion.
        </p>   
            
        <button onClick={() => {signOut( Auth )}}>Cerrar Sesion</button>
        <hr/>
        </div>
    )
}

export default Home;