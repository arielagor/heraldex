import { MessageSquare, Twitter, Github } from "lucide-react";

const productLinks = [
  { label: "Design Editor", href: "/editor" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Merch", href: "#" },
  { label: "API", href: "#" },
];

const companyLinks = [
  { label: "About", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact", href: "#" },
];

const legalLinks = [
  { label: "Terms", href: "#" },
  { label: "Privacy", href: "#" },
  { label: "IP Policy", href: "#" },
];

const socialLinks = [
  { icon: MessageSquare, label: "Discord", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-sable-900 border-t border-sable-800" role="contentinfo">
      <div className="container-main py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg
                width="20"
                height="24"
                viewBox="0 0 280 336"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-accent-500"
                aria-hidden="true"
              >
                <path
                  d="M140 4 L268 50 Q272 52 272 56 L272 170 Q272 220 240 262 Q208 304 144 332 Q142 333 140 333 Q138 333 136 332 Q72 304 40 262 Q8 220 8 170 L8 56 Q8 52 12 50 Z"
                  fill="currentColor"
                />
              </svg>
              <span className="font-cinzel font-semibold text-sable-50 text-lg tracking-wide">
                HERALDEX
              </span>
            </div>
            <p className="text-caption text-sable-500 leading-relaxed">
              Digital Heraldry. Blockchain Identity. Protected Commerce.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="text-caption font-semibold text-sable-50 uppercase tracking-wider mb-4 font-inter">
              Product
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body text-sable-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-caption font-semibold text-sable-50 uppercase tracking-wider mb-4 font-inter">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body text-sable-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-caption font-semibold text-sable-50 uppercase tracking-wider mb-4 font-inter">
              Legal
            </h4>
            <ul className="space-y-2.5">
              {legalLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-body text-sable-400 hover:text-primary-400 transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-sable-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-sable-500">
            &copy; 2026 Heraldex Inc. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                aria-label={social.label}
                className="text-sable-500 hover:text-accent-500 transition-colors"
              >
                <social.icon size={18} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
