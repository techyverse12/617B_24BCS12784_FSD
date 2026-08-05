import CourseCatalog from './CourseCatalog.jsx';

function Dashboard({ user, enrolledCount, setEnrolledCount }) {
  return (
    <CourseCatalog user={user} enrolledCount={enrolledCount} setEnrolledCount={setEnrolledCount} />
  );
}

export default Dashboard;
