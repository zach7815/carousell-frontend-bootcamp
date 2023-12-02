import axios from 'axios';
import { BACKEND_URL } from '../constants.js';
import Button from 'react-bootstrap/Button';

import useAuth from './hooks/useAuth.js';

const BuyButton = ({ listingId, setListing, redirectURL }) => {
  const isAuthenticated = useAuth(redirectURL);

  const handleClick = () => {
    axios.put(`${BACKEND_URL}/listings/${listingId}`).then((response) => {
      setListing(response.data);
    });
  };

  if (!isAuthenticated) {
    return <div> login or sign up to be able to buy</div>;
  }

  return (
    <div>
      <Button onClick={handleClick}>Buy</Button>
    </div>
  );
};

export default BuyButton;
