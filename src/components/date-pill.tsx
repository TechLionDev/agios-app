"use client";
import { useEffect, useState } from "react";
import { Calendar } from "./ui/calendar";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import PocketBase from 'pocketbase';

const pb = new PocketBase('https://agios-calendar.pockethost.io');
pb.autoCancellation(false);
function DatePill({ data, setData }: any) {
  const [date, setDate] = useState<Date | undefined>(new Date(data.date));

  useEffect(() => {
    (async () => {
        if (date) {
            setData({
              ...data,
              date: date.toUTCString(),
              copticDate: await getCopticDate(date),
            });
          }
    })();
  }, [date]);

  return (
    <>
      {/* dialog */}
      <Dialog>
        <DialogTrigger asChild>
          <div className='flex items-center justify-center'>
            <div className='flex items-center bg-secondary justify-center border text-secondary-foreground rounded-full px-4 py-2'>
              <span className='text-xs'>
                {date?.toLocaleDateString()} |{" "}
                {data.copticDate?.month} {data.copticDate?.day}
              </span>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className='mx-auto w-fit rounded-lg'>
          <div className='w-full flex justify-center items-center'>
            <Calendar
              mode='single'
              defaultMonth={date}
              selected={date}
              onSelect={setDate}
              className='self-center'
            />
          </div>
        </DialogContent>
      </Dialog>
      {/* drawer */}
    </>
  );
}

export default DatePill;
async function getCopticDate(date: Date) {
    const copticDate = await pb.collection('copticDate').getList(1,10,{
        sort: '-created',
        filter: 'gregorianDate ~ "' + date.toISOString().split('T')[0] + '"',
    });
    return copticDate.items[0];
}