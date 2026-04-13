export default function Skills() {
  const skills = [
    "Azure", "AWS", "Terraform", "Azure DevOps",
    "Docker", "Kubernetes", "Linux", "Git",
    "Jenkins", "Ansible", "Monitoring & Logging", "CI/CD Pipelines",
  ];

  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-12 text-left">
      <h2 className="text-3xl font-semibold mb-8">Skills</h2>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {skills.map(skill => (
          <div
            key={skill}
            className="bg-slate-900 p-4 rounded text-center text-slate-200"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
