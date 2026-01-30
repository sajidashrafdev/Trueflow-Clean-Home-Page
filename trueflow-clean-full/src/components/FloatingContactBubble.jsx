import { useState } from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

export default function FloatingContactBubble() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-6 bg-white rounded-2xl shadow-2xl p-6 z-50 w-80 animate-slide-up">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600"
            aria-label="Close"
          >
            ✕
          </button>

          <h3 className="text-xl font-bold text-slate-800 mb-4">Get in Touch</h3>

          <div className="space-y-3">
            <a
              href="tel:5551234567"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition group"
            >
              <div className="bg-orange-500 p-2 rounded-full text-white group-hover:scale-110 transition">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-slate-800">Call Us</div>
                <div className="text-sm text-slate-600">(555) 123-4567</div>
              </div>
            </a>

            <a
              href="mailto:info@trueflowcleaning.com"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition group"
            >
              <div className="bg-orange-500 p-2 rounded-full text-white group-hover:scale-110 transition">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <div className="font-semibold text-slate-800">Email Us</div>
                <div className="text-sm text-slate-600">info@trueflowcleaning.com</div>
              </div>
            </a>

            <button
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-orange-50 transition group w-full"
              type="button"
            >
              <div className="bg-orange-500 p-2 rounded-full text-white group-hover:scale-110 transition">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-slate-800">Live Chat</div>
                <div className="text-sm text-slate-600">We&apos;re online now!</div>
              </div>
            </button>
          </div>

          <div className="mt-4 pt-4 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center">
              Average response time: Under 5 minutes
            </p>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 bg-gradient-to-br from-orange-500 to-orange-600 text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-all z-50 group"
        aria-label="Contact"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute -top-1 -right-1 bg-green-500 w-4 h-4 rounded-full border-2 border-white animate-pulse"></span>
      </button>
    </>
  );
}
