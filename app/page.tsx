import Link from "next/link";

const safeguards = [
  "Operates only on the owner’s Etsy shop",
  "Creates draft listings for review by default",
  "Does not offer services to other Etsy sellers",
  "Does not sell or share Etsy account data",
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <Link className="wordmark" href="/" aria-label="Atelier Print Archive home">
          <span className="monogram" aria-hidden="true">APA</span>
          <span>Atelier Print Archive</span>
        </Link>
        <nav aria-label="Legal and policy navigation">
          <Link href="/privacy/">Privacy</Link>
          <Link href="/terms/">Terms</Link>
        </nav>
      </header>

      <section className="hero" aria-labelledby="page-title">
        <div className="hero-copy">
          <p className="eyebrow">Private seller application</p>
          <h1 id="page-title">A careful publishing tool for one Etsy shop.</h1>
          <p className="lede">
            Atelier Print Archive Seller Tools is an internal application used
            to prepare and manage digital product listings for the Atelier
            Print Archive Etsy shop.
          </p>
        </div>
        <aside className="app-card" aria-label="Application status">
          <p className="card-kicker">Application profile</p>
          <dl>
            <div><dt>Access</dt><dd>Private / single shop</dd></div>
            <div><dt>Purpose</dt><dd>Listing management</dd></div>
            <div><dt>Publication</dt><dd>Owner controlled</dd></div>
          </dl>
        </aside>
      </section>

      <section className="content-grid" aria-labelledby="what-it-does">
        <div>
          <p className="section-number">01</p>
          <h2 id="what-it-does">What the application does</h2>
        </div>
        <div className="body-copy">
          <p>
            The application streamlines the creation and maintenance of
            digital product listings. It may create drafts; upload listing
            images and downloadable files; and update titles, descriptions,
            tags, pricing, categories, sections, and inventory information.
          </p>
          <p>
            It is not a marketplace, public integration, or service offered to
            third-party sellers. The shop owner retains control over the app’s
            Etsy authorization and final publication decisions.
          </p>
        </div>
      </section>

      <section className="safeguards" aria-labelledby="safeguards-title">
        <div>
          <p className="section-number light">02</p>
          <h2 id="safeguards-title">Built with narrow permissions</h2>
        </div>
        <ul>
          {safeguards.map((item) => <li key={item}>{item}</li>)}
        </ul>
      </section>

      <section className="policy-links" aria-labelledby="policies-title">
        <div>
          <p className="section-number">03</p>
          <h2 id="policies-title">Policies</h2>
        </div>
        <div className="policy-cards">
          <Link href="/privacy/">
            <span>Privacy Policy</span>
            <span aria-hidden="true">Read →</span>
          </Link>
          <Link href="/terms/">
            <span>Terms of Use</span>
            <span aria-hidden="true">Read →</span>
          </Link>
        </div>
      </section>

      <footer>
        <span>© 2026 Atelier Print Archive</span>
        <span>Private Etsy seller application</span>
      </footer>
    </main>
  );
}
