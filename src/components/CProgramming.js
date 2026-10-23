import React from "react";

import { useTranslation } from "react-i18next";

export default function CProgramming() {
  const { t } = useTranslation("common");
  return (
    <section id="cprogramming">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>{t('CProgTitle')}</h1>
          <div
            id="portfolio-wrapper"
            className="bgrid-quarters s-bgrid-thirds cf"
          >
            <h3 className="responsive-headline">
              <p>
                <a href={"https://github.com/DerouineauNicolas/Hellqualizer"}>
                  Hellqualizer
                </a>{" "}
                : {t('Hellqualizer')}
              </p>
              <p>
                <a href={"https://github.com/DerouineauNicolas/SpectralDrawer"}>
                  SpectralDrawer
                </a>{" "}
                : {t('SpectralDrawer')}
              </p>
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
