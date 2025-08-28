import React from "react";
import { useLocation } from "react-router-dom";

export default function SearchResultsPage() {
  const { search } = useLocation();
  const params = new URLSearchParams(search);

  // Extract params
  const destination = params.get("destination");
  const checkIn = params.get("checkIn");
  const checkOut = params.get("checkOut");
  const adults = params.get("adults");
  // ...etc for all your form fields

  // You would use these parameters to filter actual results, e.g. make an API call here

  return (
    <div style={{ padding: 40 }}>
      <h2>Search Results</h2>
      <p>
        <strong>Destination:</strong> {destination}
        <br />
        <strong>Check-In:</strong> {checkIn}
        <br />
        <strong>Check-Out:</strong> {checkOut}
        <br />
        <strong>Adults:</strong> {adults}
        <br />
        {/* ...display the rest */}
      </p>
      {/* Render your filtered results here */}
    </div>
  );
}
