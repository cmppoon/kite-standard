import React from "react";

export default function Loading() {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-300 border-t-gray-800" />
    </div>
  );
}
