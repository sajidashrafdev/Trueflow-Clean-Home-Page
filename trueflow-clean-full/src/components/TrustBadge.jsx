export default function TrustBadge({ icon, text }) {
  return (
    <div className="flex flex-col items-center text-center gap-3">
      <div className="text-orange-500">{icon}</div>
      <p className="text-sm font-semibold text-slate-700">{text}</p>
    </div>
  );
}
