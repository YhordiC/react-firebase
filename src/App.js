import { useState } from 'react';
import Home from './components/Home';
import Login from './components/Login';
import './App.css';
import app from './credenciales';
import {getAuth, onAuthStateChanged} from "firebase/auth"
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { GoogleGenerativeAI,HarmCategory,HarmBlockThreshold } from '@google/generative-ai';
import * as fs from "fs"



function App(){
  
  const Auth = getAuth(app);
  const db = getFirestore(app);
  const [user, setUser] = useState(null)
  const [dato, setDato] = useState('')

  const apy_key = 'AIzaSyACJBkRnCjQKq600lO6AV2xbKfFBR_c1l0';
  const genAI = new GoogleGenerativeAI(apy_key);




  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "text/plain",
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const texto = event.target.text.value;
    console.log(texto)
    run(texto)
  } 

  function fileToGenerativePart(path, mineType){
    return {
      inlineData: {
        data: Buffer.from(fs.readFileSync(path)).toString("base64"),
        mineType
      },
    };
  }

  async function run(text) {
    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash"
    });

   /* const chatSession = model.startChat({
      generationConfig,
      history:[
      ],
    }); investigar sobre 
    chatSesion , generateContent*/ 

    const imagePats = [
      fileToGenerativePart("image1.png", "image/png"),
      fileToGenerativePart("image2.jpeg", "image/jpeg")
    ];

    const result = await model.generateContent([text, ...imagePats]);

    console.log(result.response.text());
    setDato(result.response.text())
  }

  
  onAuthStateChanged(Auth, (UserFireBase) => {
    if(UserFireBase){
      setUser(UserFireBase);
    }else{
      setUser(null)
    }
  })

  return (
    <div className="App">
      {/*user ? <Home email={user.email}/> : <Login/>*/}
      {dato && <p>{dato}</p>}
      
      <form onSubmit={handleSubmit}>
        <input type='text' id='text'/>
        <button type='submit'>Enviar</button>
      </form>
    </div>
  );
}

export default App;
