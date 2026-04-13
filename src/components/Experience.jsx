export default function Experience() {
  return (
    <section id="experience" className="max-w-6xl mx-auto px-6 py-12 text-left">
      <h2 className="text-3xl font-semibold mb-10">Experience</h2>

      <div className="border-l-2 border-blue-500 pl-6">
        <h3 className="text-xl font-semibold">
          Cloud & DevOps Engineer – Tata Consultancy Services
        </h3>

        <p className="text-sm text-slate-400 mb-6">
          Jul 2022 – Present · Chennai, India (Hybrid)
        </p>

        <ul className="list-disc ml-5 space-y-3 text-slate-400 leading-relaxed">
          <li>
            Designed and managed scalable cloud infrastructure across 
            <strong className="text-slate-300"> AWS & Azure</strong> (EC2, S3, RDS, VMs, VNets, Load Balancers, NSGs),
            supporting high-availability production environments.
          </li>

          <li>
            Automated infrastructure provisioning and configuration using
            <strong className="text-slate-300"> Terraform, Ansible, and CloudFormation</strong>,
            reducing manual effort by <strong className="text-slate-300">40–60%</strong>
            and improving deployment consistency.
          </li>

          <li>
            Built and maintained CI/CD pipelines using
            <strong className="text-slate-300"> Jenkins and Azure DevOps</strong>,
            accelerating deployment cycles by <strong className="text-slate-300">30–50%</strong>
            and improving release success rates.
          </li>

          <li>
            Containerized and orchestrated applications using
            <strong className="text-slate-300"> Docker, Docker Swarm, and Kubernetes</strong>,
            improving scalability and minimizing environment drift across
            dev, test, and production.
          </li>

          <li>
            Implemented monitoring, logging, and alerting with
            <strong className="text-slate-300"> CloudWatch, Azure Monitor, and Log Analytics</strong>,
            reducing incident detection time by up to
            <strong className="text-slate-300"> 35%</strong>.
          </li>

          <li>
            Optimized cloud costs and resource utilization, identifying
            inefficiencies and improving spend efficiency by
            <strong className="text-slate-300"> 10–20%</strong>
            without impacting performance.
          </li>

          <li>
            Ensured security compliance and infrastructure hardening using
            IAM, NSGs, backup strategies, policies, and automated configuration baselines.
          </li>

          <li>
            Collaborated closely with developers, architects, and product teams
            to support cloud migrations, platform modernization, and
            zero-downtime production deployments.
          </li>
        </ul>
      </div>
    </section>
  );
}
