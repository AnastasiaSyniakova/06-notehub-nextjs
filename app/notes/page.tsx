import type { Metadata } from 'next';
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { fetchNotes } from '@/lib/api';
import NotesClient from './Notes.client';

export const metadata: Metadata = {
  title: 'Notes',
};

const INITIAL_PAGE = 1;
const NOTES_PER_PAGE = 12;
const INITIAL_SEARCH = '';

export default async function Notes() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['notes', INITIAL_PAGE, INITIAL_SEARCH],
    queryFn: () => fetchNotes({ page: INITIAL_PAGE, perPage: NOTES_PER_PAGE }),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NotesClient />
    </HydrationBoundary>
  );
}
