import NeuralBackground from './NeuralBackground'


function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '120px 40px 80px',
      background: 'linear-gradient(180deg, #f8f8ff 0%, #fafafa 100%)',
      overflow: 'hidden',
    }}>
      <NeuralBackground />
      <div style={{
        position: 'relative',
        zIndex: 1,
        textAlign: 'center',
        maxWidth: 720,
      }}>
        <div style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 6,
          padding: '6px 16px',
          borderRadius: 100,
          background: 'rgba(99, 102, 241, 0.08)',
          color: '#6366f1',
          fontSize: 13,
          fontWeight: 600,
          marginBottom: 28,
        }}>
          <span style={{
            width: 7,
            height: 7,
            borderRadius: '50%',
            background: '#22c55e',
            display: 'inline-block',
          }} />
          Open to opportunities
        </div>

        <h1 style={{
          fontSize: 'clamp(42px, 6vw, 72px)',
          fontWeight: 800,
          lineHeight: 1.08,
          letterSpacing: '-2px',
          color: '#0a0a1a',
          margin: '0 0 20px',
        }}>
          Deep Patel
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 2vw, 19px)',
          color: '#555',
          lineHeight: 1.6,
          maxWidth: 560,
          margin: '0 auto 36px',
        }}>
          Building intelligent systems at the intersection of machine learning, embedded computing, and modern web technologies.
        </p>

        <div style={{
          display: 'flex',
          gap: 14,
          justifyContent: 'center',
          flexWrap: 'wrap',
        }}>
          <a href="#projects" style={{
            padding: '14px 32px',
            borderRadius: 14,
            border: 'none',
            background: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
            color: '#fff',
            fontSize: 15,
            fontWeight: 600,
            textDecoration: 'none',
            boxShadow: '0 4px 20px rgba(99, 102, 241, 0.3)',
          }}>
            View My Work
          </a>
           <a href="mailto:deepdp840@gmail.com" style={{
            padding: '14px 32px',
            borderRadius: 14,
            border: '1.5px solid #ddd',
            background: '#fff',
            color: '#1a1a2e',
            fontSize: 15,
            fontWeight: 600,
            textDecoration: 'none',
          }}>
            Get in Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero