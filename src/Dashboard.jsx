import React from "react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-slate-50 font-serif text-slate-900">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full bg-white border-b z-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2 text-xl font-bold">
            <div className="w-6 h-6 bg-slate-300" />
            Portify
          </div>
          <nav className="hidden md:flex items-center gap-8 text-sm">
            <a className="font-semibold underline underline-offset-4" href="#">My Dashboard</a>
            <a href="#">Templates</a>
            <a href="#">ATS Checker</a>
          </nav>
          <div className="text-2xl md:hidden">☰</div>
        </div>
      </header>

      {/* Content */}
      <main className="pt-28 max-w-7xl mx-auto px-6">
        <h1 className="text-4xl font-bold mb-10">Welcome Back Jane!</h1>

        {/* Stats */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <Stat title="Total Docs" value="4" />
          <Stat title="Total Doc views" value="1148" badge="↗" />
          <Stat title="Unpublished Drafts" value="2" warning />
          <button className="bg-sky-500 text-white rounded-xl shadow flex items-center justify-center text-lg font-semibold gap-2">
            Create New <span className="text-2xl">＋</span>
          </button>
        </section>

        {/* Tabs + Search */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
          <div className="flex gap-6 text-sm">
            <a className="underline underline-offset-4" href="#">My Documents (4)</a>
            <a href="#">Cover Letters (1)</a>
            <a href="#">Resumes (1)</a>
            <a href="#">CVs (1)</a>
            <a href="#">Portfolios (1)</a>
          </div>
          <input
            placeholder="Search"
            className="border rounded-full px-4 py-2 text-sm w-full md:w-64"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-xl shadow overflow-hidden">
          <table className="w-full text-sm">
            <thead className="border-b">
              <tr className="text-left">
                <th className="p-4">TITLE</th>
                <th>STATUS</th>
                <th>VIEWS</th>
                <th>LAST EDITED</th>
                <th className="text-right p-4">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              <Row
                title="Senior UX designer Cover Letter"
                email="jane.doe@portify.com"
                status={<Badge color="green">Published ✓</Badge>}
                views="530"
                edited="4 hours ago"
              />
              <Row
                title="Senior UX designer Resume"
                email="jane.doe@portify.com"
                status={<Badge color="yellow">Draft ⚠</Badge>}
                views="346"
                edited="2 days ago"
              />
              <Row
                title="Senior UX designer Portfolio"
                email="jane.doe@portify.com"
                status={<Badge color="gray">Archived ⦿</Badge>}
                views="218"
                edited="1 month ago"
              />
              <Row
                title="Senior UX designer CV"
                email="jane.doe@portify.com"
                status={<Badge color="gray">Archived ⦿</Badge>}
                views="112"
                edited="2 months ago"
              />
            </tbody>
          </table>
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-24 bg-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-center gap-2 text-xl font-bold">
              <div className="w-6 h-6 bg-white" /> Portify
            </div>
            <nav className="flex gap-6 text-sm">
              <a href="#">Home</a>
              <a href="#">Products</a>
              <a href="#">Templates</a>
              <a href="#">About Us</a>
              <a href="#">Contact Us</a>
            </nav>
          </div>
          <p className="text-xs opacity-70">Terms of Services | Privacy Policy</p>
        </div>
      </footer>
    </div>
  );
}

function Stat({ title, value, badge, warning }) {
  return (
    <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-2">
      <div className="flex items-center gap-2 text-sm text-slate-500">
        {title}
        {badge && <span className="text-green-500">{badge}</span>}
        {warning && <span className="text-yellow-500">⚠</span>}
      </div>
      <div className="text-3xl font-bold">{value}</div>
    </div>
  );
}

function Row({ title, email, status, views, edited }) {
  return (
    <tr className="border-b last:border-none">
      <td className="p-4">
        <div className="font-semibold">{title}</div>
        <div className="text-xs text-slate-500">{email}</div>
      </td>
      <td>{status}</td>
      <td>{views}</td>
      <td className="text-slate-500">{edited}</td>
      <td className="p-4 text-right text-sky-500 flex justify-end gap-4">
        <button>Edit</button>
        <button className="text-red-500">🗑</button>
      </td>
    </tr>
  );
}

function Badge({ children, color }) {
  const styles = {
    green: "bg-green-100 text-green-700",
    yellow: "bg-yellow-100 text-yellow-700",
    gray: "bg-slate-200 text-slate-700",
  };

  return (
    <span className={`px-3 py-1 rounded-full text-xs ${styles[color]}`}>
      {children}
    </span>
  );
}
