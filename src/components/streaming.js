import React from "react";
import { useTranslation } from "react-i18next";

export default function Streaming() {
  const { t } = useTranslation("common");

    return (
      <section id="streaming">
        <div className="row">
          <div className="twelve columns collapsed">
            <h1>Streaming</h1>
            <div
              id="portfolio-wrapper"
              className="bgrid-quarters s-bgrid-thirds cf"
            >
              <h3 className="responsive-headline">
                <p>
                  <a href="https://the.ndero.ovh/radio/mpd.ogg">Web radio : </a>{t('radio')}
                </p>
                <p>
                  <a href="/streaming_tips.html">Mpeg dash live streaming : </a> {t('streamingTips')}
                </p>
              </h3>
            </div>
          </div>
        </div>
      </section>
    );
}
