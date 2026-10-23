import React from 'react';
import { useTranslation } from "react-i18next";

export default function ContactUs({ resumeData }) {
  const { t } = useTranslation("common");

  return (
    <section id="contact">
      <div className="row">
        <div className="twelve columns">
          <div className="section-header-wrap">
            <h1 className="section-main-title">{t('contactTitle')}</h1>
            <p className="section-subtitle">{t('contactLead')}</p>
          </div>

          <div className="contact-cards-grid">
            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa fa-envelope"></i>
              </div>
              <h3 className="contact-card-title">{t('emailContactTitle')}</h3>
              <p className="contact-card-value">{resumeData.email || 'nicodero72@gmail.com'}</p>
              <a
                href={`mailto:${resumeData.email || 'nicodero72@gmail.com'}`}
                className="contact-card-btn"
              >
                <i className="fa fa-paper-plane"></i> {t('sendEmailBtn')}
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa fa-linkedin"></i>
              </div>
              <h3 className="contact-card-title">{t('linkedinContactTitle')}</h3>
              <p className="contact-card-value">Nicolas DEROUINEAU</p>
              <a
                href={resumeData.linkedinId}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-btn"
              >
                <i className="fa fa-external-link"></i> {t('linkedinBtn')}
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa fa-github"></i>
              </div>
              <h3 className="contact-card-title">{t('githubContactTitle')}</h3>
              <p className="contact-card-value">DerouineauNicolas</p>
              <a
                href="https://github.com/DerouineauNicolas"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-card-btn"
              >
                <i className="fa fa-external-link"></i> {t('githubBtn')}
              </a>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <i className="fa fa-map-marker"></i>
              </div>
              <h3 className="contact-card-title">{t('locationContactTitle')}</h3>
              <p className="contact-card-value">{t('locationContactDesc')}</p>
              <span style={{ display: "inline-block", color: "#cbd5e1", fontSize: "13px", fontWeight: "500" }}>
                <span className="status-indicator" style={{ display: "inline-block", verticalAlign: "middle" }}></span>
                {t('availabilityContactDesc')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
