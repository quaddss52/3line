export default function OverlappingProfiles({ amount }: { amount: number }) {
  return (
    <div className="flex items-center">
      {Array.from({ length: Math.min(amount, 5) }).map((_, index) => (
        <div
          key={index}
          className="h-8 w-8 -ml-3 first:ml-0 rounded-full border-white border-2 overflow-hidden"
        >
          <img
            src="/images/profile.jpg"
            alt={`profile ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {amount > 5 && (
        <div className="h-8 w-8 -ml-2 rounded-full flex bg-gray-100 text-gray-600 text-xs font-medium items-center justify-center border-white border-2">
          +{amount - 5}
        </div>
      )}
    </div>
  );
}
