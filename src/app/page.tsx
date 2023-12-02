import React from 'react';

const Home: React.FC = React.memo(() => {
  return (
    <>
      <header>
        header
      </header>

      <main className="flex-1">
        <div className="w-1/2 m-auto">
          <p>
            home
          </p>
        </div>
      </main>

      <footer>
        footer
      </footer>
    </>
  );
});

export default Home;
