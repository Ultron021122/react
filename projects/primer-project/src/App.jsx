import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";

export function App() {
  const formatUserName = (userName) => `@${userName}`;

  return (
    <section className="App">
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="duckduckgo"
        name="DuckDuckGo"
        isFollowing
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="reactjs"
        name="React"
        isFollowing={false}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="Google"
        name="Google"
        isFollowing
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="laravel"
        name="Laravel"
        isFollowing={false}
      />
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="marvelsml25"
        name="Sebastián Martinez López"
        isFollowing
      />
    </section>
  );
}
