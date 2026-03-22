function Experience() {
  var jobs = [
    {
      company: 'BlackRock',
      role: 'AI/ML Engineer',
      period: 'Nov 2024 - Present',
      location: 'United States',
      color: '#6366f1',
      highlights: [
        'Architected a distributed, event-driven portfolio risk forecasting platform leveraging PySpark on AWS EMR with Kafka-based streaming, processing 3TB+ daily data across 1,000+ multi-asset securities',
        'Designed hybrid time-series forecasting pipelines combining LSTM and XGBoost with feature drift detection and rolling window retraining — achieving 30% improvement in VaR and volatility prediction accuracy',
        'Engineered a distributed Monte Carlo simulation framework using Spark to parallelize 10K+ stochastic paths per asset — reducing portfolio drawdown exposure by 18%',
        'Optimized large-scale Spark workloads by tuning shuffle partitioning, broadcast joins, and caching layers — achieving 40% reduction in end-to-end pipeline latency',
        'Developed high-throughput inference services using FastAPI with async request handling — exposing real-time portfolio risk metrics with sub-2 second latency',
      ],
    },
    {
      company: 'Infinite Infolab',
      role: 'AI/ML Engineer',
      period: 'Jan 2020 - July 2023',
      location: 'India',
      color: '#06b6d4',
      highlights: [
        'Developed supervised and unsupervised ML models using Scikit-learn, LightGBM, and XGBoost — delivering 25% performance gains',
        'Built deep learning solutions with TensorFlow and PyTorch including CNNs and RNN/LSTM models — improving accuracy by 20%',
        'Designed NLP pipelines using BERT and GPT models — reducing manual processing effort by 50%',
        'Implemented vector search and embedding-based retrieval systems using FAISS and LlamaIndex',
        'Created scalable data pipelines with Apache Spark and Hadoop handling terabyte-scale datasets',
        'Deployed models using Docker, Kubernetes, Flask, and MLflow — reducing deployment errors by 30%',
      ],
    },
  ]

  return (
    <section id="experience" style={{
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
        Experience
      </div>
      <h2 style={{
        fontSize: 'clamp(32px, 4vw, 44px)',
        fontWeight: 800,
        letterSpacing: '-1.5px',
        color: '#0a0a1a',
        marginBottom: 48,
        lineHeight: 1.15,
      }}>
        Where I Have Worked
      </h2>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 40 }}>
        {jobs.map(function(job, index) {
          return (
            <div key={index} style={{
              padding: 36,
              borderRadius: 20,
              background: '#fff',
              border: '1px solid #eee',
              position: 'relative',
              overflow: 'hidden',
            }}>
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: 4,
                background: job.color,
              }} />

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                marginBottom: 20,
                flexWrap: 'wrap',
                gap: 12,
              }}>
                <div>
                  <div style={{
                    fontSize: 22,
                    fontWeight: 800,
                    color: '#0a0a1a',
                    marginBottom: 4,
                  }}>
                    {job.company}
                  </div>
                  <div style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: job.color,
                  }}>
                    {job.role}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{
                    fontSize: 14,
                    fontWeight: 600,
                    color: '#555',
                  }}>
                    {job.period}
                  </div>
                  <div style={{
                    fontSize: 13,
                    color: '#999',
                  }}>
                    {job.location}
                  </div>
                </div>
              </div>

              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
              }}>
                {job.highlights.map(function(item, j) {
                  return (
                    <div key={j} style={{
                      display: 'flex',
                      gap: 12,
                      alignItems: 'flex-start',
                    }}>
                      <span style={{
                        color: job.color,
                        fontSize: 18,
                        lineHeight: 1.4,
                        flexShrink: 0,
                      }}>
                        ▸
                      </span>
                      <span style={{
                        fontSize: 14.5,
                        color: '#555',
                        lineHeight: 1.65,
                      }}>
                        {item}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Experience