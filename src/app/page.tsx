'use client'
import { useState } from 'react';

import {
  ArrowRight,
  Check,
} from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

import { updateStates } from '@/funtions/generalUpdate';

import { CustomButton } from './_element-component/button/button';
import { CustomModal } from './_element-component/dialog/modal';
import { CustomInput } from './_element-component/input/input';
import {
  Heading1,
  Heading2,
  Heading3,
  ParagraphText,
} from './_element-component/texts/text';
import { EventComponent } from './_page-components/eventCard';

export default function Page() {
  const [states, setStates] = useState({
    openModal: false
  });
  const data1 = [
    { id: 1, item: 'unlimited events' },
    { id: 2, item: 'Secure payments' },
    { id: 3, item: '24/7 chat support' },
    { id: 4, item: 'Event management' },
    { id: 5, item: 'Custom data collection' },
  ]

  const events = [
    { id: 1, itemName: 'Concert', image: '/evnt1.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
    { id: 2, itemName: 'Concert', image: '/evnt2.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'GHC 300' },
    { id: 3, itemName: 'Concert', image: '/evnt3.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'GHC 300' },
    { id: 4, itemName: 'Concert', image: '/evnt4.png', date: 'Wed, Dec 13, 2022', time: '5:00 PM', location: 'Logical night club', cost: 'Free ticket' },
  ]
  const route=useRouter()
  return (
    <div>
      <CustomModal
        open={states.openModal}
        title={''}
        content={
          <div>
            <div className="grid grid-cols-2 ">
              <div className="w-full">
                <picture>
                  <img src="/evnt1.png" className="w-full " alt="" />
                </picture>
              </div>
              {/* <Image src="/evnt1.png" className="h-full" height={100} width={400} alt="event banner" /> */}
              <div className="">
                <div className="h-24 w-24 text-center rounded-full overflow-hidden">
                  <Image src="/user.jpg" className="w-full h-full" width={100} height={100} alt="contestant avatar" />
                </div>
                <Heading3 text={'John Doe'} classname={'text-2xl'} />
                <div className="flex space-x-2 py-2 text-appGray ">
                  <ParagraphText text={'Category: '} classname={'text-sm font-light'} />
                  <ParagraphText text={'User category '} classname={'text-sm font-light'} />
                </div>
                <ParagraphText
                  text={'This category includes events that are located at various venues and differ in duration.'}
                  classname={'text-xs! text-appGray font-light'}
                />
              </div>
            </div>
            <div className="flex items-center w-full px-7 pt-5 space-x-3 ">
              <CustomInput
              type='number'
                className='h-10 rounded-4xl '
                placeholder={'Enter number of votes to cast'}
                name={'votes'}
              />
              <CustomButton
                view={'primary'}
                classname='h-10'
                label={'Proceed to payment'}
                onClick={() =>{
                  route.push('/payment')
                  updateStates(setStates, { openModal: false })} }/>
            </div>
          </div>
        }
        onClose={() => updateStates(setStates, { openModal: false })}
      />


      <div className="px-10 ">
        <div className="w-1/6 mt-32 ">
          <hr className="border border-red-500" />
        </div>
        <div className="  w-4/6  mt-10 mb-20 ">
          <Heading1 text={'Vote Online and Buy Tickets for Events with'} classname={''} />
          <Heading1 text={'Company'} classname={'text-appOrange'} />
        </div>
        <div className="w-2/6">
          <ParagraphText
            classname='px-3 text-appGray mt-10 mb-2'
            text={'Enter the unique code of the contestant you want to vote for.'}
          />
          <div className="flex space-x-3">
            <CustomInput className='h-10 rounded-4xl' placeholder={'Enter code to vote'} name={'code'} />
            <CustomButton
              view={'secondary'}
              classname='h-10'
              label={'Cast vote'}
              onClick={() => updateStates(setStates, { openModal: true })} />
          </div>
        </div>
      </div>

      <div className=" absolute -translate-y-[32rem] w-full flex justify-end ">
        <Image src={'/Group.png'} width={500} height={100} alt="" />
      </div>

      <div className="w-full mt-8 bg-appOrange px-32 pb-20 text-white">
        <div className="text-white  p-10 text-center">
          <Heading2 text={' Explore our pricing plans for events of all sizes'} classname={'text-white'} />
        </div>
        <div className="text-center">
          <CustomButton
            view={'primary'}
            onClick={() => { }}
            classname='h-14 border border-white! text-lg!'
            icon={<ArrowRight size={20} />}
            label={'See all plans'} />
        </div>

        <div className="rounded-2xl my-10 text-black p-16 bg-white">
          <div className="flex pl-[15rem] justify-center">
            <ParagraphText text={'Your premiere e-voting solution'}
              classname={'rounded-xl bg-appLightOrange1 px-3 py-3'} />
          </div>
          <div className="grid grid-cols-2 ">
            <div className="">
              <Image src={'/user1.png'} width={400} height={200} alt='' />
            </div>
            <div className="">
              <Heading3 text={'E-Voting Solution'} classname='my-8' />
              <ParagraphText text={'Experience the leading e-voting platform designed for secure, efficient and reliable online voting'} classname='mb-10' />
              <div className="grid grid-cols-2 gap-8 capitalize">
                {data1.map((item) => (
                  <div className="text-black" key={item.id}>
                    <div className="flex items-center space-x-3">
                      <span className='rounded-full p-3 bg-appLightOrange1'>
                        <Check className='text-appOrange' />
                      </span>
                      <ParagraphText text={item.item} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="rounded-2xl text-black p-16 bg-white relative">
          <div className="flex justify-start">
            <ParagraphText
              text={'Event management with ease'}
              classname={'rounded-xl bg-appLightOrange1 px-3 py-3 text-center'}
            />
          </div>

          <div className="grid grid-cols-2 ">
            <div className="">
              <div className="font-semibold text-2xl my-8 px-1">
                Sell Your Event Tickets Online
              </div>
              <p className='mb-10'>Seamlessly sell your event tickets online with our fast, free and unlimited platform</p>
              <div className="grid grid-cols-2 gap-4 capitalize">
                {data1.map((item) => (
                  <div className="text-black" key={item.id}>
                    <div className="flex items-center space-x-3">
                      <span className='rounded-full p-3 bg-appLightOrange1'>
                        <Check className='text-appOrange' />
                      </span>
                      <span>{item.item}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="">
              <Image className='rounded-2xl' src={'/evnts.jpg'} width={400} height={1500} alt='' />
            </div>
          </div>
          <div className="absolute h-14 flex justify-center items-center top-0 right-0 p-2 bg-appLightOrange2 rounded-bl-md rounded-tr-xl">
            <span className="text-white">Coming soon</span>
          </div>
        </div>
      </div>

      <div className="px-32">
        <div className="flex justify-between my-20">
          <div className="text-4xl font-semibold">Ongoing Events </div>
          <div className=""><CustomButton view='secondary' label='View more' /></div>
        </div>
        {/* card */}
        <div className="grid grid-cols-4 mb-20 gap-10">
          {events.map((item, index) => (
            <div className="" key={index}>
              <EventComponent item={{
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
        <div className="flex-col mt-32 justify-center pb-10 items-center">
          <div className="font-bold text-6xl px-10 text-center">
            Effortlessly manage events from registration to showtime.
          </div>
          <div className="my-8 flex-col justify-center text-center px-40">
            <CustomInput className='border' name={''} placeholder='Enter your email address' />
            <CustomButton view='primary' classname='mt-6' label='Subscribe' />
          </div>
        </div>
      </div>
    </div>
  )
}