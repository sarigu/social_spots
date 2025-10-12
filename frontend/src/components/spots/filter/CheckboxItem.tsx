interface CheckboxItemProps {
  checked: boolean;
  onChange: () => void;
  children: React.ReactNode;
}

export default function CheckboxItem({ checked, onChange, children }: CheckboxItemProps){
    return (
        <label className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
            <input
            type="checkbox"
            checked={checked}
            onChange={onChange}
            className="rounded border-gray-300 text-[#87FFA2] focus:ring-[#87FFA2]"
            />
            {children}
        </label>
    )
};