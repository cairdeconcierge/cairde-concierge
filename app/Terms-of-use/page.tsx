import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Terms of Use",
  description:
    "The terms of service that govern your use of the Cairde Concierge website and your engagement with Cairde Concierge as a service provider.",
  path: "/terms-of-use",
});

const sections = [
  { id: "about", title: "About Cairde Concierge" },
  { id: "not-provided", title: "What We Do Not Provide" },
  { id: "website-use", title: "Website Use" },
  { id: "bookings", title: "Consultation Requests and Bookings" },
  { id: "no-advice", title: "No Professional Advice" },
  { id: "ip", title: "Intellectual Property" },
  { id: "liability", title: "Limitation of Liability" },
  { id: "governing-law", title: "Governing Law" },
  { id: "changes", title: "Changes to These Terms" },
];

function Section({
  id,
  number,
  title,
  children,
}: {
  id: string;
  number: number;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className="scroll-mt-28 rounded-[16px] border border-[#E6E8EC] bg-white p-6 md:rounded-[24px] md:p-8"
    >
      <h2 className="font-poppins text-[20px] font-semibold leading-[120%] text-[#1C2A38] md:text-[24px]">
        <span className="text-[#FFAA02]">{number}.</span> {title}
      </h2>
      <div className="mt-3 space-y-3 font-body text-[16px] leading-[160%] text-[#5B5C61]">
        {children}
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <section className="bg-[#FDFBF7]">
          <div className="mx-auto container max-w-3xl pt-[140px] pb-12 text-center md:pt-[170px] md:pb-16">
            {/* <p className="font-body text-[14px] font-semibold leading-[140%] text-[#FFAA02] md:text-[16px]">
              LEGAL &amp; INFORMATION
            </p> */}
            {/* <h1 className="mt-2 font-poppins text-[28px] font-bold leading-[120%] text-[#1C2A38] md:text-[40px]">
              Privacy &amp; Terms
            </h1> */}
            <p className="mx-auto mt-4 max-w-2xl font-body text-[16px] leading-[160%] text-[#5B5C61] md:text-[18px]">
              Clear information about how Cairde Concierge handles personal
              data and the terms that apply when you use our website and
              services.
            </p>
          </div>
        </section>

        <div className="mx-auto container max-w-3xl py-12 md:py-16">
          <h2 className="font-poppins text-[24px] font-semibold leading-[120%] text-[#1C2A38] md:text-[28px]">
            Terms &amp; Conditions
          </h2>
          <p className="mt-1 font-body text-[14px] text-[#9C9689]">
            Terms of Service &middot; Last updated: 5 September 2026
          </p>
          <p className="mt-4 font-body text-[16px] leading-[160%] text-[#5B5C61]">
            These Terms of Service govern your use of the Cairde Concierge
            website and your engagement with Cairde Concierge as a service
            provider. By using this website or requesting a consultation, you
            agree to these terms.
          </p>

          <nav
            aria-label="Terms of Use sections"
            className="mt-6 flex flex-wrap gap-2"
          >
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="rounded-full border border-[#D2A449] bg-[#D2A44929] px-4 py-2 font-body text-[14px] text-[#1C2A38] transition-colors duration-200 hover:bg-[#D2A449] hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#B08A4A]"
              >
                {s.title}
              </a>
            ))}
          </nav>

          <div className="mt-8 flex flex-col gap-6">
            <Section id="about" number={1} title="About Cairde Concierge">
              <p>
                Cairde Concierge is a non-medical companionship and
                concierge support service for seniors, based in Dublin,
                Ireland. We provide practical, day-to-day assistance
                including companionship, errands, appointment
                accompaniment, light technology support and administrative
                help, delivered by a consistent and trusted team member
                where available.
              </p>
            </Section>

            <Section id="not-provided" number={2} title="What We Do Not Provide">
              <p>Cairde Concierge does not provide:</p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    Personal or intimate care, including washing, dressing
                    or toileting.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>Medication administration of any kind.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>Manual handling or physical transfers.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>Nursing, clinical or medical care or advice.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    Legal, financial or tax advice, or completion/submission
                    of legal or financial forms, including Fair Deal,
                    Medical Card or Carer&apos;s Allowance applications.
                  </span>
                </li>
              </ul>
              <p>
                Where a client&apos;s needs extend beyond our scope, we may
                help identify an appropriate registered provider. We do not
                deliver care or professional advice outside our stated
                scope.
              </p>
            </Section>

            <Section id="website-use" number={3} title="Website Use">
              <p>
                This website is provided for general information about
                Cairde Concierge and its services. You agree to use it only
                for lawful purposes and not to misuse, copy or redistribute
                its content without permission.
              </p>
            </Section>

            <Section
              id="bookings"
              number={4}
              title="Consultation Requests and Bookings"
            >
              <p>
                Submitting a consultation request through this website does
                not create a binding service agreement. A formal engagement
                begins only when both parties have entered into a separate
                Client Service Agreement, which sets out the specific
                services, pricing and terms applicable to the arrangement.
              </p>
            </Section>

            <Section id="no-advice" number={5} title="No Professional Advice">
              <p>
                Nothing on this website constitutes medical, legal,
                financial or tax advice. Information about matters such as
                the Fair Deal Scheme, HSE supports or similar topics is
                provided for general orientation only. For advice specific
                to your circumstances, consult the HSE, Citizens
                Information, a solicitor, accountant or other appropriately
                qualified professional.
              </p>
            </Section>

            <Section id="ip" number={6} title="Intellectual Property">
              <p>
                All content on this website, including text, graphics and
                branding, is the property of Cairde Concierge unless
                otherwise stated. It may not be reproduced, republished or
                redistributed without permission, except where permitted by
                law.
              </p>
            </Section>

            <Section id="liability" number={7} title="Limitation of Liability">
              <p>
                While we take reasonable care to keep website information
                accurate and up to date, Cairde Concierge is not responsible
                for loss arising solely from reliance on website content.
                Any liability relating to services actually provided is
                governed by the applicable Client Service Agreement and
                subject to applicable law.
              </p>
              <p>
                Nothing in these Terms is intended to exclude or limit any
                liability or consumer right that cannot lawfully be excluded
                or limited under Irish law.
              </p>
            </Section>

            <Section id="governing-law" number={8} title="Governing Law">
              <p>
                These Terms are governed by the laws of Ireland. Subject to
                any mandatory consumer protections, disputes will be dealt
                with by the courts of Ireland.
              </p>
            </Section>

            <Section id="changes" number={9} title="Changes to These Terms">
              <p>
                We may update these Terms from time to time. Updated Terms
                will be posted on this page with a revised date. Continued
                use of the website after changes are posted may constitute
                acceptance of the updated Terms to the extent permitted by
                law.
              </p>
            </Section>
          </div>

          <div className="mt-10 rounded-lg border border-[#B08A4A]/40 bg-[#B08A4A]/10 px-5 py-4 text-center">
            <p className="font-body text-[16px] leading-[160%] text-[#1C2A38]">
              <span className="font-semibold text-[#B08A4A]">
                Questions about these terms?
              </span>{" "}
              Email us at{" "}
              <a
                href="mailto:hello@cairdeconcierge.ie"
                className="text-[#B08A4A] underline"
              >
                hello@cairdeconcierge.ie
              </a>
              .
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
