import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Mail, MessageSquare, Twitter, Github } from "lucide-react";

export const metadata: Metadata = {
  title: "Contact — Heraldex",
  description: "Get in touch with the Heraldex team. Reach us via email, Discord, or social media.",
};

const channels = [
  {
    icon: Mail,
    title: "General Inquiries",
    description: "Questions about the platform, partnerships, or press.",
    link: "mailto:hello@heraladex.com",
    label: "hello@heraladex.com",
  },
  {
    icon: Mail,
    title: "Support",
    description: "Technical issues, account help, or billing questions.",
    link: "mailto:support@heraladex.com",
    label: "support@heraladex.com",
  },
  {
    icon: Mail,
    title: "Legal & IP",
    description: "Infringement reports, dispute resolution, or legal questions.",
    link: "mailto:legal@heraladex.com",
    label: "legal@heraladex.com",
  },
  {
    icon: MessageSquare,
    title: "Discord",
    description: "Join the community for real-time help and feature discussions.",
    link: "#",
    label: "Join our Discord",
  },
  {
    icon: Twitter,
    title: "Twitter / X",
    description: "Follow us for announcements, tips, and community highlights.",
    link: "#",
    label: "@heraldex",
  },
  {
    icon: Github,
    title: "GitHub",
    description: "Report bugs, request features, or contribute to open-source tooling.",
    link: "#",
    label: "heraldex",
  },
];

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main id="main" className="min-h-screen bg-sable-950 pt-28 pb-20">
        <div className="container-main max-w-3xl">
          <h1 className="text-h1 md:text-display font-cinzel font-bold text-sable-50 mb-3">Contact</h1>
          <p className="text-body-lg text-sable-400 mb-12">
            Reach out through any of the channels below. We typically respond within one business day.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {channels.map((ch) => (
              <a
                key={ch.title}
                href={ch.link}
                className="group rounded-card border border-sable-700 bg-sable-800 p-6 hover:border-sable-600 transition-colors block"
              >
                <div className="flex items-center gap-3 mb-2">
                  <ch.icon size={20} className="text-primary-400 flex-shrink-0" />
                  <h2 className="text-sable-50 font-semibold">{ch.title}</h2>
                </div>
                <p className="text-sm text-sable-400 mb-3">{ch.description}</p>
                <span className="text-sm text-primary-400 group-hover:text-primary-300 transition-colors">
                  {ch.label}
                </span>
              </a>
            ))}
          </div>

          {/* Office */}
          <section className="mt-14">
            <h2 className="text-h3 font-cinzel font-semibold text-sable-50 mb-4">Mailing Address</h2>
            <address className="not-italic text-body text-sable-400 leading-relaxed">
              Heraldex Inc.<br />
              251 Little Falls Drive<br />
              Wilmington, DE 19808<br />
              United States
            </address>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
