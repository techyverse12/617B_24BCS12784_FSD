import CourseList from './CourseList.jsx';

const courses = [
  { id: 'react', name: 'React Basics', price: 999 },
  { id: 'node', name: 'Node.js Essentials', price: 1199 },
  { id: 'uiux', name: 'UI/UX Design', price: 799 },
];

function CourseCatalog({ user, enrolledCount, setEnrolledCount }) {
  return (
    <div>
      <h2>COURSE CATALOG</h2>
      <CourseList user={user} courses={courses} enrolledCount={enrolledCount} setEnrolledCount={setEnrolledCount} />
    </div>
  );
}

export default CourseCatalog;
