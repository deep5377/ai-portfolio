function About() {
  return (
    <section id="about" style={{
      padding: '100px 40px',
      maxWidth: 1100,
      margin: '0 auto',
    }}>
      <div style={{
        fontSize: 13,
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '2.5px',
        color: '#6366f1',
        marginBottom: 12,
      }}>
        About
      </div>

      <div style={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gap: 60,
        alignItems: 'start',
      }}>
        <div>
          <h2 style={{
            fontSize: 'clamp(32px, 4vw, 44px)',
            fontWeight: 800,
            letterSpacing: '-1.5px',
            color: '#0a0a1a',
            marginBottom: 24,
            lineHeight: 1.15,
          }}>
            Engineer who turns data into intelligent systems.
          </h2>
          <p style={{
            fontSize: 16,
            color: '#444',
            lineHeight: 1.8,
          }}>
           I am an AI/ML Engineer at BlackRock with 4+ years of experience building scalable machine learning systems and real-time data pipelines for financial services. I specialize in time-series forecasting, distributed computing with PySpark and AWS, and deploying low-latency inference services. Currently I architect portfolio risk forecasting platforms processing 3TB+ daily data across 1,000+ multi-asset securities. I hold a Masters in Data Analytics Engineering from Northeastern University and a BTech in IT from Apollo Institute of Engineering. Passionate about building AI systems that deliver real-time insights and measurable impact.          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 20,
        }}>
          {[
            { num: '4+', label: 'Years Experience', color: '#6366f1' },
            { num: '30%', label: 'VaR Prediction Improved', color: '#06b6d4' },
            { num: '40%', label: 'Pipeline Latency Reduced', color: '#f59e0b' },
            { num: 'MS', label: 'Northeastern University', color: '#10b981' },
          ].map(function(stat, index) {
            return (
              <div key={index} style={{
                padding: 24,
                borderRadius: 16,
                background: '#fff',
                border: '1px solid #eee',
              }}>
                <div style={{
                  fontSize: 32,
                  fontWeight: 800,
                  letterSpacing: '-1px',
                  color: stat.color,
                }}>
                  {stat.num}
                </div>
                <div style={{
                  fontSize: 13,
                  color: '#888',
                  marginTop: 4,
                }}>
                  {stat.label}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default About