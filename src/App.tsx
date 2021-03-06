import { useState } from 'react'
import GoogleLogin, { GoogleLoginResponse } from 'react-google-login'
import './reset.css'
import { Container, ContainerImg } from './style';

function App() {

  const [name, setName ] = useState('');
  const [email, setEmail ] = useState('');
  const [picture, setPicture ] = useState('');
  const [islogged, setIslogged] = useState(false);

  const responseGoogle = (response : GoogleLoginResponse) => {
    setEmail(response.profileObj.email);
    setName(response.profileObj.name);
    setPicture(response.profileObj.imageUrl);
    setIslogged(true);
  }



  return (
    <div>

      {islogged ? '' :
          <GoogleLogin
            clientId='Use your clientID here'
            buttonText='Logue com sua conta do Google'
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
          />
      }
      

      { islogged ? 
      <Container>
        <div>
          <ContainerImg>
            <img src={picture} alt='Profile'/>
          </ContainerImg>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Email:</strong> {email}</p>
        </div>
      </Container> : ''}

      
    </div>
  )
}

export default App
