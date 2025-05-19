'use client'
import { CustomAccordion } from '@/app/_element-component/input/acordian';
import {
  Heading2,
  Heading2A,
  Heading3,
  ParagraphText,
} from '@/app/_element-component/texts/text';

export default function Page() {
    const hoverStyle = 'hover:text-black cursor-pointer';
    const categories = [
        {
            value: 'best-movie',
            trigger: 'Best Movie',
            content: (
                <div className="text-appGray space-y-3">
                    <div onClick={() => { }} className={hoverStyle}>The Godfather</div>
                    <div onClick={() => { }} className={hoverStyle}>The Shawshank Redemption</div>
                    <div onClick={() => { }} className={hoverStyle}>The Dark Knight</div>
                    <div onClick={() => { }} className={hoverStyle}>12 Angry Men</div>
                </div>
            ),
        },
        {
            value: 'best-actor',
            trigger: 'Best Actor',
            content: (
                <div className="text-appGray space-y-3">
                    <div onClick={() => { }} className={hoverStyle}>Tom Hanks</div>
                    <div onClick={() => { }} className={hoverStyle}>Robert De Niro</div>
                    <div onClick={() => { }} className={hoverStyle}>Al Pacino</div>
                    <div onClick={() => { }} className={hoverStyle}>Leonardo DiCaprio</div>
                    <div onClick={() => { }} className={hoverStyle}>Johnny Depp</div>
                </div>
            ),
        },
        {
            value: 'best-actress',
            trigger: 'Best Actress',
            content: (
                <div className="text-appGray space-y-3">
                    <div onClick={() => { }} className={hoverStyle}>Meryl Streep</div>
                    <div onClick={() => { }} className={hoverStyle}>Katharine Hepburn</div>
                    <div onClick={() => { }} className={hoverStyle}>Ingrid Bergman</div>
                    <div onClick={() => { }} className={hoverStyle}>Julie Andrews</div>
                    <div onClick={() => { }} className={hoverStyle}>Audrey Hepburn</div>
                </div>
            ),
        },
    ];

    // const cat = [
    //     {
    //         id: 1, name: 'Best Movie',
    //         nominees: [
    //             { id: 1, name: 'The Godfather', votes: 4000 },
    //             { id: 1, name: 'The Shawshank Redemption', votes: 4000 },
    //             { id: 1, name: 'The Dark Knight', votes: 4000 },
    //             { id: 1, name: '12 Angry Men', votes: 4000 },
    //         ]
    //     },
    //     {
    //         id: 2, 
    //         name: 'Best Actor',
    //         nominees: [
    //             { id: 1, name: 'Tom Hanks', votes: 4000 },
    //             { id: 1, name: 'Robert De Niro', votes: 4000 },
    //             { id: 1, name: 'Al Pacino', votes: 4000 },
    //             { id: 1, name: 'Leonardo DiCaprio', votes: 4000 },
    //             { id: 1, name: 'Johnny Depp', votes: 4000 },
    //         ]
    //     },
    //     {
    //         id: 3, name: 'Best Actress',
    //         nominees: [
    //             { id: 1, name: 'Meryl Streep', votes: 4000 },
    //             { id: 1, name: 'Katharine Hepburn', votes: 4000 },
    //             { id: 1, name: 'Ingrid Bergman', votes: 4000 },
    //             { id: 1, name: 'Julie Andrews', votes: 4000 },
    //             { id: 1, name: 'Audrey Hepburn', votes: 4000 },
    //         ]
    //     },
    // ]

  
    return (
        <div className="w-full">
            <picture className='rounded-lg '>
                <img src={'/evenBG1.jpg'} className="w-full h-[20rem] " alt={''} />
            </picture>
            <div className="p-10 my-20 flex">
                <div className="">
                    <Heading2 text="Categories" />
                    <CustomAccordion
                        items={categories} />
                </div>
                <div className="grid grid-cols-2  w-full">
                    <div className="h-full w-full">
                        <picture>
                            <img src={'/evnt2.png'} className="h-full w-[60rem] " alt={''} />
                        </picture>
                    </div>
                    <div className="w-full">

                        <div className="text-right">
                            <Heading3 classname="text-appOrange" text="4000 votes" />
                        </div>
                        <div className="">
                            <Heading2A classname='' text="Nominee name" />
                            <Heading3 classname='text-appGray' text="Category " />
                        </div>
                        <div className="my-3">
                            <Heading3 classname='pb-2' text="Summary" />
                            <div className="">
                                <ParagraphText classname='text-appGray text-sm' text={`
                                The nominee is a dedicated community leader and founder of Youth Rising Foundation, an organization focused on empowering underprivileged youth through skills training and education. Born in Sekondi-Takoradi, Ghana, the nominee was inspired by the challenges around them to create change from the ground up.
                                Since 2015, their foundation has trained over 3,000 young people in trades, technology, and entrepreneurship, helping many start businesses or find meaningful work. Their efforts also include promoting girls in STEM, organizing literacy programs, and leading health outreach initiatives.
                                Nominated for the Outstanding Community Leadership Award, the nominee exemplifies grassroots leadership, service, and lasting impact. Their work continues to uplift lives and strengthen communities across Ghana.
                                    `} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}