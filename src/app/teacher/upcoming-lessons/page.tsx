'use client';

import TeacherLayout from '@/components/TeacherLayout';

export default function UpcomingLessons() {
  return (
    <TeacherLayout>
      <h2 className="text-2xl font-bold mb-4">Upcoming Lessons</h2>
      <p>View your schedule of upcoming tutoring sessions.</p>
      <p>You can see details about each session, including the student, subject, and time.</p>
      {/* Add list of upcoming lessons here */}
    </TeacherLayout>
  );
}