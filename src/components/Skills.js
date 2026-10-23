import React from 'react';
import { useTranslation } from "react-i18next";

export default function Skills({ resumeData }) {
  const { t } = useTranslation("common");

  const skillCategories = [
    {
      title: t('catSystemsTitle'),
      icon: "fa-microchip",
      skills: resumeData.skills.systems
    },
    {
      title: t('catStreamingTitle'),
      icon: "fa-play-circle",
      skills: resumeData.skills.streaming
    },
    {
      title: t('catWebTitle'),
      icon: "fa-code",
      skills: resumeData.skills.web
    },
    {
      title: t('catDevopsTitle'),
      icon: "fa-server",
      skills: resumeData.skills.devops
    }
  ];

  return (
    <section id="skills">
      <div className="row">
        <div className="twelve columns">
          <div className="section-header-wrap">
            <h1 className="section-main-title">{t('skillsTitle')}</h1>
            <p className="section-subtitle">{t('skillsSubtitle')}</p>
          </div>

          <div className="skills-container">
            {skillCategories.map((cat, idx) => (
              <div key={idx} className="skill-card">
                <div className="skill-card-header">
                  <div className="skill-icon-box">
                    <i className={`fa ${cat.icon}`}></i>
                  </div>
                  <h3 className="skill-card-title">{cat.title}</h3>
                </div>

                <div className="skill-chips">
                  {cat.skills.map((skill, sIdx) => (
                    <span key={sIdx} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

