export default function Layout() {
  return (
    <div>
      <Header />

      <div className="d-flex">
        <Sidebar />

        <main className="flex-grow-1">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}