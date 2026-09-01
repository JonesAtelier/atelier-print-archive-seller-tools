import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: "Terms of Use for Atelier Print Archive Seller Tools.",
};

export default function TermsOfUse() {
  return (
    <main className="legal-page">
      <header className="site-header">
        <Link className="wordmark" href="/">
          <span className="monogram" aria-hidden="true">APA</span>
          <span>Atelier Print Archive</span>
        </Link>
        <nav aria-label="Legal and policy navigation">
          <Link href="/privacy/">Privacy</Link>
          <Link aria-current="page" href="/terms/">Terms</Link>
        </nav>
      </header>

      <article className="legal-article">
        <div className="legal-intro">
          <p className="eyebrow">Effective September 1, 2026</p>
          <h1>Terms of Use</h1>
          <p>
            These terms apply to Atelier Print Archive Seller Tools, a private
            application used solely by its owner to manage the Atelier Print
            Archive Etsy shop.
          </p>
        </div>

        <div className="legal-sections">
          <section>
            <h2>Permitted use</h2>
            <p>
              The application is not offered as a public service. It may be used
              only by its owner for authorized management of the owner’s Etsy
              shop, including preparing, reviewing, uploading, updating, and
              publishing listing content.
            </p>
          </section>
          <section>
            <h2>Owner responsibility</h2>
            <p>
              The shop owner is responsible for reviewing listing content,
              maintaining rights to uploaded materials, complying with Etsy’s
              policies and applicable law, safeguarding access credentials, and
              confirming actions before publication.
            </p>
          </section>
          <section>
            <h2>No affiliation</h2>
            <p>
              Etsy is a trademark of Etsy, Inc. Atelier Print Archive Seller
              Tools is independently operated and is not sponsored, endorsed,
              or provided by Etsy, Inc.
            </p>
          </section>
          <section>
            <h2>Availability</h2>
            <p>
              The application may be changed, suspended, or discontinued at any
              time. Its operation may depend on Etsy’s API and other third-party
              services, which may change or become unavailable without notice.
            </p>
          </section>
          <section>
            <h2>Disclaimer</h2>
            <p>
              The application is provided on an “as available” basis without
              warranties of uninterrupted operation or error-free results. The
              owner remains responsible for reviewing all shop changes.
            </p>
          </section>
          <section>
            <h2>Changes to these terms</h2>
            <p>
              These terms may be updated to reflect changes in the application
              or applicable requirements. The effective date above will be
              revised when changes are published.
            </p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>
              Questions may be sent to the owner through the Atelier Print
              Archive Etsy shop.
            </p>
          </section>
        </div>
      </article>
      <footer>
        <Link href="/">← Application overview</Link>
        <Link href="/privacy/">Privacy Policy</Link>
      </footer>
    </main>
  );
}
