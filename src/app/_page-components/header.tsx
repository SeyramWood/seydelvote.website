'use client';
import { useRouter } from 'next/navigation';

import { CustomInput } from '../_element-component/input/input';
import { CustomDropdown } from '../_element-component/menu/menu';

export default function Header() {
    const router = useRouter();
    const handleRoute = (url: string) => router.push(url);
    const menuItems = [
        {
            name: 'Home',
            url: '/'
        },
        // {
        //     name: 'Discover',
        //     url: '/discover'
        // },
        {
            name: 'Events',
            url: '/competitions'
        },
        {
            name: 'Products',
            url: '/products',
            children: [{
                label: 'E-voting',
                onClick: () => console.log('dfdfdfdf')
            }, {
                label: 'Ticketing',
                onClick: () => console.log('dfdfdfdf')
            }
        ]
        },
        {
            name: 'Pricing',
            url: '/pricing'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Contact',
            url: '/contact'
        }
    ]
    return (
        <div className="bg-appLightOrange w-full text-[0.9rem] px-32 h-18 flex items-center justify-between ">
            <div className="">
                Logo icon
            </div>
            <div className="flex space-x-4 text-appLightOrange2 tex">
                {menuItems.map((item, index) => (
                    <span
                        key={index}
                        className="hover:font-700 hover:text-appOrange cursor-pointer text-md hover:underline decoration-[0.18em] underline-offset-14"
                    >
                        {item.name === 'Products' ?
                            <>
                                <CustomDropdown triggerLabel={item.name} items={item?.children || []} />
                            </> :
                            <span
                                onClick={() => handleRoute(item.url)}
                            >
                                {item.name}
                            </span>
                        }
                    </span>
                ))}
            </div>
            <div className="flex justify-between space-x-3">
                <CustomInput name={'search'} placeholder='search' className='h-8 rounded-2xl! bg-appLightOrange1' />
                {/* <div>|</div>
                <div className="text-appOrange cursor-pointer">Login</div>
                <div className="rounded-full px-1 cursor-pointer bg-appOrange hover:bg-appLightOrange2 text-white">Sign Up</div> */}
            </div>
        </div>
    )
}