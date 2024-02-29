function AdminLayout({ children }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <header>admin header</header>
      <div
        style={{
          display: "flex",
        }}
      >
        <nav>admin sider</nav>
        <main>{children}</main>
      </div>
      <footer>admin footer</footer>
    </div>
  );
}

export default AdminLayout;
