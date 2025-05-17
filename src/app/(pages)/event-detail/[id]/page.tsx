'use client'
import { useParams } from 'next/navigation';

import { EventComponent } from '@/app/_page-components/eventCard';

export default function Page() {
    const { id } = useParams();
    // const [states, setStates] = useState({
    //     openModal: false,
    // });
    // const { openModal } = states

    const events = [
        { id: 1, itemName: 'Concert', image: '/evnt1.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
        { id: 2, itemName: 'Concert', image: '/evnt2.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'GHC 300' },
        { id: 3, itemName: 'Concert', image: '/evnt3.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'GHC 300' },
        { id: 4, itemName: 'Concert', image: '/evnt4.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
    ];

    const event = events.find(item => item.id === parseInt(id as unknown as string));

    return (
        <div className="p-10">
            {event && (

                <div className="grid grid-cols-2">
                    <div className="w-full mb-5">
                        <picture>

                            <img src={event.image} className="w-full rounded-lg" alt={event.itemName} />
                        </picture>
                    </div>
                    <div className="text-center">
                        <h2 className="font-bold text-3xl mb-2">{event.itemName}</h2>
                        <p className="text-appGray text-base mb-4">
                            {event.date} at {event.time} <br />
                            <span className="uppercase">{event.location}</span>
                        </p>
                        <p className="text-lg">{event.cost}</p>
                        <p className="mt-4 text-sm text-gray-600">
                            This event offers a unique experience with live performances at the {event.location}. Join us for an unforgettable evening filled with music and excitement.
                        </p>
                    </div>
                </div>
            )}

            <div className="grid md:grid-cols-4 grid-cols-2 mb-20 gap-10">
                {events.map((item, index) => (
                    <div key={index}>
                        <EventComponent item={{
                            id: 0,
                            itemName: item.itemName,
                            image: item.image,
                            date: item.date,
                            time: item.time,
                            location: item.location,
                            cost: item.cost
                        }} />
                    </div>
                ))}
            </div>
         
        </div>
    )
}
