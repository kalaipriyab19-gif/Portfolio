import profile from "../assets/Kalaipriya B.jpeg";
import resume from "../assets/Kalaipriya Resume 2026 - Updated.pdf";

function ProfessionalSummary() {
  return (
    <section className="text-center py-20">
      <img
        src={profile}
        alt="Kalaipriya B"
        className="w-36 mx-auto rounded-full mb-4"
      />

      <h1 className="text-3xl font-bold">Kalaipriya B</h1>
      <h2 className="text-blue-400 text-xl mt-1">
        Cloud & DevOps Engineer
      </h2>

      <p className="text-slate-400 max-w-2xl mx-auto mt-4">
        Cloud & DevOps Engineer with 3+ years of experience in Azure and AWS,
        specializing in CI/CD, Terraform, Docker, Kubernetes, and Linux.
      </p>

      <div className="mt-6 flex justify-center gap-4">
        <a
          href={resume}
          target="_blank"
          rel="noreferrer"
          className="bg-blue-500 px-6 py-2 rounded"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
}

export default ProfessionalSummary;
