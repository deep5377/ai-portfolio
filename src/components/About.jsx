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
            I am an AI/ML Engineer with 4+ years of experience designing, building, and deploying machine learning and Generative AI solutions across financial services, risk analytics, and enterprise data platforms. Currently at JPMorgan Chase, I build end-to-end ML pipelines, LLM-powered applications with RAG architectures, and scalable NLP systems that reduce analyst research time by 40%. I hold a Masters in Data Analytics Engineering from Northeastern University. I am passionate about the full stack of AI — from training models to deploying them in production with Docker, Kubernetes, and cloud infrastructure.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 20,
        }}>
          {[
            { num: '4+', label: 'Years Experience', color: '#6366f1' },
            { num: '35%', label: 'Inference Latency Reduced', color: '#06b6d4' },
            { num: '40%', label: 'Research Time Saved', color: '#f59e0b' },
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