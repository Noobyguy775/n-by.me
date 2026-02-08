'use client';
import ErrorPage from './ErrorPage';

export default function NotFound() {
  return (
    <ErrorPage
      title="[⚠️] Under Construction"
      text="That floor isn't finished or it's currently being worked on!"
    />
  );
}
