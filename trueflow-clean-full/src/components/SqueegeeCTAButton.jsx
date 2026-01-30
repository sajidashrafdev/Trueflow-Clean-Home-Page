export default function SqueegeeCTAButton({ children, primary, large, onClick, type='button' }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`
        relative overflow-hidden group
        ${large ? 'px-10 py-5 text-xl' : 'px-8 py-4 text-lg'}
        font-semibold rounded-lg transition-all
        ${primary
          ? 'bg-orange-500 text-white hover:bg-orange-600'
          : 'bg-transparent border-2 border-white text-white hover:border-orange-500'
        }
      `}
    >
      {/* Squeegee wipe effect */}
      <span className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out origin-left">
        <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent opacity-50"></span>
      </span>

      {/* Streak-free shine effect */}
      <span className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300">
        <span className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
      </span>

      <span className="relative z-10 group-hover:text-slate-900 transition-colors duration-300">
        {children}
      </span>
    </button>
  );
}
