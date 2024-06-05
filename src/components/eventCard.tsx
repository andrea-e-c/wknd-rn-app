import React from "react";

interface EventCardProps {
  title: string;
  description: string;
}

export default function EventCard({ title, description }: EventCardProps) {
  return (
    <div className="w-72 p-4 bg-sky-200 rounded-lg">
      <div className="h-32 w-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
      <h4 className="text-lg font-bold p-4">{title}</h4>
      <p>{description}</p>
    </div>
  );
}