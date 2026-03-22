function Navbar() {
  return (
    <nav style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      padding: '16px 40px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      zIndex: 100,
      background: 'rgba(250, 250, 250, 0.85)',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(0, 0, 0, 0.06)',
    }}>
      {/* Logo */}
      <div style={{
        fontWeight: 700,
        fontSize: 20,
        color: '#1a1a2e',
        letterSpacing: '-0.5px',
      }}>
        Deep<span style={{ color: '#6366f1' }}>.</span>
      </div>

      {/* Navigation Links */}
      <div style={{ display: 'flex', gap: 32, alignItems: 'center' }}>
        <a href="#about" style={linkStyle}>About</a>
        <a href="#skills" style={linkStyle}>Skills</a>
        <a href="#projects" style={linkStyle}>Projects</a>
        <a href="https://github.com/yourusername" target="_blank" style={linkStyle}>GitHub</a>
        <a href="#" style={{
          padding: '10px 22px',
          borderRadius: 14,
          border: 'none',
          background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
          color: '#fff',
          fontSize: 13,
          fontWeight: 600,
          textDecoration: 'none',
        }}>
          Resume
        </a>
      </div>
    </nav>
  )
}

// Reusable style for nav links
const linkStyle = {
  fontSize: 14,
  color: '#666',
  textDecoration: 'none',
  fontWeight: 500,
}

export default Navbar