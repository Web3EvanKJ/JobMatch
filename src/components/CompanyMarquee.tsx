import Marquee from "react-fast-marquee";

const companies = [
  "/assets/bitrefill.svg",
  "/assets/chainalysis.svg",
  "/assets/Chainlink.svg",
  "/assets/coinbase.svg",
];

export default function CompanyMarquee() {
  return (
    <div>
      <div className="text-center mt-4 font-bold">
        Trusted by Top Leading Companies
      </div>
      <Marquee gradient={false} speed={75} pauseOnHover={false} className="">
        {companies.concat(companies).map((logo, index) => (
          <img
            key={index}
            src={logo}
            alt={`Company ${index + 1}`}
            className="h-12 m-5 grayscale hover:grayscale-0 "
          />
        ))}
      </Marquee>
    </div>
  );
}
