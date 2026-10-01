import React, { useState, useEffect, useRef } from 'react';
import {
  X,
  ArrowRight,
  ArrowLeft,
  Check,
  Sparkles,
  Phone,
  Calendar,
  Clock,
  User,
  MessageSquare,
  CheckCircle2,
  Send,
  CornerDownLeft
} from 'lucide-react';
import { BUSINESS_INFO } from '../data/salonData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

const SERVICE_OPTIONS = [
  { id: 'bridal', key: 'A', label: 'Specialized Bridal Makeover', icon: '💄', desc: 'Royal HD / Airbrush Bridal Artistry & Saree Draping' },
  { id: 'tattoos', key: 'B', label: 'Clean & Sterile Tattoos', icon: '💉', desc: 'Permanent custom script/art & temporary body tattoos' },
  { id: 'nails', key: 'C', label: 'Acrylic & Gel Nail Extensions', icon: '💅', desc: 'Designer nail art, chrome finish & 3D stones' },
  { id: 'hair', key: 'D', label: 'Hair Care, Cuts & Keratin', icon: '💇‍♀️', desc: 'Haircuts, styling, global coloring, botox & spa' },
  { id: 'skin', key: 'E', label: 'Hydrafacial & Skincare', icon: '🧖‍♀️', desc: 'Deep cleansing, anti-aging, chemical peels & facials' },
  { id: 'engagement', key: 'F', label: 'Engagement & Party Styling', icon: '🌸', desc: 'Flawless makeup, hair styling & event draping' },
  { id: 'consultation', key: 'G', label: 'General Consultation / Custom', icon: '💬', desc: 'Price enquiry, package customization & advice' }
];

