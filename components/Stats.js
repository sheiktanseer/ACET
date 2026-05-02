export default function Stats() {
  const items = ["15+ Years", "2500+ Students", "100+ Faculty", "92% Placement", "15+ Recruiters", "6.5 LPA"]
  return (
    <div className="grid grid-cols-2 md:grid-cols-6 gap-4 px-10 py-6">
      {items.map((i, idx) => (<div key={idx} className="bg-white p-4 rounded shadow text-center">{i}</div>))}
    </div>
  )
}