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
        align="center"
      />
      <div className="mx-auto mt-8 max-w-3xl sm:mt-10">
        <FAQAccordion items={faqs.slice(0, 5)} />
      </div>
    </Section>
  );
}
