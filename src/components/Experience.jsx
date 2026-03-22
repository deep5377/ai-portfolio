function Experience() {
  var jobs = [
    {
      company: 'JPMorgan Chase & Co.',
      role: 'AI/ML Engineer',
      period: 'Nov 2024 - Present',
      location: 'Massachusetts',
      color: '#6366f1',
      highlights: [
        'Designed end-to-end ML pipelines for risk and customer analytics using Python, Scikit-learn, XGBoost, and PyTorch — improved model inference latency by 35%',
        'Built LLM-powered applications using Hugging Face, LangChain, and RAG with FAISS and Pinecone — reduced analyst research time by 40%',
        'Implemented production-grade MLOps with Docker, Kubernetes, MLflow, and CI/CD pipelines — cut model release cycles from weeks to days',
        'Developed NLP solutions for document intelligence using BERT-based models for automated extraction of financial documents',
        'Exposed ML and LLM services via FastAPI and REST APIs on AWS (EC2, S3, Lambda, SageMaker)',
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