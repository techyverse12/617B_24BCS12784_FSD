import useUser from '../hooks/useUser.js';

function StudentProfile({ user }) {
  const contextUser = useUser();

  return (
    <div>
      <h2>STUDENT DETAILS</h2>
      <h3>Prop Drilling Version</h3>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      <p>Program: {user.program}</p>
      <h3>Context API Version</h3>
      <p>Name: {contextUser.name}</p>
      <p>Email: {contextUser.email}</p>
      <p>Program: {contextUser.program}</p>
    </div>
  );
}

export default StudentProfile;
