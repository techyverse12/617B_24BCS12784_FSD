import { useState } from 'react';
import StudentProfile from './StudentProfile.jsx';

function CourseList({ user, courses, setEnrolledCount }) {
  const [enrolled, setEnrolled] = useState({});

  const handleEnroll = (id) => {
    if (!enrolled[id]) {
      setEnrolled({ ...enrolled, [id]: true });
      setEnrolledCount((prev) => prev + 1);
    }
  };

  return (
    <div>
      {courses.map((course) => (
        <div key={course.id}>
          <span>{course.name} ₹{course.price}</span>
          <button onClick={() => handleEnroll(course.id)} disabled={enrolled[course.id]}>
            {enrolled[course.id] ? 'Enrolled' : 'Enroll'}
          </button>
        </div>
      ))}
      <StudentProfile user={user} />
    </div>
  );
}

export default CourseList;
