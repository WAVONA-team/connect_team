import React from "react";

const Home: React.FC = React.memo(() => {
  return (
    <>
      <header>header</header>

      <main className="flex-1">
        <div className="m-auto w-1/2">
          <p>home</p>
        </div>
      </main>

      <footer>footer</footer>
    </>
  );
});

export default Home;
