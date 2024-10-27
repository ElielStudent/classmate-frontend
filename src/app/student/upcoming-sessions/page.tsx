'use client';

import StudentLayout from '@/components/StudentLayout';

export default function UpcomingSessions() {
  return (
    <StudentLayout>
      <h2 className="text-2xl font-bold mb-4">Upcoming Sessions</h2>
      <p>Your scheduled tutoring sessions will appear here.</p>
      {/* Add list of upcoming sessions here */}
    </StudentLayout>
  );
}