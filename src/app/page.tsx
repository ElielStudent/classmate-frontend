import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Tutoring Platform</h1>
      <div className="space-y-4">
        <Link href="/student/find-sessions" className="block text-blue-500 hover:text-blue-700">
          Student Dashboard
        </Link>
        <Link href="/teacher/student-requests" className="block text-green-500 hover:text-green-700">
          Teacher Dashboard
        </Link>
      </div>
    </main>
  );
}