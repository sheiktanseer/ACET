export default function Hero({ title, subtitle }) {
  return (
    <section className="grid md:grid-cols-2 items-center px-10 py-20 bg-white">
      <div>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-gray-600 mb-6">{subtitle}</p>
        <div className="flex gap-4">
          <button className="bg-blue-700 text-white px-6 py-3 rounded">Apply Now</button>
          <button className="border px-6 py-3 rounded">Explore</button>
        </div>
      </div>
      <div className="h-64 bg-gray-200 rounded-xl flex items-center justify-center">IMAGE</div>
    </section>
  )
}