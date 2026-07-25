import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Phone, MessageCircle } from "lucide-react";

const WA_NUMBER = "918989496800";
const WA_MESSAGE = encodeURIComponent(
  "Hi AKNA Capital, I'd like to know more about your services. Can we set up a quick call?"
);
const WA_URL = `https://wa.me/${WA_NUMBER}?text=${WA_MESSAGE}`;
const CALL_URL = "tel:+918989496800";

const stagger = {
  hidden: { opacity: 0, scale: 0.7, y: 12 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: i * 0.08, type: "spring" as const, stiffness: 280, damping: 22 },
  }),
  exit: { opacity: 0, scale: 0.7, y: 12, transition: { duration: 0.15 } },
};

export function FloatingCTA() {
  const [visible, setVisible]   = useState(false);
  const [open, setOpen]         = useState(false);
  const [dismissed, setDismissed] = useState(false);

  // Delay initial appearance
  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // Auto-open speed-dial once after appearance, then auto-close
  useEffect(() => {
    if (!visible) return;
    const openTimer  = setTimeout(() => setOpen(true),  600);
    const closeTimer = setTimeout(() => setOpen(false), 5600); // 600 open + 5000 shown
    return () => { clearTimeout(openTimer); clearTimeout(closeTimer); };
  }, [visible]);

  if (dismissed) return null;

  const actions = [
    {
      label: "Call Us",
      sublabel: "+91-8989496800",
      icon: Phone,
      onClick: () => { setOpen(false); window.location.href = CALL_URL; },
      className: "bg-primary hover:bg-primary/90 text-primary-foreground",
    },
    {
      label: "WhatsApp Us",
      sublabel: "Usually reply within hours",
      icon: MessageCircle,
      onClick: () => { setOpen(false); window.open(WA_URL, "_blank", "noopener,noreferrer"); },
      className: "bg-[#25D366] hover:bg-[#1ebe5d] text-white",
    },
  ];

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.85 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 24, scale: 0.85 }}
          transition={{ type: "spring", stiffness: 260, damping: 22 }}
          className="fixed bottom-6 right-5 z-[9999] flex flex-col items-end gap-3"
        >
          {/* Speed-dial action buttons */}
          <AnimatePresence>
            {open && (
              <motion.div
                className="flex flex-col items-end gap-2.5"
                initial="hidden"
                animate="visible"
                exit="exit"
              >
                {actions.map((action, i) => {
                  const Icon = action.icon;
                  return (
                    <motion.button
                      key={action.label}
                      custom={actions.length - 1 - i}
                      variants={stagger}
                      onClick={action.onClick}
                      className={`flex items-center gap-3 pl-3 pr-4 py-2.5 rounded-full shadow-lg transition-transform duration-150 hover:-translate-y-0.5 ${action.className}`}
                    >
                      <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                        <Icon className="w-4 h-4" />
                      </div>
                      <div className="text-left">
                        <p className="text-sm font-semibold leading-none">{action.label}</p>
                        <p className="text-[10px] opacity-75 mt-0.5 leading-none">{action.sublabel}</p>
                      </div>
                    </motion.button>
                  );
                })}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main toggle + dismiss row */}
          <div className="flex items-center gap-2">
            {/* Dismiss */}
            <button
              onClick={() => setDismissed(true)}
              className="w-7 h-7 rounded-full bg-foreground/10 hover:bg-foreground/20 text-foreground flex items-center justify-center transition-colors"
              aria-label="Dismiss contact widget"
            >
              <X className="w-3.5 h-3.5" />
            </button>

            {/* Toggle button */}
            <motion.button
              onClick={() => setOpen((o) => !o)}
              animate={{ rotate: open ? 45 : 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              aria-label={open ? "Close contact options" : "Open contact options"}
              className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-xl hover:shadow-2xl flex items-center justify-center transition-shadow duration-200 hover:-translate-y-0.5"
            >
              {/* Chat bubble SVG */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-6 h-6"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M4.848 2.771A49.144 49.144 0 0 1 12 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 0 1-3.476.383.39.39 0 0 0-.297.17l-2.755 4.133a.75.75 0 0 1-1.248 0l-2.755-4.133a.39.39 0 0 0-.297-.17 48.9 48.9 0 0 1-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97Z"
                  clipRule="evenodd"
                />
              </svg>
            </motion.button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
