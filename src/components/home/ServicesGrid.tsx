import { ServiceCard } from "@/components/shared/ServiceCard";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeading } from "@/components/ui/Section";
import { residentialServices } from "@/config/services";

export function ServicesGrid() {
  return (
    <Section id="services">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <SectionHeading
          eyebrow="Services"
          title="Residential smart home security and technology"
          description="At Luca Technologies, we will never shut down your ideas. We are happy to talk through any cool idea you have — and help bring it to life."
        />
        <Button
          href="/services"
          variant="outline"
          className="w-full shrink-0 self-start sm:w-auto lg:self-auto"
        >
          View all services
        </Button>
      </div>
      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {residentialServices.map((service) => (
          <div key={service.id} id={service.slug}>
            <ServiceCard service={service} />
          </div>
        ))}
      </div>
    </Section>
  );
}
