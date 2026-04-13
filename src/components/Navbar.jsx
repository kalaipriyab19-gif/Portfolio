export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-10 py-4 bg-slate-900 sticky top-0">
      <h1 className="text-xl font-bold text-blue-400">Kalaipriya B</h1>
      <ul className="flex gap-6">
        {["about","skills","experience","projects","contact"].map(item => (
          <li key={item}>
            <a href={`#${item}`} className="hover:text-blue-400 capitalize">
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
