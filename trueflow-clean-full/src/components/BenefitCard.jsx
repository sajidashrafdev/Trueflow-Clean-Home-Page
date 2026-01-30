export default function BenefitCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition">
      <div className="text-orange-500 mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-slate-800 mb-3">{title}</h3>
      <p className="text-slate-600">{description}</p>
    </div>
  );
}
