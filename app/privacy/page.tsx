import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Atelier Print Archive Seller Tools.",
};

export default function PrivacyPolicy() {
  return (
    <main className="legal-page">
      <header className="site-header">
        <Link className="wordmark" href="/">
          <span className="monogram" aria-hidden="true">APA</span>
          <span>Atelier Print Archive</span>
        </Link>
        <nav aria-label="Legal and policy navigation">
          <Link aria-current="page" href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
        </nav>
      </header>

      <article className="legal-article">
        <div className="legal-intro">
          <p className="eyebrow">Effective September 1, 2026</p>
          <h1>Privacy Policy</h1>
          <p>
            This policy explains how Atelier Print Archive Seller Tools handles
            information when connected to the Atelier Print Archive Etsy shop.
            The application is private and is used only by the shop owner.
          </p>
        </div>

        <div className="legal-sections">
          <section>
            <h2>Information the application accesses</h2>
            <p>
              With the shop owner’s authorization, the application may access
              shop profile details, listing data, sections, taxonomy and
              inventory information needed to create or manage listings. It may
              also transmit listing images and digital product files selected
              by the owner. Etsy account credentials are not collected.
            </p>
          </section>
          <section>
            <h2>How information is used</h2>
            <p>
              Information is used solely to authenticate with Etsy, prepare and
              manage the owner’s listings, upload owner-selected content,
              validate publishing packages, and diagnose operational errors.
              The application does not use Etsy data for advertising or user
              profiling.
            </p>
          </section>
          <section>
            <h2>Storage and security</h2>
            <p>
              OAuth tokens and application credentials are kept in restricted
              configuration storage and are not placed in public source code.
              Listing package data and operational logs are retained only as
              reasonably needed to operate, secure, and troubleshoot the
              application. No method of electronic storage is completely
              secure, but access is limited to the shop owner and authorized
              service infrastructure.
            </p>
          </section>
          <section>
            <h2>Sharing and sale of information</h2>
            <p>
              Etsy data is not sold, rented, licensed, or shared with data
              brokers, advertisers, or unrelated third parties. Information is
              transmitted to Etsy as necessary to perform owner-requested shop
              actions and may be processed by infrastructure providers used to
              operate the private application.
            </p>
          </section>
          <section>
            <h2>Third-party services</h2>
            <p>
              Use of Etsy is also governed by Etsy’s own terms and privacy
              practices. This application is independently operated by Atelier
              Print Archive and is not endorsed by or affiliated with Etsy,
              Inc.
            </p>
          </section>
          <section>
            <h2>Access, deletion, and revocation</h2>
            <p>
              The shop owner may revoke the application’s Etsy authorization at
              any time through Etsy account settings. Requests about retained
              application data or deletion may be submitted through the Etsy
              shop associated with this application.
            </p>
          </section>
          <section>
            <h2>Policy changes</h2>
            <p>
              This policy may be updated when the application’s practices or
              legal requirements change. The effective date above will be
              revised when material updates are published.
            </p>
          </section>
          <section>
            <h2>Contact</h2>
            <p>
              Privacy questions may be sent to the owner through the Atelier
              Print Archive Etsy shop.
            </p>
          </section>
        </div>
      </article>
      <footer>
        <Link href="/">← Application overview</Link>
        <Link href="/terms/">Terms of Use</Link>
      </footer>
    </main>
  );
}
