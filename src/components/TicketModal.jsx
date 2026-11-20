import React, { useState, useEffect } from 'react';
import { X, Ticket, CheckCircle2, QrCode, Sparkles, User, Mail, Phone, Building, ArrowRight, ShieldCheck, Download } from 'lucide-react';
import { eventData } from '../data/eventData';

export default function TicketModal({ isOpen, onClose }) {
  const [selectedTier, setSelectedTier] = useState('general');
  const [quantity, setQuantity] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organization: '',
    dietary: 'veg'
  });
  const [promoCode, setPromoCode] = useState('');
  const [discount, setDiscount] = useState(0);
  const [promoError, setPromoError] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentTier = eventData.ticketTiers.find((t) => t.id === selectedTier) || eventData.ticketTiers[0];
  const subtotal = currentTier.price * quantity;
  const total = Math.max(0, subtotal - discount);

  const handleApplyPromo = (e) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'TEDX2026' || promoCode.trim().toUpperCase() === 'CHOUKSEY') {
      const disc = Math.round(subtotal * 0.15);
      setDiscount(disc);
      setPromoError('');
    } else {
      setPromoError('Invalid code. Try "TEDX2026" for 15% off.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) return;

    // Generate simulated ticket confirmation ID
    const randomId = 'TXC-' + Math.floor(100000 + Math.random() * 900000);
    setTicketId(randomId);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/85 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-ted-card border border-ted-border rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-ted-black/60 hover:bg-ted-red border border-ted-border text-ted-gray-300 hover:text-white transition-colors"
          aria-label="Close Ticket Modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          /* REGISTRATION FORM VIEW */
          <div className="p-6 sm:p-8">
            <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-wider text-ted-red mb-1">
              <Ticket className="w-4 h-4" />
              <span>Official Delegate Pass</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase">
              Register for <span className="text-ted-red">TEDxChoukseyGroupofCollegesGroupofColleges</span>
            </h3>
            <p className="text-xs sm:text-sm text-ted-gray-400 mt-1">
              {eventData.details.displayDate} • {eventData.details.venue.institution}
            </p>

            {/* Ticket Tier Cards */}
            <div className="mt-6">
              <label className="block text-xs font-bold uppercase tracking-wider text-ted-gray-400 mb-2">
                1. Select Your Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {eventData.ticketTiers.map((tier) => {
                  const isSelected = selectedTier === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => {
                        setSelectedTier(tier.id);
                        setDiscount(0);
                      }}
                      className={`cursor-pointer p-4 rounded-xl border transition-all duration-200 relative flex flex-col justify-between ${
                        isSelected
                          ? 'bg-ted-red/10 border-ted-red shadow-lg shadow-ted-red/20'
                          : 'bg-ted-dark border-ted-border hover:border-ted-borderLight'
                      }`}
                    >
                      {tier.badge && (
                        <span className={`text-[9px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full mb-2 inline-block self-start ${
                          tier.popular ? 'bg-ted-red text-white' : 'bg-ted-border text-ted-gray-300'
                        }`}>
                          {tier.badge}
                        </span>
                      )}
                      <div>
                        <h4 className="text-sm font-bold text-white font-display">
                          {tier.name}
                        </h4>
                        <div className="text-lg font-black text-ted-red mt-1 font-display">
                          {tier.currency}{tier.price}
                        </div>
                      </div>
                      <p className="text-[11px] text-ted-gray-400 mt-2 line-clamp-2">
                        {tier.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Attendee Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-ted-gray-400">
                2. Attendee Details
              </label>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-4 h-4 text-ted-gray-500" />
                    <input
                      type="text"
                      required
                      placeholder="Full Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-ted-dark border border-ted-border rounded-xl text-xs sm:text-sm text-white placeholder-ted-gray-500 focus:outline-none focus:border-ted-red transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-4 h-4 text-ted-gray-500" />
                    <input
                      type="email"
                      required
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-ted-dark border border-ted-border rounded-xl text-xs sm:text-sm text-white placeholder-ted-gray-500 focus:outline-none focus:border-ted-red transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-4 h-4 text-ted-gray-500" />
                    <input
                      type="tel"
                      required
                      placeholder="Mobile Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-ted-dark border border-ted-border rounded-xl text-xs sm:text-sm text-white placeholder-ted-gray-500 focus:outline-none focus:border-ted-red transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 w-4 h-4 text-ted-gray-500" />
                    <input
                      type="text"
                      placeholder="College / Company"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="w-full pl-9 pr-3 py-2.5 bg-ted-dark border border-ted-border rounded-xl text-xs sm:text-sm text-white placeholder-ted-gray-500 focus:outline-none focus:border-ted-red transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Quantity & Promo Code */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center justify-between p-2.5 bg-ted-dark border border-ted-border rounded-xl">
                  <span className="text-xs text-ted-gray-400 font-medium">Quantity:</span>
                  <div className="flex items-center space-x-3">
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      className="w-7 h-7 rounded-lg bg-ted-card border border-ted-border text-white flex items-center justify-center font-bold hover:bg-ted-surface"
                    >
                      -
                    </button>
                    <span className="text-sm font-bold text-white font-mono">{quantity}</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.min(5, quantity + 1))}
                      className="w-7 h-7 rounded-lg bg-ted-card border border-ted-border text-white flex items-center justify-center font-bold hover:bg-ted-surface"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Promo Code Input */}
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Promo Code (TEDX2026)"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value)}
                    className="flex-1 px-3 py-2.5 bg-ted-dark border border-ted-border rounded-xl text-xs text-white placeholder-ted-gray-500 uppercase focus:outline-none focus:border-ted-red"
                  />
                  <button
                    type="button"
                    onClick={handleApplyPromo}
                    className="px-3 py-2.5 bg-ted-surface hover:bg-ted-card border border-ted-border text-xs font-bold text-white rounded-xl"
                  >
                    Apply
                  </button>
                </div>
              </div>

              {promoError && (
                <p className="text-[11px] text-amber-400">{promoError}</p>
              )}
              {discount > 0 && (
                <p className="text-[11px] text-emerald-400 font-medium">
                  ✓ Promo applied: -₹{discount} discount!
                </p>
              )}

              {/* Order Total & Submit */}
              <div className="mt-6 pt-4 border-t border-ted-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-ted-gray-400 block">Total Amount:</span>
                  <div className="text-2xl font-black text-white font-display">
                    {currentTier.currency}{total}
                    <span className="text-xs text-ted-gray-500 font-normal ml-1">
                      ({quantity} {quantity > 1 ? 'passes' : 'pass'})
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-8 py-3.5 bg-ted-red hover:bg-ted-redHover text-white font-bold text-sm uppercase tracking-wider rounded-xl shadow-lg shadow-ted-red/30 flex items-center justify-center space-x-2 transition-all hover:scale-[1.02] active:scale-100"
                >
                  <span>Complete Reservation</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              <div className="flex items-center justify-center space-x-2 text-[11px] text-ted-gray-500 mt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-ted-red" />
                <span>Instant Confirmation & Printable Digital Badge</span>
              </div>
            </form>
          </div>
        ) : (
          /* CONFIRMATION / DIGITAL BADGE VIEW */
          <div className="p-6 sm:p-8 text-center animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>

            <h3 className="text-2xl sm:text-3xl font-black font-display text-white uppercase">
              Registration Confirmed!
            </h3>
            <p className="text-xs sm:text-sm text-ted-gray-400 mt-1 max-w-md mx-auto">
              Your delegate pass for TEDxChoukseyGroupofColleges 2026 has been reserved. A confirmation email has been dispatched to <span className="text-white font-medium">{formData.email}</span>.
            </p>

            {/* Virtual Delegate Badge */}
            <div className="mt-6 max-w-sm mx-auto p-6 rounded-2xl bg-gradient-to-b from-ted-card to-ted-black border-2 border-ted-red/50 shadow-2xl relative text-left overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-2 bg-ted-red" />

              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-baseline">
                    <span className="text-lg font-black text-ted-red">TED</span>
                    <span className="text-base font-black text-ted-red align-super">x</span>
                    <span className="text-lg font-bold text-white ml-0.5">Chouksey</span>
                  </div>
                  <span className="text-[8px] uppercase tracking-wider text-ted-gray-500 block">
                    {eventData.details.licenseTagline}
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-ted-red/20 border border-ted-red/40 text-ted-red text-[10px] font-bold uppercase font-mono">
                  {currentTier.name}
                </span>
              </div>

              <div className="my-5 border-t border-b border-ted-border/60 py-4">
                <span className="text-[10px] uppercase font-bold tracking-widest text-ted-gray-500 block">
                  Delegate Name
                </span>
                <h4 className="text-xl font-black text-white font-display mt-0.5">
                  {formData.name}
                </h4>
                {formData.organization && (
                  <p className="text-xs text-ted-gray-400 mt-0.5">
                    {formData.organization}
                  </p>
                )}
              </div>

              <div className="flex items-center justify-between text-xs text-ted-gray-400">
                <div>
                  <span className="text-[9px] uppercase tracking-wider text-ted-gray-500 block">Pass ID</span>
                  <span className="text-white font-mono font-bold text-sm">{ticketId}</span>
                </div>
                <div className="text-right">
                  <span className="text-[9px] uppercase tracking-wider text-ted-gray-500 block">Event Date</span>
                  <span className="text-white font-medium">March 28, 2026</span>
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-ted-border/40 flex items-center justify-between">
                <div className="flex items-center space-x-1.5 text-[10px] text-ted-gray-400">
                  <QrCode className="w-6 h-6 text-white" />
                  <span>Scan at entrance</span>
                </div>
                <span className="text-[9px] text-ted-gray-500 font-mono">
                  ADM-1 SEAT RES
                </span>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3">
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-6 py-2.5 rounded-xl bg-ted-surface hover:bg-ted-card border border-ted-border text-xs font-bold text-white transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Save / Print Badge</span>
              </button>

              <button
                onClick={handleReset}
                className="w-full sm:w-auto px-6 py-2.5 rounded-xl bg-ted-red hover:bg-ted-redHover text-xs font-bold uppercase tracking-wider text-white transition-colors"
              >
                Close & Return
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
