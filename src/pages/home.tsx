import React from "react";
import EventCard from "../components/eventCard";

export default function Home() {
  return (
    <div>
      <div className="bg-sky-500 p-4">
        <h1 className="text-3xl font-bold underline">Home</h1>
      </div>

      <div>
        <h3 className="text-lg font-bold text-left p-4">Your Events</h3>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <EventCard title="Event 1" description="Event 1 description" />
          <EventCard title="Event 2" description="Event 2 description" />
          <EventCard title="Event 3" description="Event 3 description" />
          <EventCard title="Event 4" description="Event 4 description" />
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-left p-4">Explore Events</h3>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <EventCard title="Event 5" description="Event 5 description" />
          <EventCard title="Event 6" description="Event 6 description" />
          <EventCard title="Event 7" description="Event 7 description" />
          <EventCard title="Event 8" description="Event 8 description" />
        </div>
      </div>
    </div>
  );
}