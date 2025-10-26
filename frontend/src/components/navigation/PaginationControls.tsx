'use client';

import ArrowButton from "@/components/navigation/ArrowButton";

interface PaginationControlsProps {
  currentPage: number;
  totalPages: number;
  onPrev: () => void;
  onNext: () => void;
}

export default function PaginationControls({
  currentPage,
  totalPages,
  onPrev,
  onNext
}: PaginationControlsProps) {
  return (
    <div className="flex justify-center items-center gap-4 mt-4">
      <ArrowButton
        direction="left"
        onClick={onPrev}
        disabled={currentPage === 0}
      />

      <span className="text-sm text-gray-600 font-medium">
        Page {currentPage + 1} of {totalPages}
      </span>

      <ArrowButton
        direction="right"
        onClick={onNext}
        disabled={currentPage === totalPages - 1}
      />
    </div>
  );
}
