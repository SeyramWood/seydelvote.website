import * as React from 'react';

import { ChevronDown } from 'lucide-react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export interface DropdownProps {
    triggerLabel: string;
    items: { label: string; onClick: () => void }[];
    classname?: string;
}

export const CustomDropdown: React.FC<DropdownProps> = ({ triggerLabel, items, classname }) => {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className={`${classname} flex items-center focus:outline-none`}>
                {triggerLabel} <ChevronDown size={16} className='pt-1' />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {items.map((item, index) => (
                    <DropdownMenuItem key={index} onClick={item.onClick} className='focus:outline-none'>
                        {item.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