const TIME_SLOTS = [
  { id: 'morning', label: 'Morning (10:30 AM – 1:00 PM)', icon: '☀️' },
  { id: 'afternoon', label: 'Afternoon (1:00 PM – 4:00 PM)', icon: '🌤️' },
  { id: 'evening', label: 'Evening (4:00 PM – 7:00 PM)', icon: '🌙' },
  { id: 'flexible', label: 'Flexible / Any Time', icon: '⚡' }
];

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialService = ''
}) => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const [service, setService] = useState(initialService || SERVICE_OPTIONS[0].label);
  const [fullName, setFullName] = useState('');
  const [phone, setPhone] = useState('');
  const [date, setDate] = useState('');
  const [timeSlot, setTimeSlot] = useState(TIME_SLOTS[0].label);
  const [notes, setNotes] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const nameInputRef = useRef<HTMLInputElement>(null);
  const phoneInputRef = useRef<HTMLInputElement>(null);

  // Sync initial service if passed
  useEffect(() => {
    if (initialService) {
      setService(initialService);
    }
  }, [initialService]);

  // Focus appropriate input on step change
  useEffect(() => {
    if (!isOpen) return;
    setErrorMsg('');
    const timer = setTimeout(() => {
      if (currentStep === 2 && nameInputRef.current) {
        nameInputRef.current.focus();
      } else if (currentStep === 3 && phoneInputRef.current) {
        phoneInputRef.current.focus();
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [currentStep, isOpen]);

  // Keyboard navigation: Enter to advance
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || submitted) return;

      if (e.key === 'Escape') {
        onClose();
      } else if (e.key === 'Enter' && currentStep !== 5) {
        e.preventDefault();
        handleNextStep();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, currentStep, fullName, phone, submitted]);

  if (!isOpen) return null;

  const handleNextStep = () => {
    setErrorMsg('');

    if (currentStep === 1) {
      if (!service) {
        setErrorMsg('Please select a service to proceed.');
        return;
      }
      setCurrentStep(2);
    } else if (currentStep === 2) {
      if (!fullName.trim()) {
        setErrorMsg('Please enter your name.');
        return;
      }
      setCurrentStep(3);
    } else if (currentStep === 3) {
      const cleanPhone = phone.replace(/\D/g, '');
      if (cleanPhone.length < 10) {
        setErrorMsg('Please enter a valid 10-digit mobile number.');
        return;
      }
      setCurrentStep(4);
    } else if (currentStep === 4) {
      setCurrentStep(5);
    }
  };

  const handlePrevStep = () => {
    setErrorMsg('');
    if (currentStep > 1) {
      setCurrentStep((prev) => prev - 1);
    }
  };

  const handleServiceSelect = (selectedLabel: string) => {
    setService(selectedLabel);
    setErrorMsg('');
    setTimeout(() => {
      setCurrentStep(2);
    }, 180);
  };

  const handleFinalSubmit = () => {
    const message = `*Enquiry & Appointment Request — Pooja Makeover and Salon*
📍 *Location:* Bank Chowk, Chetnapuri near PNB, Maharajganj, Siwan

• *Name:* ${fullName}
• *WhatsApp Number:* ${phone}
• *Service Interested In:* ${service}
• *Preferred Date:* ${date ? date : 'Flexible / Earliest available'}
• *Preferred Time:* ${timeSlot}
• *Additional Details:* ${notes ? notes : 'None'}

Looking forward to confirming appointment & rates with Pooja Makeover and Salon!`;

    const encoded = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/91${BUSINESS_INFO.phone}?text=${encoded}`;

    setSubmitted(true);

    setTimeout(() => {
      window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    }, 450);
  };

  const handleResetAndClose = () => {
    setSubmitted(false);
    setCurrentStep(1);
    onClose();
  };

  const progressPercent = Math.round((currentStep / totalSteps) * 100);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-[32px] overflow-hidden shadow-2xl border-2 border-[#D4AF37]/50 flex flex-col max-h-[92vh]">
        
        {/* Top Progress Bar (Typeform signature) */}
        <div className="w-full bg-neutral-100 h-1.5 relative overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-[#FF2E88] via-[#D4AF37] to-[#7B2FF7] transition-all duration-400 ease-out"
            style={{ width: `${submitted ? 100 : progressPercent}%` }}
          />
        </div>

        {/* Top Header Strip */}
        <div className="px-6 sm:px-8 py-4 bg-gradient-to-r from-[#2B0B3F] to-[#3B0E54] text-white flex items-center justify-between border-b border-[#D4AF37]/30">
          <div className="flex items-center gap-2.5">
            <span className="font-script-accent text-2xl text-[#FFF3C4] leading-none pt-0.5">Pooja</span>
            <span className="text-xs font-bold uppercase tracking-wider text-white/90">
              Makeover & Salon · Enquiry
            </span>
            <span className="hidden sm:inline-block text-[11px] text-[#FFF3C4] px-2 py-0.5 rounded-full bg-white/10 border border-white/20">
              Maharajganj
            </span>
          </div>

          <div className="flex items-center gap-3">
            {!submitted && (
              <span className="text-xs font-semibold text-[#FFF3C4] font-mono">
                {currentStep} / {totalSteps}
              </span>
            )}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Interactive Typeform Body */}
        <div className="p-6 sm:p-10 overflow-y-auto flex-1 flex flex-col justify-between">
          
          {submitted ? (
            /* Submission Success Screen */
            <div className="py-8 text-center my-auto space-y-5 animate-fadeIn">
              <div className="w-20 h-20 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto shadow-inner border-2 border-emerald-300">
                <CheckCircle2 className="w-12 h-12" />
              </div>

              <div>
                <h3 className="font-serif-elegant text-2xl sm:text-3xl font-bold text-[#2B0B3F]">
                  Request Sent to WhatsApp!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto mt-2 leading-relaxed">
                  Thank you, <strong>{fullName}</strong>. Your enquiry for <strong>{service}</strong> has been prepared for Pooja Makeover and Salon.
                </p>
              </div>

              <div className="p-4 rounded-2xl bg-[#FFF7F3] border border-[#D4AF37]/40 max-w-md mx-auto text-left text-xs sm:text-sm text-[#2B0B3F] space-y-1.5 shadow-sm">
                <div><strong>Service:</strong> {service}</div>
                <div><strong>Client:</strong> {fullName} ({phone})</div>
                <div><strong>Timing:</strong> {date ? date : 'Flexible'} · {timeSlot}</div>
                {notes && <div><strong>Notes:</strong> {notes}</div>}
              </div>

              <div className="pt-3 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#FF2E88] to-[#7B2FF7] shadow-lg flex items-center justify-center gap-2 hover:scale-105 active:scale-95 transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call: {BUSINESS_INFO.phone}</span>
                </a>

                <button
                  onClick={handleResetAndClose}
                  className="w-full sm:w-auto px-6 py-3 rounded-full text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 transition-colors cursor-pointer"
                >
                  Done & Close
                </button>
              </div>
            </div>
          ) : (
            /* Step-by-Step Questions */
            <div className="space-y-6 animate-fadeIn">
              
              {/* STEP 1: Service Selection */}
              {currentStep === 1 && (
                <div className="space-y-5">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2E88] uppercase tracking-wider mb-2">
                      <span>Question 1 of 5</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="font-serif-elegant text-2xl sm:text-3xl font-extrabold text-[#2B0B3F]">
                      Which service would you like to inquire about or book? *
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                      Choose any category below to immediately advance
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {SERVICE_OPTIONS.map((opt) => {
                      const isSelected = service === opt.label;
                      return (
                        <button
                          key={opt.id}
                          type="button"
                          onClick={() => handleServiceSelect(opt.label)}
                          className={`group text-left p-3.5 sm:p-4 rounded-2xl border-2 transition-all cursor-pointer flex items-start gap-3.5 ${
                            isSelected
                              ? 'border-[#FF2E88] bg-[#FFF0F6] shadow-md shadow-[#FF2E88]/15 ring-2 ring-[#FF2E88]/20'
                              : 'border-neutral-200 hover:border-[#D4AF37] hover:bg-[#FFF7F3] bg-white'
                          }`}
                        >
                          <span className="w-6 h-6 rounded-lg bg-neutral-100 group-hover:bg-[#FF2E88] group-hover:text-white text-[#2B0B3F] font-bold text-xs flex items-center justify-center shrink-0 border border-neutral-300 transition-colors">
                            {opt.key}
                          </span>
                          <span className="text-2xl shrink-0">{opt.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className="text-xs sm:text-sm font-bold text-[#2B0B3F] group-hover:text-[#FF2E88] transition-colors leading-snug">
                              {opt.label}
                            </div>
                            <div className="text-[11px] text-neutral-500 mt-0.5 line-clamp-1">
                              {opt.desc}
                            </div>
                          </div>
                          {isSelected && <Check className="w-4 h-4 text-[#FF2E88] shrink-0 mt-0.5" />}
                        </button>
                      );
                    })}
                  </div>
                </div>
              )}

              {/* STEP 2: Name Input */}
              {currentStep === 2 && (
                <div className="space-y-6 max-w-xl">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2E88] uppercase tracking-wider mb-2">
                      <span>Question 2 of 5</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="font-serif-elegant text-2xl sm:text-3xl font-extrabold text-[#2B0B3F]">
                      What is your full name? *
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                      Please let us know how to address you.
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="relative">
                      <User className="w-5 h-5 text-neutral-400 absolute left-0 top-1/2 -translate-y-1/2" />
                      <input
                        ref={nameInputRef}
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Type your name here..."
                        className="w-full pl-8 pr-4 py-3 border-b-2 border-neutral-300 focus:border-[#FF2E88] outline-none text-lg sm:text-xl font-medium text-[#2B0B3F] placeholder:text-neutral-300 bg-transparent transition-colors"
                      />
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-neutral-400 mt-3">
                      <span>Press</span>
                      <kbd className="px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-300 text-neutral-700 font-mono text-[10px]">
                        Enter ↵
                      </kbd>
                      <span>to continue</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 3: Phone / WhatsApp Number */}
              {currentStep === 3 && (
                <div className="space-y-6 max-w-xl">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2E88] uppercase tracking-wider mb-2">
                      <span>Question 3 of 5</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="font-serif-elegant text-2xl sm:text-3xl font-extrabold text-[#2B0B3F]">
                      What is your WhatsApp contact number? *
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                      We will send appointment confirmation & pricing details directly to this number.
                    </p>
                  </div>

                  <div className="pt-2">
                    <div className="flex items-center border-b-2 border-neutral-300 focus-within:border-[#FF2E88] transition-colors pb-1">
                      <div className="flex items-center gap-1.5 text-base sm:text-lg font-bold text-[#2B0B3F] pr-2 border-r border-neutral-300 select-none">
                        <span>🇮🇳 +91</span>
                      </div>
                      <input
                        ref={phoneInputRef}
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="99551 31867"
                        maxLength={14}
                        className="w-full pl-4 pr-4 py-3 outline-none text-lg sm:text-xl font-medium text-[#2B0B3F] placeholder:text-neutral-300 bg-transparent"
                      />
                    </div>
                    <div className="flex items-center gap-1 text-[11px] text-neutral-400 mt-3">
                      <span>Press</span>
                      <kbd className="px-1.5 py-0.5 rounded bg-neutral-100 border border-neutral-300 text-neutral-700 font-mono text-[10px]">
                        Enter ↵
                      </kbd>
                      <span>to continue</span>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 4: Preferred Date & Time Slot */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2E88] uppercase tracking-wider mb-2">
                      <span>Question 4 of 5</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="font-serif-elegant text-2xl sm:text-3xl font-extrabold text-[#2B0B3F]">
                      When would you like to visit our Maharajganj salon?
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                      Open 7 days a week: 10:30 AM to 7:00 PM.
                    </p>
                  </div>

                  <div className="space-y-4 pt-1">
                    {/* Date Picker */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-1.5">
                        Preferred Date (Optional)
                      </label>
                      <div className="relative max-w-sm">
                        <Calendar className="w-4 h-4 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
                        <input
                          type="date"
                          value={date}
                          onChange={(e) => setDate(e.target.value)}
                          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-neutral-300 focus:border-[#FF2E88] outline-none text-sm bg-white"
                        />
                      </div>
                    </div>

                    {/* Time Slot Options */}
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-600 mb-2">
                        Preferred Timing Slot
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {TIME_SLOTS.map((slot) => {
                          const isSelected = timeSlot === slot.label;
                          return (
                            <button
                              key={slot.id}
                              type="button"
                              onClick={() => setTimeSlot(slot.label)}
                              className={`p-3 rounded-xl border-2 text-left flex items-center justify-between text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                                isSelected
                                  ? 'border-[#FF2E88] bg-[#FFF0F6] text-[#2B0B3F] shadow-sm'
                                  : 'border-neutral-200 hover:border-neutral-300 bg-white text-neutral-700'
                              }`}
                            >
                              <span className="flex items-center gap-2">
                                <span>{slot.icon}</span>
                                <span>{slot.label}</span>
                              </span>
                              {isSelected && <Check className="w-4 h-4 text-[#FF2E88]" />}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* STEP 5: Additional Details & Final Review */}
              {currentStep === 5 && (
                <div className="space-y-5">
                  <div>
                    <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF2E88] uppercase tracking-wider mb-2">
                      <span>Question 5 of 5</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </div>
                    <h2 className="font-serif-elegant text-2xl sm:text-3xl font-extrabold text-[#2B0B3F]">
                      Any special requirements or event details?
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                      (Optional) Tell us about your wedding date, tattoo ideas, nail art references, or skin preferences.
                    </p>
                  </div>

                  <div>
                    <div className="relative">
                      <MessageSquare className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3.5" />
                      <textarea
                        rows={3}
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        placeholder="e.g. Wedding is on 15th Nov, need HD bridal makeup with rose floral hair bun..."
                        className="w-full pl-10 pr-4 py-3 rounded-2xl border-2 border-neutral-200 focus:border-[#FF2E88] outline-none text-sm text-[#2B0B3F] resize-none"
                      />
                    </div>
                  </div>

                  {/* Summary Box */}
                  <div className="p-4 rounded-2xl bg-[#FFF7F3] border border-[#D4AF37]/50 space-y-2 text-xs sm:text-sm text-[#2B0B3F]">
                    <div className="font-bold text-[#C2185B] flex items-center gap-1.5">
                      <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
                      <span>Review Your Enquiry Summary:</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-1 text-xs">
                      <div><strong>Service:</strong> {service}</div>
                      <div><strong>Client:</strong> {fullName}</div>
                      <div><strong>WhatsApp:</strong> {phone}</div>
                      <div><strong>Timing:</strong> {date ? date : 'Flexible'} · {timeSlot}</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Error Notification */}
              {errorMsg && (
                <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-medium animate-shake">
                  {errorMsg}
                </div>
              )}

            </div>
          )}

          {/* Bottom Action Footer with Typeform Navigation Controls */}
          {!submitted && (
            <div className="pt-6 border-t border-neutral-100 flex items-center justify-between gap-4 mt-6">
              <div>
                {currentStep > 1 ? (
                  <button
                    type="button"
                    onClick={handlePrevStep}
                    className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-semibold text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back</span>
                  </button>
                ) : (
                  <span className="text-[11px] text-neutral-400 hidden sm:inline">
                    Pooja Makeover & Salon · Maharajganj
                  </span>
                )}
              </div>

              <div>
                {currentStep < totalSteps ? (
                  <button
                    type="button"
                    onClick={handleNextStep}
                    className="px-6 py-3 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-[#FF2E88] to-[#7B2FF7] shadow-md shadow-[#FF2E88]/25 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer animate-shimmer"
                  >
                    <span>OK</span>
                    <Check className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={handleFinalSubmit}
                    className="px-7 py-3.5 rounded-full text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-700 shadow-xl shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all inline-flex items-center gap-2 cursor-pointer animate-shimmer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send to WhatsApp</span>
                    <CornerDownLeft className="w-3.5 h-3.5 opacity-80" />
                  </button>
                )}
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};
