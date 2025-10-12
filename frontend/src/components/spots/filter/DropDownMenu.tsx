interface DropdownMenuProps {
  children: React.ReactNode;
  width?: string;
}

export default function DropdownMenu({ children, width = 'w-56' }: DropdownMenuProps){
    return (
        <div className={`absolute top-full left-0 mt-2 ${width} bg-white border border-gray-200 rounded-lg shadow-lg z-[99999] p-3`}>
            <div className="space-y-1 max-h-64 overflow-y-auto">
            {children}
            </div>
        </div>
    )
};