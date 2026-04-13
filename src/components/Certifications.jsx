export default function Certifications() {
  const certs = [
    "Microsoft Azure Fundamentals (AZ-900)",
    "Microsoft Azure Administrator Associate (AZ-104)",
    "Microsoft Azure DevOps Engineer Expert (AZ-400)",
    "AWS Certified Solutions Architect – Associate"
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-left">
      <h2 className="text-3xl font-semibold mb-8">Certifications</h2>

      <div className="space-y-4">
        {certs.map(cert => (
          <div
            key={cert}
            className="bg-slate-900 p-4 rounded text-slate-200"
          >
            {cert}
          </div>
        ))}
      </div>
    </section>
  );
}
