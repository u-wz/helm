'use client'
import { X, Terminal } from 'lucide-react'
import { FeedbackForm } from './FeedbackForm'

interface FeedbackModalProps {
  onClose: () => void
}

export function FeedbackModal({ onClose }: FeedbackModalProps) {
  return (
    <>
      <div
        className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm animate-in fade-in duration-300 cursor-pointer"
        onClick={onClose}
      />

      <div className="fixed inset-0 z-[101] flex items-center justify-center p-2 sm:p-4 pointer-events-none">
        <div
          className="w-full max-w-2xl max-h-[95vh] overflow-hidden bg-[var(--bg-primary)] border-4 sm:border-8 border-black dark:border-white shadow-[8px_8px_0px_0px_#0A0A0A] dark:shadow-[8px_8px_0px_0px_#F5F5F0] animate-in zoom-in-95 slide-in-from-bottom-8 duration-300 pointer-events-auto flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="p-4 sm:p-6 border-b-4 sm:border-b-8 border-black dark:border-white bg-[#FFE500] dark:bg-neo-dark text-black dark:text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="hidden sm:flex p-2 bg-black dark:bg-white text-white dark:text-black border-2 border-black">
                <Terminal size={24} />
              </div>
              <div>
                <h2 className="font-heading font-black text-xl sm:text-2xl uppercase tracking-tighter">
                  Developers Feedback
                </h2>
                <p className="font-body text-[10px] sm:text-xs font-bold opacity-80 uppercase tracking-widest mt-0.5">
                  Help us build Helm
                </p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="border-2 sm:border-4 border-black dark:border-white p-1 hover:bg-black hover:text-[#FFE500] dark:hover:bg-white dark:hover:text-black transition-all cursor-pointer"
              title="Close"
            >
              <X size={24} strokeWidth={3} />
            </button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto flex-1 scrollbar-thin">
            <div className="p-4 sm:p-8">
              <div className="mb-8 border-4 border-black dark:border-white p-4 bg-neo-blue/5 dark:bg-neo-blue/10">
                <p className="font-body text-sm sm:text-base leading-relaxed font-medium">
                  We&apos;re building <span className="font-black text-neo-pink underline decoration-2 underline-offset-4">Helm</span> to be the guide for new developers.
                  Your insights on roadmaps and content directly shape the next version.
                </p>
              </div>

              <FeedbackForm onSuccess={onClose} />
            </div>
          </div>

          {/* Footer */}
          <div className="p-3 sm:p-4 border-t-4 sm:border-t-8 border-black dark:border-white bg-black dark:bg-white text-white dark:text-black flex justify-between items-center text-[10px] font-heading font-bold uppercase tracking-widest">
            <span className="flex items-center gap-2">
              <span className="text-neo-green">●</span> Secure Connection
            </span>
            <span className="opacity-60">Helm Open Source Project</span>
          </div>
        </div>
      </div>
    </>
  )
}