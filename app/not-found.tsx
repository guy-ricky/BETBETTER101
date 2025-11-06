"use client";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        {/* Animated 404 Number */}
        <div className="relative mb-8">
          <h1 className="text-9xl font-bold text-primary opacity-20 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <h2 className="text-6xl font-bold text-white">Page Not Found</h2>
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-300 text-lg mb-8">
          Oops! The prediction you&apos;re looking for seems to be offside.
          Let&apos;s get you back in the game.
        </p>

        {/* Action Button */}
        <button
          onClick={() => window.history.back()}
          className="bg-primary hover:bg-green-500 text-primary-foreground font-semibold py-3 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-brb-green"
        >
          Back
        </button>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center space-x-4">
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          <div className="w-2 h-2 bg-secondary rounded-full animate-pulse animation-delay-2000"></div>
          <div className="w-2 h-2 bg-primary rounded-full animate-pulse animation-delay-4000"></div>
        </div>
      </div>
    </div>
  );
}
