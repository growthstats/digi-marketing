import { SanityDocument } from 'next-sanity';
import { draftMode } from 'next/headers';

import Posts from '@/components/Posts';
import PostsPreview from '@/components/PostsPreview';
import { POSTS_QUERY } from '@/sanity/lib/queries';
import { loadQuery } from '@/sanity/lib/store';

export default async function Page() {
  const initial = await loadQuery<SanityDocument[]>(
    POSTS_QUERY,
    {},
    {
      perspective: draftMode().isEnabled ? 'previewDrafts' : 'published',
    },
  );

  return draftMode().isEnabled ? <PostsPreview initial={initial} /> : <Posts posts={initial.data} />;
}
