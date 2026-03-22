function Skills() {
  var skills = [
    {
      category: 'AI / Machine Learning',
      icon: '🧠',
      color: '#6366f1',
      items: [
        'PyTorch', 'TensorFlow', 'Scikit-learn', 'XGBoost',
        'LightGBM', 'Keras', 'CNNs', 'RNNs', 'LSTMs',
        'Transformers', 'Feature Engineering', 'Model Optimization',
      ],
    },
    {
      category: 'Generative AI & LLMs',
      icon: '🤖',
      color: '#8b5cf6',
      items: [
        'LLMs', 'RAG Architecture', 'Prompt Engineering',
        'LLM Fine-Tuning', 'LangChain', 'LangGraph',
        'Hugging Face', 'LlamaIndex', 'FAISS', 'Pinecone',
        'AutoGen', 'Vector Search',
      ],
    },
    {
      category: 'NLP & Computer Vision',
      icon: '👁️',
      color: '#06b6d4',
      items: [
        'BERT', 'GPT Models', 'Text Classification',
        'Sentiment Analysis', 'Document Intelligence',
        'OpenCV', 'Image Classification', 'Object Detection',
      ],
    },
    {
      category: 'Data Engineering & Cloud',
      icon: '☁️',
      color: '#f59e0b',
      items: [
        'Apache Spark', 'Hadoop', 'Kafka', 'Pandas', 'NumPy',
        'AWS SageMaker', 'EC2', 'S3', 'Lambda',
        'GCP BigQuery', 'Azure ML', 'Snowflake',
      ],
    },
    {
      category: 'MLOps & Deployment',
      icon: '⚙️',
      color: '#10b981',
      items: [
        'Docker', 'Kubernetes', 'MLflow', 'Kubeflow',
        'CI/CD Pipelines', 'FastAPI', 'Flask', 'REST APIs',
        'Git', 'GitHub', 'Jenkins',
      ],
    },
    {
      category: 'Languages & Visualization',
      icon: '💻',
      color: '#ef4444',
      items: [
        'Python', 'SQL', 'C++', 'R', 'Java',
        'PostgreSQL', 'MongoDB', 'Redis',
        'Tableau', 'Power BI', 'Matplotlib', 'Seaborn',
      ],
    },
  ]

  return (
    <section id="skills" style={{
      padding: '100px 40px',
      background: '#fff',
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{
          fontSize: 13,
          fontWeight: 700,
          textTransform: 'uppercase',
          letterSpacing: '2.5px',
          color: '#6366f1',
          marginBottom: 12,
        }}>
          Expertise
        </div>
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 44px)',
          fontWeight: 800,
          letterSpacing: '-1.5px',
          color: '#0a0a1a',
          marginBottom: 16,
          lineHeight: 1.15,
        }}>
          Skills & Technologies
        </h2>
        <p style={{
          fontSize: 17,
          color: '#666',
          lineHeight: 1.7,
          maxWidth: 600,
          marginBottom: 48,
        }}>
          From training neural networks to deploying them at scale in production environments.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: 24,
        }}>
          {skills.map(function(skill, index) {
            return (
              <div key={index} style={{
                padding: 32,
                borderRadius: 20,
                background: '#fafafa',
                border: '1px solid #eee',
                position: 'relative',
                overflow: 'hidden',
              }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: skill.color,
                }} />
                <div style={{ fontSize: 28, marginBottom: 16 }}>
                  {skill.icon}
                </div>
                <div style={{
                  fontSize: 18,
                  fontWeight: 700,
                  marginBottom: 16,
                  color: '#0a0a1a',
                }}>
                  {skill.category}
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 8,
                }}>
                  {skill.items.map(function(item, j) {
                    return (
                      <span key={j} style={{
                        padding: '5px 12px',
                        borderRadius: 8,
                        fontSize: 12.5,
                        fontWeight: 600,
                        background: skill.color + '15',
                        color: skill.color,
                      }}>
                        {item}
                      </span>
                    )
                  })}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Skills