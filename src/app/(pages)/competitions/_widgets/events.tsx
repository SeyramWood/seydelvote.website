'use client'
import { CustomSelect } from '@/app/_element-component/input/input';
import { CustomPagination } from '@/app/_element-component/input/pagination';
import { EventComponent } from '@/app/_page-components/eventCard';

export default function Events() {
  const events = [
    { id: 1, itemName: 'Concert', image: '/evnt1.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
    { id: 2, itemName: 'Concert', image: '/evnt2.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'GHC 300' },
    { id: 3, itemName: 'Concert', image: '/evnt3.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'GHC 300' },
    { id: 4, itemName: 'Concert', image: '/evnt4.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
  ]
  return (
    <div className="p-10">
      <div className="flex py-10 justify-between">
        <div className="font-bold text-4xl  text-appOrange">Competitions</div>
        <div className="flex  items-center">
          <div className="border rounded-2xl flex items-center justify-between">
            {/* inputs */}

            <CustomSelect
              className='h-7 border-none w-60 ring-none active:ring-none selection:bg-none  bg-transparent!'
              placeholder='Select event period'
              name={''}
              options={[
                { value: 'allEvents', label: 'All events' },
                { value: 'currentEvents', label: 'Current events ' },
                { value: 'upcomingEvents', label: 'Upcoming events' },
                { value: 'pastEvents', label: 'Past events' },
              ]}
            />
            {/* |
            <CustomInput
             className='h-7 border-none! w-60 ring-none! active:ring-none! selection:border-none!  bg-transparent! '
              placeholder='Filter' name={''} 
              /> */}
          </div>
          {/* <div className="rounded-2xl text-appOrange cursor-pointer hover:underline px-5 py-2">Clear </div> */}
        </div>
      </div>
      <div className="grid md:grid-cols-4 grid-cols-2 mb-20 gap-10">
        {events.map((item, index) => (
          <div className="" key={index}>
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
      <div className="">
        <CustomPagination
          currentPage={1} totalPages={10}
          onPageChange={() => { }}
        />
      </div>
    </div>
  )
}