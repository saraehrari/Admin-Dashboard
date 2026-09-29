export default function Layout() {
  return (
    <div>
      <Header />

      <div className="d-flex">
        <Sidebar />

        <main className="main-content">
          <Dashboard />
        </main>
      </div>
    </div>
  );
}