import React, { Component } from "react";
import { useTranslation } from "react-i18next";

export default function WebExperiment() {
  const { t } = useTranslation("common");
  return (
    <section id="web">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>{t('WebProgTitle')}</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <h3 className="responsive-headline">
              <p>{t('WebIntro')}</p>
              <p>
                <a href="https://github.com/Web-Multi-Media/HttpStreamingServer">
                  Http Streaming server
                </a> : {t('Netflix')}
              </p>
              <p>
                <a href="https://github.com/Web-Multi-Media/multi-web-audio-sequencer">
                  Multi-web-audio-sequencer
                </a> : {t('CollaborativeSequencer')} <a href="https://labs.freesound.org/sequencer">https://labs.freesound.org/sequencer</a>.
              </p>

            </h3>
          </div>
        </div>
      </div>
    </section>
  );

}
