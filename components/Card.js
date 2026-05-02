export default function Card({ title, desc }) {
  return (
    <div className="bg-white p-6 rounded shadow">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm text-gray-600">{desc}</p>
    </div>
  )
}