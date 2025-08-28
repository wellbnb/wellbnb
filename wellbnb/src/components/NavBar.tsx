import React, { useState, useRef, useEffect } from "react";
import {
  FaSpa,
  FaSun,
  FaEnvelope,
  FaUser,
  FaEllipsisH,
  FaDumbbell,
  FaHotel,
  FaHeadphones,
  FaHandsHelping,
  FaBolt,
} from "react-icons/fa";
import { MdGraphicEq } from "react-icons/md";
import { GiMeditation, GiFruitBowl } from "react-icons/gi";
import { useLocation } from "react-router-dom";
import wellLogo from "../assets/well_icon.png";
import "./NavBar.css";

export default function NavBar() {
  const location = useLocation();
  const [showTabBar, setShowTabBar] = useState(false);
  const moreBtnRef = useRef<HTMLButtonElement>(null);
  const tabBarRef = useRef<HTMLDivElement>(null);

  // Hide tab bar if click outside
  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (
        tabBarRef.current &&
        !tabBarRef.current.contains(e.target as Node) &&
        moreBtnRef.current &&
        !moreBtnRef.current.contains(e.target as Node)
      ) {
        setShowTabBar(false);
      }
    }
    if (showTabBar) {
      window.addEventListener("mousedown", handleClick);
      return () => window.removeEventListener("mousedown", handleClick);
    }
  }, [showTabBar]);

  // Helper to match paths
  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <nav className="wbn-navbar">
      <div className="wbn-navbar-logo">
        <img src={wellLogo} alt="WellBnB Logo" className="wbn-logo-img" />
        <span className="wbn-navbar-title">WellBnB</span>
      </div>
      <div className="wbn-navbar-links">
        <a
          href="/"
          className={`wbn-navbar-btn${
            isActive("/") ? " wbn-navbar-btn--active" : ""
          }`}
        >
          <FaSpa /> WELLBNB
        </a>
        <a
          href="/travel"
          className={`wbn-navbar-btn${
            isActive("/travel") ? " wbn-navbar-btn--active" : ""
          }`}
        >
          <FaHotel /> TRAVEL
        </a>
        <a
          href="/retreats"
          className={`wbn-navbar-btn${
            isActive("/retreats") ? " wbn-navbar-btn--active" : ""
          }`}
        >
          <FaSun /> RETREATS
        </a>
        <a
          href="/practice"
          className={`wbn-navbar-btn${
            isActive("/practice") ? " wbn-navbar-btn--active" : ""
          }`}
        >
          <FaBolt /> PRACTICE
        </a>
        <a
          href="/concierge"
          className={`wbn-navbar-btn${
            isActive("/concierge") ? " wbn-navbar-btn--active" : ""
          }`}
        >
          <FaSpa /> CONCIERGE
        </a>
        <a
          href="/profile"
          className={`wbn-navbar-btn${
            isActive("/profile") ? " wbn-navbar-btn--active" : ""
          }`}
        >
          <FaUser /> PROFILE
        </a>
        <button
          className="wbn-navbar-btn"
          ref={moreBtnRef}
          onClick={() => setShowTabBar((v) => !v)}
          aria-haspopup="true"
          aria-expanded={showTabBar}
        >
          <FaEllipsisH /> MORE
        </button>
      </div>
      {showTabBar && (
        <div className="wbn-tabbar-popup" ref={tabBarRef}>
          <a className="wbn-tabbar-link" href="/inbox">
            <FaEnvelope /> INBOX
          </a>
          <a className="wbn-tabbar-link" href="/fitness">
            <FaDumbbell /> FITNESS
          </a>
          <a className="wbn-tabbar-link" href="/yoga">
            <GiMeditation /> YOGA
          </a>
          <a className="wbn-tabbar-link" href="/vibe">
            <MdGraphicEq /> VIBE
          </a>
          <a className="wbn-tabbar-link" href="/well">
            <GiFruitBowl /> WELL
          </a>
          <a className="wbn-tabbar-link" href="/playlists">
            <FaHeadphones /> PLAYLISTS
          </a>
          <a className="wbn-tabbar-link" href="/support">
            <FaHandsHelping /> SUPPORT
          </a>
        </div>
      )}
    </nav>
  );
}
