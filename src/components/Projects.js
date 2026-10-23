import React from 'react';
import { useTranslation } from "react-i18next";

export default function Projects() {
  const { t } = useTranslation("common");

  const projects = [
    {
      category: t('cprogProject1Category'),
      title: t('cprogProject1Title'),
      desc: t('cprogProject1Desc'),
      highlights: [
        t('cprogProject1H1'),
        t('cprogProject1H2'),
        t('cprogProject1H3')
      ],
      tags: ["C++", "pthreads", "FFmpeg C API", "Linux ALSA", "Audio DSP", "FIR Filter Bank"],
      githubUrl: "https://github.com/DerouineauNicolas/Hellqualizer",
      demoUrl: null
    },
    {
      category: t('webProject1Category'),
      title: t('webProject1Title'),
      desc: t('webProject1Desc'),
      highlights: [
        t('webProject1H1'),
        t('webProject1H2'),
        t('webProject1H3')
      ],
      tags: ["Python", "Django REST", "React", "MPEG-DASH", "Docker", "FFmpeg", "Microservices"],
      githubUrl: "https://github.com/Web-Multi-Media/HttpStreamingServer",
      demoUrl: null
    },
    {
      category: t('webProject2Category'),
      title: t('webProject2Title'),
      desc: t('webProject2Desc'),
      highlights: [
        t('webProject2H1'),
        t('webProject2H2'),
        t('webProject2H3')
      ],
      tags: ["Node.js", "Express", "Socket.io", "Web Audio API", "WebSockets", "Freesound API"],
      githubUrl: "https://github.com/Web-Multi-Media/multi-web-audio-sequencer",
      demoUrl: "https://labs.freesound.org/sequencer"
    },
    {
      category: t('cprogProject2Category'),
      title: t('cprogProject2Title'),
      desc: t('cprogProject2Desc'),
      highlights: [
        t('cprogProject2H1'),
        t('cprogProject2H2'),
        t('cprogProject2H3')
      ],
      tags: ["Kotlin", "Android SDK", "AudioRecord API", "FFT Algorithm", "Digital Signal Processing"],
      githubUrl: "https://github.com/DerouineauNicolas/SpectralDrawer",
      demoUrl: null
    }
  ];

  return (
    <section id="projects">
      <div className="row">
        <div className="twelve columns">
          <div className="section-header-wrap">
            <h1 className="section-main-title">{t('projectsTitle')}</h1>
            <p className="section-subtitle">{t('projectsSubtitle')}</p>
          </div>

          <div className="projects-grid">
            {projects.map((proj, idx) => (
              <div key={idx} className="project-card">
                <div>
                  <div className="project-header">
                    <span className="project-category-tag">{proj.category}</span>
                    <h3 className="project-title">{proj.title}</h3>
                  </div>

                  <p className="project-desc">{proj.desc}</p>

                  <div className="project-highlights-box">
                    <div className="highlights-title">{t('keyHighlights')}</div>
                    <ul className="highlights-list">
                      {proj.highlights.map((h, hIdx) => (
                        <li key={hIdx}>{h}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="project-tech-badges">
                    {proj.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="tech-badge">{tag}</span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  {proj.githubUrl && (
                    <a
                      href={proj.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-card btn-card-primary"
                    >
                      <i className="fa fa-github"></i> {t('sourceCode')}
                    </a>
                  )}
                  {proj.demoUrl && (
                    <a
                      href={proj.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-card btn-card-outline"
                    >
                      <i className="fa fa-external-link"></i> {t('liveDemo')}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

