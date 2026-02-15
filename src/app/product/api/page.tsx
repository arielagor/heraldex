import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "API — Heraldex",
  description: "Integrate Heraldex blazon data, verification, and rendering into your own applications with the Heraldex REST API.",
};

const endpoints = [
  {
    method: "GET",
    path: "/v1/blazons/{id}",
    description: "Retrieve a registered blazon by ID, including design data, registration timestamp, and ownership info.",
  },
  {
    method: "GET",
    path: "/v1/blazons/{id}/render",
    description: "Render a blazon as SVG or PNG in a specified style (Traditional, Modern, Minimal, Pixel Art).",
  },
  {
    method: "POST",
    path: "/v1/blazons/verify",
    description: "Verify a blazon's on-chain registration status and return chain-of-custody metadata.",
  },
  {
    method: "GET",
    path: "/v1/blazons/{id}/cadency",
    description: "List all cadency variants and member tiers associated with a registered blazon.",
  },
  {
    method: "POST",
    path: "/v1/blazons/search",
    description: "Search registered blazons by tincture, ordinary, charge, or visual similarity.",
  },
  {
    method: "GET",
    path: "/v1/merch/{blazon_id}/products",
    description: "List available merchandise for a registered blazon's storefront.",
  },
];

const methodColors: Record<string, string> = {
  GET: "bg-primary-500/20 text-primary-400",
  POST: "bg-accent-500/20 text-accent-400",
  PUT: "bg-yellow-500/20 text-yellow-400",
  DELETE: "bg-red-500/20 text-red-400",
};

export default function APIPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-sable-950 pt-28 pb-20">
        <div className="container-main max-w-4xl">
          <h1 className="text-h1 md:text-display font-cinzel font-bold text-sable-50 mb-3">Heraldex API</h1>
          <p className="text-body-lg text-sable-400 mb-12">
            Integrate blazon verification, rendering, and ownership data into your own applications.
            Available on Sovereign and Legacy plans.
          </p>

          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-4">Overview</h2>
            <div className="rounded-card border border-sable-700 bg-sable-800 p-6 space-y-4 text-body text-sable-300 leading-relaxed">
              <p>
                The Heraldex REST API provides programmatic access to blazon data, on-chain verification,
                image rendering, and merchandise listings. All endpoints return JSON and require an API key
                passed via the <code className="font-jetbrains text-sm bg-sable-700 px-1.5 py-0.5 rounded">Authorization</code> header.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div>
                  <h3 className="text-sable-100 font-semibold text-sm mb-1">Base URL</h3>
                  <code className="font-jetbrains text-sm text-primary-400">https://api.heraladex.com</code>
                </div>
                <div>
                  <h3 className="text-sable-100 font-semibold text-sm mb-1">Authentication</h3>
                  <code className="font-jetbrains text-sm text-primary-400">Bearer &lt;api_key&gt;</code>
                </div>
                <div>
                  <h3 className="text-sable-100 font-semibold text-sm mb-1">Rate Limits</h3>
                  <span className="text-sm text-sable-400">1,000 req/min (Sovereign)<br />Unlimited (Legacy)</span>
                </div>
              </div>
            </div>
          </section>

          {/* Endpoints */}
          <section className="mb-12">
            <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-5">Endpoints</h2>
            <div className="space-y-3">
              {endpoints.map((ep) => (
                <div
                  key={ep.path}
                  className="rounded-card border border-sable-700 bg-sable-800 p-5 flex flex-col sm:flex-row gap-3"
                >
                  <div className="flex items-start gap-3 sm:w-72 flex-shrink-0">
                    <span className={`text-xs font-semibold font-jetbrains px-2 py-0.5 rounded ${methodColors[ep.method]}`}>
                      {ep.method}
                    </span>
                    <code className="font-jetbrains text-sm text-sable-200 break-all">{ep.path}</code>
                  </div>
                  <p className="text-sm text-sable-400 flex-1">{ep.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Code example */}
          <section className="mb-12">
            <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-5">Quick Start</h2>
            <div className="rounded-card border border-sable-700 bg-sable-900 p-5 overflow-x-auto">
              <pre className="font-jetbrains text-sm text-sable-300 leading-relaxed whitespace-pre">
{`curl -H "Authorization: Bearer YOUR_API_KEY" \\
     https://api.heraladex.com/v1/blazons/bz_abc123

{
  "id": "bz_abc123",
  "owner": "org_xyz",
  "registered_at": "2026-02-15T12:00:00Z",
  "chain_tx": "0x9f3a...b2c1",
  "blazon_text": "Azure, a Chevron Or, three Mullets Or.",
  "design": {
    "shield_shape": "heater",
    "field_tincture": "Azure",
    "ordinary": "chevron",
    "ordinary_tincture": "Or",
    "charge": "mullet",
    "charge_tincture": "Or",
    "charge_count": 3
  }
}`}
              </pre>
            </div>
          </section>

          {/* SDKs */}
          <section className="mb-12">
            <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-4">SDKs &amp; Libraries</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { lang: "JavaScript / TypeScript", pkg: "npm install @heraldex/sdk", status: "Available" },
                { lang: "Python", pkg: "pip install heraldex", status: "Coming Soon" },
                { lang: "Go", pkg: "go get heraldex.com/sdk", status: "Coming Soon" },
              ].map((sdk) => (
                <div key={sdk.lang} className="rounded-card border border-sable-700 bg-sable-800 p-5">
                  <h3 className="text-sable-100 font-semibold text-sm mb-1">{sdk.lang}</h3>
                  <code className="font-jetbrains text-xs text-primary-400">{sdk.pkg}</code>
                  <p className="text-xs text-sable-500 mt-2">{sdk.status}</p>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="rounded-card border border-sable-700 bg-sable-800 p-8 text-center">
            <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-3">Get API Access</h2>
            <p className="text-body text-sable-400 mb-5 max-w-lg mx-auto">
              The Heraldex API is available on Sovereign ($2,499/yr) and Legacy plans. Custom
              integrations and higher rate limits are available for Legacy subscribers.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button variant="primary" size="lg" href="/#pricing">
                View Plans
              </Button>
              <Button variant="secondary" size="lg" href="/company/contact">
                Contact Sales
              </Button>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
