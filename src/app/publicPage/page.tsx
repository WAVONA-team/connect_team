import React from 'react';
import Link from 'next/link';

const PublicPage: React.FC = React.memo(() => {
  return (
    <main>
      <p className="text-3xl">
        This is a public page
      </p>

      <Link
        href={'/'}
      >
        Return to home
      </Link>
    </main>
  );
});

export default PublicPage;
