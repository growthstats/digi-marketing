import { draftMode } from 'next/headers';
import { VisualEditing } from 'next-sanity';

export default function VisualEditingControls() {
  return (
    <>
      {draftMode().isEnabled && (
        <>
          <VisualEditing />

          <a className="action fixed bottom-0 right-4 rounded-b-none text-xs opacity-50 hover:opacity-100" href="/api/disable-draft">
            Disable draft mode
          </a>
        </>
      )}
    </>
  );
}
