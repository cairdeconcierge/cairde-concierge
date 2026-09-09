const sessionCovers = [
  {
    label: "Decoding the HSE",
    text: "a clear guide to accessing local community health resources, public home help hours, and equipment grants.",
  },
  {
    label: "Understanding the paperwork",
    text: "a general orientation to state schemes including Medical Cards, Carer's Allowance, and the Fair Deal (Nursing Home Support) Scheme, and where to go for detailed guidance on individual cases.",
  },
  {
    label: "Proactive care planning",
    text: "how to think about home safety modifications, organise medical appointment logistics, and support seniors living independently.",
  },
  {
    label: "Open Q&A forum",
    text: "a supportive space for general questions, with signposting to the right specialist resource for anything specific to an individual family's circumstances.",
  },
];

export default function CorporateSeminar() {
  return (
    <section>
      <div className="pb-[46px] md:pb-[66px]">
        <div className="container mx-auto">
          <div className="max-w-[896px] mx-auto rounded-[16px] md:rounded-[24px] border border-[#E6E8EC] bg-white p-6 md:p-10 shadow-[0px_12px_28px_0px_#00000014]">
            <span className="inline-flex items-center rounded-full border border-[#D2A449] bg-[#D2A44929] px-4 py-1.5 text-[14px] font-body font-semibold text-[#1C2A38]">
              Corporate Seminar
            </span>

            <h2 className="mt-4 text-[#1C2A38] text-[22px] md:text-[28px] lg:text-[32px] font-poppins font-semibold leading-[120%]">
              Corporate Lunch &amp; Learn: Navigating Eldercare &amp; State
              Paperwork in Ireland
            </h2>

            <p className="mt-4 text-[#43586C] text-[16px] md:text-[18px] leading-[160%] font-body">
              A 1-hour educational seminar or webinar designed to save your
              employees hours of stress and confusion. Navigating the Irish
              healthcare and state support systems for an ageing relative
              can feel like a full-time job. This practical session gives
              employees a clear roadmap and general orientation to the
              system, stripping away the bureaucracy so they know where to
              look and who to ask.
            </p>

            <p className="mt-6 text-[#1C2A38] text-[16px] md:text-[18px] font-body font-semibold">
              What the session covers:
            </p>
            <ul className="mt-3 space-y-3">
              {sessionCovers.map((item) => (
                <li key={item.label} className="flex gap-3">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#B08A4A]" />
                  <span className="text-[16px] md:text-[18px] leading-[160%] font-body text-[#43586C]">
                    <span className="font-semibold text-[#1C2A38]">
                      {item.label}
                    </span>{" "}
                    : {item.text}
                  </span>
                </li>
              ))}
            </ul>

            <div className="mt-8 rounded-[12px] border border-[#B08A4A]/40 bg-[#B08A4A]/10 px-5 py-4">
              <p className="text-[16px] md:text-[18px] font-body font-semibold text-[#1C2A38]">
                Virtual webinar or in-person seminar (1 hour): €450 flat fee
              </p>
              <p className="mt-1 text-[14px] md:text-[16px] font-body leading-[160%] text-[#43586C]">
                Includes a downloadable Irish Eldercare Cheat Sheet
                distributed to all attending staff.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
