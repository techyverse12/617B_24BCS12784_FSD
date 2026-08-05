function Navbar({ user, enrolledCount }) {
  return (
    <nav>
      <h1>SKILLNEST ONLINE LEARNING PLATFORM</h1>
      <p>Welcome, {user.name}</p>
      <p>Program: {user.program}</p>
      <p>Enrolled: {enrolledCount} courses</p>
    </nav>
  );
}

export default Navbar;
