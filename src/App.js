import React from "react";
import * as ReactDOM from "react-dom/client";
import Header from "../components/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-background font-sans antialiased max-w-2xl mx-auto py-12 sm:py-24 px-6 __variable_d65c78">
      <h1 className="flex flex-col min-h-[100dvh] space-y-10">
        Hi, I'm Shivam 👋 Senior Software Engineer with a passion for building
        innovative solutions. Active on social media, sharing insights and
        projects.
      </h1>
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
