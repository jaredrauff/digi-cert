import React, { useState } from 'react';
import { ChevronDownIcon } from '@heroicons/react/solid';

interface DropdownProps {
    options: string[];
    value: string;
    onChange: (selected: string) => void;
}

const Dropdown: React.FC<DropdownProps> = ({ options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option: string) => {
        if (option === 'Select a movie') {
            onChange('');
        } else {
            onChange(option);
        }
        setIsOpen(false);
    };

    return (
        <div className="relative w-full">
            <button className="disabled:pointer-events-none disabled:opacity-50 relative py-3 px-4 pe-9 flex text-nowrap w-full cursor-pointer bg-white border border-gray-200 rounded-lg text-start text-sm focus:border-blue-500 focus:ring-blue-500 before:absolute before:inset-0 before:z-[1] dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600" onClick={() => setIsOpen(!isOpen)}>
                {value || 'Select a movie'}
                <ChevronDownIcon className="absolute top-1/2 right-3 -translate-y-1/2 w-5 h-5 text-gray-400"/>
            </button>
            {
                isOpen && (
                    <div className="absolute z-50 w-full max-h-[300px] p-1 space-y-0.5 bg-white border border-gray-200 rounded-lg overflow-hidden overflow-y-auto dark:bg-slate-900 dark:border-gray-700">
                        <div className="py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800" onClick={() => handleSelect('Select a movie')}>
                            Select a movie
                        </div>
                        {options.map(option => (
                            <div className="py-2 px-4 w-full text-sm text-gray-800 cursor-pointer hover:bg-gray-100 rounded-lg focus:outline-none focus:bg-gray-100 dark:bg-slate-900 dark:hover:bg-slate-800 dark:text-gray-200 dark:focus:bg-slate-800" key={option} onClick={() => handleSelect(option)}>
                                {option}
                            </div>
                        ))}
                    </div>
                )}
        </div>
    );
};

export default Dropdown;
