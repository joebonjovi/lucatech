import { FAQAccordion } from "@/components/shared/FAQAccordion";
import { Section, SectionHeading } from "@/components/ui/Section";
import { faqs } from "@/config/faq";
import { faqSchema } from "@/lib/schema";
import { JsonLd } from "@/components/shared/JsonLd";

export function FAQ() {
  return (
    <Section tone="surface">
      <JsonLd data={faqSchema(faqs)} />
      <SectionHeading
        eyebrow="FAQ"
        title="Common questions from homeowners"
        description="Straightforward answers about installation, Wi-Fi, equipment, and what to expect."
        align="center"
      />
      <div className="mx-auto mt-10 max-w-3xl">
        <FAQAccordion />
      </div>
    </Section>
  );
}
