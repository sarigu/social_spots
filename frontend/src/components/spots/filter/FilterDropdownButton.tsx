interface FilterDropdownButtonProps {
  label: string;
  count: number;
  isOpen: boolean;
  onClick: () => void;
}

export default function FilterDropdownButton({ label, count, isOpen, onClick }: FilterDropdownButtonProps){
    return (
        <button
            onClick={onClick}
            className={`flex items-center gap-2 px-4 py-2 bg-white border rounded-lg ${
                count > 0 ? 'border-[#87FFA2] bg-accent/50' : 'border-black'
            }`}
        >
            <span className="font-semibold text-sm">{label}</span>

            {count > 0 && (
                <span className="px-1.5 py-0.5 text-xs bg-accent text-gray-900 rounded-full font-semibold">
                    {count}
                </span>
            )}
            <svg 
                className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
            >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
        </button>
    );
}