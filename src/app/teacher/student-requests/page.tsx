'use client';

import TeacherLayout from '@/components/TeacherLayout';

export default function StudentRequests() {
  return (
    <TeacherLayout>
      <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">Student Requests</h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">Here you can view and manage incoming requests from students for tutoring sessions.</p>
      <div className="bg-white dark:bg-gray-700 shadow overflow-hidden sm:rounded-md">
        <ul className="divide-y divide-gray-200 dark:divide-gray-600">
          {[1, 2, 3].map((request) => (
            <li key={request} className="px-4 py-4 sm:px-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium text-indigo-600 dark:text-indigo-400 truncate">
                  Student Request #{request}
                </p>
                <div className="ml-2 flex-shrink-0 flex">
                  <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100">
                    New
                  </p>
                </div>
              </div>
              <div className="mt-2 sm:flex sm:justify-between">
                <div className="sm:flex">
                  <p className="flex items-center text-sm text-gray-500 dark:text-gray-300">
                    Subject: Math
                  </p>
                  <p className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-300 sm:mt-0 sm:ml-6">
                    Grade: 10th
                  </p>
                </div>
                <div className="mt-2 flex items-center text-sm text-gray-500 dark:text-gray-300 sm:mt-0">
                  <p>Requested: 2h ago</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </TeacherLayout>
  );
}