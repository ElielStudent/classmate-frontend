'use client';

import TeacherLayout from '@/components/TeacherLayout';

export default function PreviousSessions() {
  return (
    <TeacherLayout>
      <h2 className="text-2xl font-bold mb-4">Previous Sessions</h2>
      <p>Review your past tutoring sessions and their outcomes.</p>
      <p>You can see student feedback and ratings for each completed session.</p>
      {/* Add list of previous sessions here */}
    </TeacherLayout>
  );
}