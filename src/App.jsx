import { useEffect, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import Dashboard from './components/Dashboard.jsx';
import UserContext from './context/UserContext.jsx';

function App() {
  const user = { name: 'Karan Mehta', email: 'karan@gmail.com', program: 'Web Development' };
  const [enrolledCount, setEnrolledCount] = useState(0);

  useEffect(() => {
    console.log(`Enrollment updated. Total courses: ${enrolledCount}`);
  }, [enrolledCount]);

  return (
    <UserContext.Provider value={user}>
      <div>
        <Navbar user={user} enrolledCount={enrolledCount} />
        <Dashboard user={user} enrolledCount={enrolledCount} setEnrolledCount={setEnrolledCount} />
      </div>
    </UserContext.Provider>
  );
}

export default App;
