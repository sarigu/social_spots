'use client';

interface ArrowButtonProps {
  direction: 'left' | 'right';
  onClick: () => void;
  disabled?: boolean;
}

export default function ArrowButton({
  direction,
  onClick,
  disabled = false
}: ArrowButtonProps) {
  const isLeft = direction === 'left';

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className="p-2 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200 disabled:opacity-40 transition-colors"
    >
      <svg
        className={`w-5 h-5 text-gray-700 ${isLeft ? '' : 'rotate-180'}`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </button>
  );
}
