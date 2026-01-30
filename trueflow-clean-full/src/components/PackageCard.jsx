import { CheckCircle } from 'lucide-react';

export default function PackageCard({ package: pkg }) {
  return (
    <div
      className={`
      relative rounded-2xl p-8 transition-all hover:scale-105 hover:shadow-2xl
      ${pkg.featured
        ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white shadow-xl scale-105'
        : 'bg-slate-50 text-slate-800'
      }
    `}
    >
      {pkg.featured && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold">
          MOST POPULAR
        </div>
      )}

      <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
      <div className="text-4xl font-bold mb-6">{pkg.price}</div>

      <ul className="space-y-4">
        {pkg.benefits.map((benefit, idx) => (
          <li key={idx} className="flex items-start gap-3">
            <CheckCircle
              className={`w-6 h-6 flex-shrink-0 mt-0.5 ${
                pkg.featured ? 'text-white' : 'text-orange-500'
              }`}
            />
            <span className="text-lg">{benefit}</span>
          </li>
        ))}
      </ul>

      <button
        className={`
        w-full mt-8 py-4 rounded-lg font-semibold text-lg transition-all
        ${pkg.featured
          ? 'bg-white text-orange-500 hover:bg-slate-100'
          : 'bg-orange-500 text-white hover:bg-orange-600'
        }
      `}
      >
        Choose Plan
      </button>
    </div>
  );
}
