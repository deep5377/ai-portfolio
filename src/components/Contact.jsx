function Contact() {
  var footerLink = {
    fontSize: 14,
    color: '#555',
    textDecoration: 'none',
    fontWeight: 500,
  }

  return (
    <div>
      <section style={{
        maxWidth: 1100,
        margin: '0 auto 80px',
        padding: '64px 48px',
        borderRadius: 24,
        textAlign: 'center',
        background: 'linear-gradient(135deg, #1a1a2e 0%, #2d1b69 100%)',
        marginLeft: 40,
        marginRight: 40,
      }}>
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 44px)',
          fontWeight: 800,
          letterSpacing: '-1.5px',
          color: '#fff',
          marginBottom: 12,
          lineHeight: 1.15,
        }}>
          Lets build something together.
        </h2>
        <p style={{
          fontSize: 16,
          color: 'rgba(255,255,255,0.65)',
          marginBottom: 32,
          lineHeight: 1.6,
        }}>
          Always open to interesting conversations and opportunities in AI/ML.
        </p>
        <div style={{
          display: 'flex',
          gap: 14,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="mailto:deepdp840@gmail.com" style={{
            padding: '14px 32px',
            borderRadius: 14,
            border: 'none',
            background: '#fff',
            color: '#1a1a2e',
            fontSize: 15,
            fontWeight: 600,
            textDecoration: 'none',
          }}>
            Say Hello
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" style={{
            padding: '14px 32px',
            borderRadius: 14,
            border: '1.5px solid rgba(255,255,255,0.2)',
            background: 'transparent',
            color: '#fff',
            fontSize: 15,
            fontWeight: 600,
            textDecoration: 'none',
          }}>
            LinkedIn
          </a>
        </div>
      </section>

      <footer style={{
        padding: '60px 40px',
        textAlign: 'center',
        borderTop: '1px solid #eee',
      }}>
        <div style={{
          display: 'flex',
          gap: 24,
          justifyContent: 'center',
          marginBottom: 20,
        }}>
          <a href="https://github.com/yourusername" target="_blank" rel="noreferrer" style={footerLink}>GitHub</a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" style={footerLink}>LinkedIn</a>
          <a href="mailto:deepdp840@gmail.com" style={footerLink}>Email</a>
        </div>
        <p style={{ fontSize: 14, color: '#999' }}>
          Built with React, Three.js and Claude AI - Deep Patel 2025
        </p>
      </footer>
    </div>
  )
}

export default Contact