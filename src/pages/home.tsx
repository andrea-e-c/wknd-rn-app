import React from "react";

export default function Home() {
  return (
    <div>
      <div className="bg-sky-500 p-4">
        <h1 className="text-3xl font-bold underline">Home</h1>
      </div>

      <div>
        <h3 className="text-lg font-bold text-left p-4">Your Events</h3>
        <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="w-72 p-4 bg-sky-200 rounded-lg">
            <div className="h-32 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
            <h4 className="text-lg font-bold p-4">Event 1</h4>
            <p>Event 1 description</p>
          </div>
          <div className="w-72 p-4 bg-sky-200 rounded-lg">
            <div className="h-32 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
            <h4 className="text-lg font-bold p-4">Event 2</h4>
            <p>Event 2 description</p>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-left p-4">Explore Events</h3>
        <div className="flex flex-wrap p-4">
          <div className="w-72 p-4 bg-sky-200 rounded-lg">
            <div className="h-32 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
            <h4 className="text-lg font-bold p-4">Event 3</h4>
            <p>Event 3 description</p>
          </div>
        </div>
      </div>
    </div>
  );
}