'use client';

import * as React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { transitions } from '@/lib/motion-variants';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

function AccordionItem({ question, answer, isOpen, onClick }: AccordionItemProps) {
  return (
    <div 
      className={cn(
        "border-b border-slate-200 last:border-0 transition-colors duration-300",
        isOpen ? "bg-primary/[0.02]" : "hover:bg-slate-50/50"
      )}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between py-6 text-left outline-none"
        aria-expanded={isOpen}
      >
        <span className={cn(
          "text-lg font-black tracking-tight transition-colors duration-300",
          isOpen ? "text-primary" : "text-sgs-navy"
        )}>
          {question}
        </span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.4, ease: transitions.expo }}
          className={cn(
            "ml-4 flex-shrink-0 transition-colors duration-300",
            isOpen ? "text-primary" : "text-slate-400"
          )}
        >
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: transitions.expo }}
            className="overflow-hidden"
          >
            <div className="pb-8 text-base font-medium leading-relaxed text-slate-500 max-w-3xl">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Accordion({ items }: { items: { question: string; answer: string }[] }) {
  const [openIndex, setOpenIndex] = React.useState<number | null>(0);

  return (
    <div className="w-full max-w-4xl mx-auto border-t border-slate-200">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? null : index)}
        />
      ))}
    </div>
  );
}
