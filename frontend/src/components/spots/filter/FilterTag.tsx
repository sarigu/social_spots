interface FilterTagProps {
  onRemove: () => void;
  children: React.ReactNode;
}

export default function FilterTag({ onRemove, children }: FilterTagProps){
    return (
        <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-muted text-sm rounded-full">
            {children}
            <button onClick={onRemove} className="hover:text-gray-900">
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            </button>
        </span>
    )
};
