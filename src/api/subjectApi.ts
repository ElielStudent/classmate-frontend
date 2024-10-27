import { Subject } from '@/types/subject';

export async function getSubjects(): Promise<Subject[]> {
  const response = await fetch('/api/subjects'); // Adjust this URL to match your API endpoint
  if (!response.ok) {
    throw new Error('Failed to fetch subjects');
  }
  return response.json();
}
