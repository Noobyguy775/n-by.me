'use client';
import ErrorPage from '@/components/pages/shared/ErrorPage';

export default function NotFound() {
  return (
    <ErrorPage
      title="[404] Page not Found"
      text="You find yourself in an elevator with two buttons:"
    />
  );
}
