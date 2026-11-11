
export default function Loading() {
  return (
    <div className="flex flex-col min-h-screen items-center justify-center">
      <div className="h-30 w-30 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
      <h1 className="p-4">Loading</h1>
    </div>
  );
}
