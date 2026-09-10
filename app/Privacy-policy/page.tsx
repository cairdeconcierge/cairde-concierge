import type { Metadata } from "next";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { buildPageMetadata } from "@/utils/seo";

export const metadata: Metadata = buildPageMetadata({
  title: "Privacy Policy",
  description:
    "How Cairde Concierge collects, uses, and protects the personal data of clients, families, and website visitors.",
  path: "/privacy-policy",
});

const sections = [
  { id: "who-we-are", title: "Who We Are" },
  { id: "information-we-collect", title: "Information We Collect" },
  { id: "why-we-collect-it", title: "Why We Collect It" },
  { id: "how-we-use-it", title: "How We Use It" },
  { id: "sharing", title: "Sharing" },
  { id: "retention", title: "Retention" },
  { id: "your-rights", title: "Your Rights" },
  { id: "security", title: "Security" },
  { id: "cookies", title: "Cookies" },
  { id: "changes", title: "Changes" },
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
            </p>
            <h1 className="mt-2 font-poppins text-[28px] font-bold leading-[120%] text-[#1C2A38] md:text-[40px]">
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
            Privacy Policy
          </h2>
          <p className="mt-1 font-body text-[14px] text-[#9C9689]">
            Last updated: 5 September 2026
          </p>
          <p className="mt-4 font-body text-[16px] leading-[160%] text-[#5B5C61]">
            Cairde Concierge is committed to protecting the privacy of our
            clients, their families, and website visitors. This Privacy
            Policy explains what personal data we collect, why we collect it,
            how we use it, and the rights you have over your information.
          </p>

          <nav
            aria-label="Privacy Policy sections"
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
            <Section id="who-we-are" number={1} title="Who We Are">
              <p>
                Cairde Concierge is a non-medical companionship and concierge
                support service based in Dublin, Ireland. For
                privacy-related queries, contact us at{" "}
                <a
                  href="mailto:hello@cairdeconcierge.ie"
                  className="text-[#B08A4A] underline"
                >
                  hello@cairdeconcierge.ie
                </a>
                .
              </p>
            </Section>

            <Section
              id="information-we-collect"
              number={2}
              title="What Information We Collect"
            >
              <p>
                Depending on how you interact with us, we may collect:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    <span className="font-semibold text-[#1C2A38]">
                      Contact details:
                    </span>{" "}
                    name, phone number, email address and home address.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    <span className="font-semibold text-[#1C2A38]">
                      Information about a loved one:
                    </span>{" "}
                    name, address and general details submitted through our
                    consultation request form.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    <span className="font-semibold text-[#1C2A38]">
                      Health, mobility and safety information:
                    </span>{" "}
                    information shared voluntarily to help us deliver
                    non-medical support safely, such as mobility
                    considerations, emergency contact details or GP name.
                    This information is not used to provide medical care or
                    advice.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    <span className="font-semibold text-[#1C2A38]">
                      Visit notes:
                    </span>{" "}
                    records of non-medical support provided during a visit,
                    where needed for continuity and service administration.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    <span className="font-semibold text-[#1C2A38]">
                      Communications:
                    </span>{" "}
                    emails, messages or call notes relating to an enquiry or
                    ongoing service.
                  </span>
                </li>
              </ul>
              <p>
                We do not knowingly collect financial account details,
                medical records, or information required to complete state
                benefit applications, as these fall outside our non-medical
                scope of service.
              </p>
            </Section>

            <Section id="why-we-collect-it" number={3} title="Why We Collect It">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    <span className="font-semibold text-[#1C2A38]">
                      Consent:
                    </span>{" "}
                    where consent is the appropriate basis, including certain
                    booking-form submissions or marketing communications. You
                    may withdraw consent where applicable.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    <span className="font-semibold text-[#1C2A38]">
                      Contract performance:
                    </span>{" "}
                    to deliver services agreed in a Client Service Agreement.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    <span className="font-semibold text-[#1C2A38]">
                      Legitimate interests:
                    </span>{" "}
                    where necessary to coordinate services safely,
                    communicate with clients and respond appropriately to
                    genuine emergencies, subject to applicable
                    data-protection requirements.
                  </span>
                </li>
              </ul>
            </Section>

            <Section id="how-we-use-it" number={4} title="How We Use Your Information">
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    To respond to consultation requests and arrange services.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    To deliver, schedule and coordinate non-medical support
                    visits.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    To communicate with the client&apos;s nominated family
                    contact where appropriate.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    To contact emergency services or an emergency contact if
                    a genuine emergency arises during a visit.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    To maintain accurate records for service continuity,
                    insurance and business administration.
                  </span>
                </li>
              </ul>
            </Section>

            <Section id="sharing" number={5} title="Who We Share It With">
              <p>
                We do not sell or rent personal data. We only share
                information where necessary and appropriate with:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    The client&apos;s nominated family contact(s), where
                    authorised or otherwise appropriate.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>Emergency services in a genuine emergency.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    Professional advisers, such as an accountant or
                    solicitor, where necessary and subject to appropriate
                    confidentiality obligations.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    Public authorities or other parties where we are legally
                    required to do so.
                  </span>
                </li>
              </ul>
            </Section>

            <Section id="retention" number={6} title="How Long We Keep It">
              <p>
                We retain personal data only for as long as reasonably
                necessary to provide our services and meet applicable legal,
                regulatory, insurance and business record-keeping
                obligations. Specific retention periods depend on the type of
                information and the purpose for which it is held.
              </p>
            </Section>

            <Section id="your-rights" number={7} title="Your Rights">
              <p>
                Under the General Data Protection Regulation (GDPR) and
                applicable Irish data-protection law, you may have rights
                including:
              </p>
              <ul className="space-y-2">
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>Access to personal data we hold about you.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>Correction of inaccurate or incomplete data.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>Erasure of personal data, where applicable.</span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    Restriction of, or objection to, certain processing.
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span>
                    Data portability in circumstances where the right
                    applies.
                  </span>
                </li>
              </ul>
              <p>
                To exercise your rights, contact{" "}
                <a
                  href="mailto:hello@cairdeconcierge.ie"
                  className="text-[#B08A4A] underline"
                >
                  hello@cairdeconcierge.ie
                </a>
                . You also have the right to contact the Irish Data
                Protection Commission if you have concerns about how your
                personal data is handled.
              </p>
            </Section>

            <Section id="security" number={8} title="Security">
              <p>
                We take reasonable technical and organisational measures to
                protect personal data against unauthorised access, loss,
                alteration or misuse. No system is completely secure, but we
                work to keep information as safe as reasonably possible.
              </p>
            </Section>

            <Section id="cookies" number={9} title="Cookies">
              <p>
                Our website may use basic cookies or similar technologies
                needed for the website to function correctly. We do not use
                cookies for third-party advertising or tracking unless this
                policy is updated to reflect a future change.
              </p>
            </Section>

            <Section id="changes" number={10} title="Changes to This Policy">
              <p>
                We may update this Privacy Policy from time to time. Changes
                will be posted on this page with an updated revision date.
              </p>
            </Section>
          </div>

          <div className="mt-10 rounded-lg border border-[#B08A4A]/40 bg-[#B08A4A]/10 px-5 py-4 text-center">
            <p className="font-body text-[16px] leading-[160%] text-[#1C2A38]">
              <span className="font-semibold text-[#B08A4A]">
                Questions about your data?
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
