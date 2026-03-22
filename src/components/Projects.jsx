import { useState } from 'react'

function Projects() {
  var allProjects = [
    {
      title: 'LLM-Powered Research Assistant',
      desc: 'Built a RAG-based application using LangChain, FAISS, and Pinecone that enables analysts to query internal documents using natural language. Reduced research time by 40% at JPMorgan Chase.',
      tags: ['LangChain', 'FAISS', 'Pinecone', 'RAG', 'Hugging Face'],
      category: 'Generative AI',
      color: '#8b5cf6',
    },
    {
      title: 'Risk Analytics ML Pipeline',
      desc: 'End-to-end ML pipeline for customer risk scoring using XGBoost and PyTorch. Optimized feature engineering and batching to improve inference latency by 35%.',
      tags: ['PyTorch', 'XGBoost', 'Scikit-learn', 'AWS SageMaker'],
      category: 'Machine Learning',
      color: '#6366f1',
    },
    {
      title: 'Document Intelligence System',
      desc: 'NLP system using BERT-based models for automated extraction and validation of financial documents. Improved accuracy and consistency of document processing.',
      tags: ['BERT', 'NLP', 'Text Classification', 'FastAPI'],
      category: 'NLP',
      color: '#06b6d4',
    },
    {
      title: 'Real-Time Data Processing Engine',
      desc: 'Scalable data pipelines with Apache Spark and Kafka handling terabyte-scale transactional data. Improved training data freshness for downstream ML models.',
      tags: ['Apache Spark', 'Kafka', 'Hadoop', 'AWS'],
      category: 'Data Engineering',
      color: '#f59e0b',
    },
    {
      title: 'CNN Image Classification System',
      desc: 'Deep learning solution using TensorFlow CNNs for multi-class image classification. Achieved 20% accuracy improvement over baseline models.',
      tags: ['TensorFlow', 'CNNs', 'OpenCV', 'Python'],
      category: 'Computer Vision',
      color: '#10b981',
    },
    {
      title: 'AI Portfolio (This Site)',
      desc: 'Interactive portfolio with 3D neural network visualization built with Three.js and an AI chatbot powered by Claude. The portfolio itself is a demonstration of full-stack skills.',
      tags: ['React', 'Three.js', 'Claude API', 'Vite'],
      category: 'Full Stack',
      color: '#ef4444',
    },
  ]

  var categories = ['All']
  allProjects.forEach(function(p) {
    if (categories.indexOf(p.category) === -1) {
      categories.push(p.category)
    }
  })

  var [activeFilter, setActiveFilter] = useState('All')

  var filtered = activeFilter === 'All'
    ? allProjects
    : allProjects.filter(function(p) { return p.category === activeFilter })

  return (
    <section id="projects" style={{
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
          Work
        </div>
        <h2 style={{
          fontSize: 'clamp(32px, 4vw, 44px)',
          fontWeight: 800,
          letterSpacing: '-1.5px',
          color: '#0a0a1a',
          marginBottom: 16,
          lineHeight: 1.15,
        }}>
          Featured Projects
        </h2>
        <p style={{
          fontSize: 17,
          color: '#666',
          lineHeight: 1.7,
          maxWidth: 600,
          marginBottom: 48,
        }}>
          Real-world projects showcasing depth across AI, NLP, data engineering, and full-stack development.
        </p>

        <div style={{
          display: 'flex',
          gap: 10,
          marginBottom: 36,
          flexWrap: 'wrap',
        }}>
          {categories.map(function(cat) {
            var isActive = activeFilter === cat
            return (
              <button key={cat} onClick={function() { setActiveFilter(cat) }} style={{
                padding: '8px 20px',
                borderRadius: 10,
                border: 'none',
                background: isActive ? '#1a1a2e' : '#f0f0f4',
                color: isActive ? '#fff' : '#666',
                fontSize: 13,
                fontWeight: 600,
                cursor: 'pointer',
              }}>
                {cat}
              </button>
            )
          })}
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(330px, 1fr))',
          gap: 22,
        }}>
          {filtered.map(function(project, index) {
            return (
              <div key={index} style={{
                padding: 28,
                borderRadius: 18,
                background: '#fafafa',
                border: '1px solid #eee',
              }}>
                <div style={{
                  fontSize: 11,
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  letterSpacing: '1.5px',
                  color: project.color,
                  marginBottom: 10,
                }}>
                  {project.category}
                </div>
                <div style={{
                  fontSize: 19,
                  fontWeight: 700,
                  color: '#0a0a1a',
                  marginBottom: 10,
                }}>
                  {project.title}
                </div>
                <div style={{
                  fontSize: 14,
                  color: '#666',
                  lineHeight: 1.65,
                  marginBottom: 16,
                }}>
                  {project.desc}
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: 6,
                }}>
                  {project.tags.map(function(tag, j) {
                    return (
                      <span key={j} style={{
                        padding: '4px 10px',
                        borderRadius: 6,
                        fontSize: 11.5,
                        fontWeight: 600,
                        background: '#eee',
                        color: '#555',
                      }}>
                        {tag}
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

export default Projects