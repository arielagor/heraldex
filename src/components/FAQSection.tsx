"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

const faqs = [
  {
    q: 'What exactly is a "blazon"?',
    a: "A blazon is the formal specification of a heraldic symbol — the structured description that defines what your emblem looks like. In traditional heraldry, the blazon is the IP; the visual rendering is a derivative work. On Heraldex, your blazon is the on-chain asset. It can be rendered in multiple styles while the underlying ownership record stays constant.",
  },
  {
    q: "Is this just another NFT thing?",
    a: "The blockchain is infrastructure, not the product. We use it the same way a domain registrar uses a database — to create a timestamped, tamper-proof record of ownership. You don't need a crypto wallet (card payment works), and your blazon isn't a speculative asset. It's a functional identity record with legal weight.",
  },
  {
    q: "Does on-chain registration actually hold up legally?",
    a: "Increasingly, yes. Thirty-two US states have blockchain evidence rules. China's Supreme People's Court ruled in 2018 that blockchain evidence enjoys a presumption against tampering. The EUIPO launched blockchain-authenticated IP certificates in 2023. Your registration creates admissible supporting evidence — and we offer trademark filing as a premium add-on.",
  },
  {
    q: "What if someone copies our emblem?",
    a: "Every registration includes IP monitoring. When we detect unauthorized use, we generate enforcement actions on your behalf. Basic tiers include automated alerts and cease-and-desist generation. Premium tiers include dispute resolution and litigation cost coverage through a licensed insurance partner.",
  },
  {
    q: "Can I use this for my fraternity, sports team, or family crest?",
    a: "Absolutely. Heraldex serves any group with a symbolic identity — gaming clans, Greek chapters, sports teams, family offices, hobbyist clubs, military units, alumni associations. The cadency system adapts to any organizational hierarchy.",
  },
  {
    q: "How does the merch storefront work?",
    a: "Once your blazon is registered, activate a storefront. Members browse products, select items, and order — all authenticated through your blazon's permission system. Fulfillment is handled by Printful and Gelato. You earn a royalty on every sale. No inventory, no vendor management.",
  },
  {
    q: "What happens if our clan dissolves?",
    a: "Your blazon remains registered on-chain. You can archive it at a reduced renewal rate or transfer ownership. Member grants can be revoked individually or in bulk. The registration is a permanent historical record of your group's identity.",
  },
  {
    q: "How is Heraldex different from using Canva and Printful?",
    a: "Canva makes graphics. Printful prints them. Neither verifies ownership, manages group permissions, protects your IP, or connects design to authenticated commerce. Heraldex is the layer that makes your symbol officially yours. It's the difference between a JPEG and a deed.",
  },
];

function FAQItem({
  faq,
  isOpen,
  onToggle,
  index,
}: {
  faq: { q: string; a: string };
  isOpen: boolean;
  onToggle: () => void;
  index: number;
}) {
  return (
    <div className="border-b border-sable-700 last:border-b-0">
      <button
        className="w-full flex items-center justify-between py-5 text-left group"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
        id={`faq-question-${index}`}
      >
        <span
          className={`text-body-lg font-medium font-inter transition-colors duration-200 pr-4 ${
            isOpen ? "text-primary-400" : "text-sable-50"
          }`}
        >
          {faq.q}
        </span>
        <ChevronDown
          size={20}
          className={`flex-shrink-0 text-sable-400 transition-transform duration-200 ${
            isOpen ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={`faq-answer-${index}`}
            role="region"
            aria-labelledby={`faq-question-${index}`}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="overflow-hidden"
          >
            <p className="text-body text-sable-300 pb-5 pr-8">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = useCallback(
    (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    },
    [openIndex]
  );

  return (
    <section id="faq" className="section-padding" aria-label="Frequently Asked Questions">
      <div className="container-main max-w-3xl">
        <FadeIn className="text-center mb-12">
          <h2 className="text-h2 md:text-display font-bold mb-4">
            Questions We Hear at Every LAN Party
          </h2>
        </FadeIn>

        <FadeIn>
          <div
            className="bg-sable-800/50 rounded-card border border-sable-700 px-6"
            role="region"
            aria-label="FAQ accordion"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                isOpen={openIndex === i}
                onToggle={() => handleToggle(i)}
                index={i}
              />
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
