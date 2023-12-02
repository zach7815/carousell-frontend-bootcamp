import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';

const useAuth = (redirectURL) => {
  const navigate = useNavigate();
  const { isAuthenticated, getAccessTokenSilently, loginWithRedirect } =
    useAuth0();
  const [accessToken, setAccessToken] = useState('');
  const checkUser = async () => {
    if (isAuthenticated) {
      let token = await getAccessTokenSilently();
      console.log(token);
      setAccessToken(token);
      navigate(redirectURL);
    } else {
      loginWithRedirect();
    }
  };
  useEffect(() => {
    checkUser();
  }, []);

  return accessToken;
};

export default useAuth;
