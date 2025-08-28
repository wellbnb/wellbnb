import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import TravelPage from "./pages/TravelPage";
import RetreatsPage from "./pages/RetreatsPage";
import PracticePage from "./pages/PracticePage";
import ConciergePage from "./pages/ConciergePage";
import InboxPage from "./pages/InboxPage";
import ProfilePage from "./pages/ProfilePage";
import SettingsPage from "./pages/SettingsPage";
import HelpPage from "./pages/HelpPage";
import NotFoundPage from "./pages/NotFoundPage";
import FitnessPage from "./pages/FitnessPage";
import YogaPage from "./pages/YogaPage";
import VibePage from "./pages/VibePage";
import PlaylistsPage from "./pages/PlaylistsPage";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/travel" element={<TravelPage />} />
        <Route path="/retreats" element={<RetreatsPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/fitness" element={<FitnessPage />} />
        <Route path="/yoga" element={<YogaPage />} />
        <Route path="/vibe" element={<VibePage />} />
        <Route path="/playlists" element={<PlaylistsPage />} />
        <Route path="/concierge" element={<ConciergePage />} />
        <Route path="/inbox" element={<InboxPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/help" element={<HelpPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
