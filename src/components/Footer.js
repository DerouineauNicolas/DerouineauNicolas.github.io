import React from 'react';

export default function Footer({ resumeData }) {
  return (
    <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            {resumeData && resumeData.socialLinks && resumeData.socialLinks.map((item, idx) => (
              <li key={idx}>
                <a href={item.url} target="_blank" rel="noopener noreferrer" aria-label={item.name}>
                  <i className={item.className} />
                </a>
              </li>
            ))}
          </ul>

          <ul className="copyright">
            <li>&copy; {new Date().getFullYear()} Nicolas DEROUINEAU. All rights reserved.</li>
          </ul>
        </div>
        <div id="go-top">
          <a className="smoothscroll" title="Back to Top" href="#home">
            <i className="icon-up-open" />
          </a>
        </div>
      </div>
    </footer>
  );
}
