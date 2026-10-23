import React from "react";
import { useTranslation } from "react-i18next";

export default function Streaming() {
  const { t } = useTranslation("common");

  return (
    <section id="streaming">
      <div className="row">
        <div className="twelve columns">
          <div className="section-header-wrap">
            <h1 className="section-main-title">{t('labTitle')}</h1>
            <p className="section-subtitle">{t('labSubtitle')}</p>
          </div>

          <div className="lab-grid">
            <div className="lab-card">
              <div>
                <div className="lab-icon">
                  <i className="fa fa-television"></i>
                </div>
                <h3 className="lab-card-title">{t('labStreamingTitle')}</h3>
                <p className="lab-card-desc">{t('labStreamingDesc')}</p>
              </div>
              <div style={{ marginTop: "auto", paddingTop: "14px" }}>
                <a
                  href="/streaming_tips.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card btn-card-primary"
                >
                  <i className="fa fa-book"></i> {t('readGuide')}
                </a>
              </div>
            </div>

            <div className="lab-card">
              <div>
                <div className="lab-icon">
                  <i className="fa fa-magic"></i>
                </div>
                <h3 className="lab-card-title">{t('labWebglTitle')}</h3>
                <p className="lab-card-desc">{t('labWebglDesc')}</p>
              </div>
              <div style={{ marginTop: "auto", paddingTop: "14px" }}>
                <a
                  href="/demo/gaussianblur/gaussian_blur.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-card btn-card-primary"
                >
                  <i className="fa fa-play"></i> {t('viewInteractiveDemo')}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
