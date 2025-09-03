// src/pages/About.tsx

import { SalaryTable } from "@/components/SalaryTable";

const About = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-4">
      {/* Company Info */}
      <div className="border-2 p-6 rounded-md flex flex-col gap-4 mb-4">
        <h1 className="font-bold text-3xl text-blue-600">JobMatch</h1>
        <p className="">
          JobMatch is your ultimate gateway to the Web3 job world! We connect
          talented professionals with top blockchain and crypto companies,
          helping you discover exciting roles that match your skills and
          ambitions. From developers to designers, marketers to product
          managers, JobMatch makes recruitment simple, transparent, and fair.
          Plus, we provide clear salary insights for key roles so you know
          exactly what you’re worth. Whether you’re looking to level up your
          career or dive into the cutting-edge world of blockchain, JobMatch is
          here to guide you every step of the way.
        </p>
      </div>

      {/* Salary Table */}
      <div className="overflow-x-auto">
        <h2 className="font-bold text-2xl mb-4 text-blue-600">Salary Table</h2>
        <SalaryTable />
      </div>
    </div>
  );
};

export default About;
