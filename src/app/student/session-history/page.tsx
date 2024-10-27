'use client';

import StudentLayout from '@/components/StudentLayout';

export default function SessionHistory() {
  return (
    <StudentLayout>
      <h2 className="text-2xl font-bold mb-4">Session History</h2>
      <p>Your past tutoring sessions and their details will be listed here.</p>
      {/* Add list of past sessions here */}
    </StudentLayout>
  );
}