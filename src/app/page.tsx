import React from "react";

import HomePage from "@/pages/homePage/HomePage";

import HomeHeader from "@/components/header/homeHeader/HomeHeader";
import Container from "@/ui/container/Container";

const Home: React.FC = React.memo(() => {
  return (
    <body className={`flex h-screen flex-col bg-[url("/images/homeBg.jpg")]`}>
      <HomeHeader />

      <main className="flex-1">
        <Container>
          <HomePage />
        </Container>
      </main>
    </body>
  );
});

export default Home;
