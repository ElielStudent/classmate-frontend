'use client';

import TeacherLayout from '@/components/TeacherLayout';

export default function Statistics() {
  return (
    <TeacherLayout>
      <h2 className="text-2xl font-bold mb-4">Statistics</h2>
      <p>View your performance metrics and tutoring statistics.</p>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Average Rating</h3>
        <p>Your current average rating from students: 4.8/5.0</p>
      </div>
      <div className="mt-4">
        <h3 className="text-xl font-semibold">Total Time in Sessions</h3>
        <p>Total time spent tutoring: 120 hours</p>
      </div>
      {/* Add more detailed statistics and charts here */}
    </TeacherLayout>
  );
}