function HomePage() {
  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center">
      <div className="rounded-xl bg-white p-10 shadow-xl">
        <h1 className="text-4xl font-bold text-slate-900">
          QRHub
        </h1>

        <p className="mt-3 text-slate-600">
          Tailwind CSS is working 🎉
        </p>

        <button className="mt-6 rounded-lg bg-blue-600 px-6 py-3 font-medium text-white hover:bg-blue-700">
          Generate QR
        </button>
      </div>
    </div>
  );
}

export default HomePage;