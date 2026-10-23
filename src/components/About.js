import React from 'react';
import { useTranslation } from "react-i18next";

export default function About({ resumeData }) {
  const { t } = useTranslation("common");

  return (
    <section id="about">
      <div className="row">
        <div className="twelve columns">
          <div style={{ marginBottom: "28px" }}>
            <h1 className="section-main-title" style={{ textAlign: "left" }}>
              {t('aboutTitle')}
            </h1>
          </div>

          <p className="about-bio-text">
            {t('aboutBio1')}
          </p>

          <p className="about-bio-text">
            {t('aboutBio2')}
          </p>

          <div className="about-contact-box">
            <h3 style={{ color: "#ffffff", fontSize: "14px", fontWeight: "700", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "16px" }}>
              {t('contactDetailsTitle')}
            </h3>

            <div className="about-contact-grid">
              <div className="about-contact-item">
                <strong>{t('locationLabel')}</strong>
                <span>{t('locationVal')}</span>
              </div>

              <div className="about-contact-item">
                <strong>{t('emailLabel')}</strong>
                <a href={`mailto:${resumeData.email || 'nicodero72@gmail.com'}`}>
                  {resumeData.email || 'nicodero72@gmail.com'}
                </a>
              </div>

              <div className="about-contact-item">
                <strong>{t('statusLabel')}</strong>
                <span style={{ color: "#cbd5e1" }}>{t('statusVal')}</span>
              </div>

              <div className="about-contact-item">
                <strong>Links:</strong>
                <div style={{ display: "flex", gap: "16px", marginTop: "4px" }}>
                  <a href={resumeData.linkedinId} target="_blank" rel="noopener noreferrer" style={{ color: "#cbd5e1" }}>
                    <i className="fa fa-linkedin"></i> LinkedIn
                  </a>
                  <a href="https://github.com/DerouineauNicolas" target="_blank" rel="noopener noreferrer" style={{ color: "#cbd5e1" }}>
                    <i className="fa fa-github"></i> GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
