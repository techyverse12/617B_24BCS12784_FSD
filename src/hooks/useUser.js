import { useContext } from 'react';
import UserContext from '../context/UserContext.jsx';
const useUser = () => {
  return useContext(UserContext);
};
export default useUser;
