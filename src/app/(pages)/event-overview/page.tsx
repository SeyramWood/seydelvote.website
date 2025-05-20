/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {
  useEffect,
  useState,
} from 'react';

import {
  Heading2A,
  Heading3,
  ParagraphText,
} from '@/app/_element-component/texts/text';
import { updateStates } from '@/funtions/generalUpdate';

interface Nominee {
    id: number;
    name: string;
    img: string;
    votes: number;
}

interface View {
    nominees: Nominee[];
    category: string;
}

export default function Page() {
    const [states, setStates] = useState<View>({
        nominees: [],
        category: '',
    });

    const categories = [
        {
            id: 1,
            name: 'Category1',
            nominees: [
                { id: 1, name: 'Nominee1', img: '/evnt1.png', votes: 500 },
                { id: 2, name: 'Nominee2', img: '/evnt2.png', votes: 300 },
                { id: 5, name: 'Nominee5', img: '/evnt5.png', votes: 200 },
                { id: 6, name: 'Nominee6', img: '/evnt6.png', votes: 350 },
                { id: 7, name: 'Nominee7', img: '/evnt7.png', votes: 250 },
            ]
        },
        {
            id: 2,
            name: 'Category2',
            nominees: [
                { id: 3, name: 'Nominee3', img: '/evnt3.png', votes: 700 },
                { id: 4, name: 'Nominee4', img: '/evnt4.png', votes: 450 },
            ]
        },
        {
            id: 3,
            name: 'Category3',
            nominees: [
                { id: 5, name: 'Nominee5', img: '/evnt5.png', votes: 200 },
                { id: 6, name: 'Nominee6', img: '/evnt6.png', votes: 350 },
            ]
        },
    ]

    useEffect(() => {
        if (states.nominees.length < 1) updateStates(setStates, { category: categories[0]?.name, nominees: categories[0]?.nominees })
    }, [states.nominees]);

    const isActive = (category: string) => category === states.category;

    const hoverStyle = (category: string) =>
        `hover:text-appOrange text-appGray cursor-pointer text-lg ${isActive(category) ? 'text-appOrange' : ''}`;
    return (
        <div className="w-full">
            <div className="p-3 ">
                <picture className=''>
                    <img src={'/evenBG1.jpg'} className="w-full h-[20rem] rounded-3xl " alt={''} />
                </picture>
            </div>

            <div className="flex px-10 mt-8">
                <div className="px-8">
                    <Heading3 classname='pb-4' text="Categories" />
                    {categories.map((category) => (
                        <div
                            onClick={() => {
                                updateStates(
                                    setStates,
                                    {
                                        nominees: category?.nominees,
                                        category: category?.name
                                    }
                                );

                            }}
                            key={category.id}
                            className="space-y-7 mt-4"
                        >
                            <ParagraphText classname={hoverStyle(category?.name)} text={category?.name} />
                        </div>
                    ))}
                </div>
                <div className="pl-20 pb-20">
                    <Heading2A classname='text-appOrange pb-7' text={states.category} />
                    <hr />
                    {states.nominees.map((nominee) => (
                        <div key={nominee.id} className="">
                            <div className="flex w-full gap-[20rem] my-5 items-center"   >
                                <picture>
                                    <img
                                        src={nominee.img}
                                        alt={nominee.name}
                                        className="w-12 h-12 rounded-full object-cover"
                                    />
                                </picture>

                                <div>{nominee.name}</div>
                                <div className='text-appOrange'>{nominee.votes} <span className="text-appGray">votes</span> </div>
                            </div>
                            <hr />
                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}