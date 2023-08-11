import React from "react";
import "./App.css";
import { TwitterFollowCard } from "./TwitterFollowCard";


export function App() {
  return (
    <React.Fragment>
        <TwitterFollowCard userName="duckduckgo" name="DuckDuckGo" />
        <TwitterFollowCard userName="reactjs" name="React" />
        <TwitterFollowCard userName="Google" name="Google" />
        <TwitterFollowCard userName="brave" name="Brave Software" />
        <TwitterFollowCard userName="laravel" name="Laravel" />
        <TwitterFollowCard userName="marvelsml25" name="Sebastián Martinez López" />
        <TwitterFollowCard userName="github" name="GitHub" />
    </React.Fragment>
  )
}
