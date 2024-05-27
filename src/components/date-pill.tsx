"use client";
import { useEffect, useState } from "react";
import { Calendar } from "./ui/calendar";
import { Dialog, DialogContent, DialogTrigger } from "./ui/dialog";
import PocketBase from "pocketbase";
import { ChevronDownIcon } from "lucide-react";

const pb = new PocketBase("https://agios-calendar.pockethost.io");
pb.autoCancellation(false);
function DatePill({ data, setData }: any) {
  async function updateDate(
    day: any,
    selectedDay: any,
    activeModifiers: any,
    e: any
  ) {
    console.log(`Looking for: ${day.toISOString().split("T")[0]}`);
    const record = await pb.collection("occasion").getList(1, 10, {
      sort: "-created",
      filter: 'date ~ "' + day.toISOString().split("T")[0] + '"',
      expand: "copticDate,facts,icons,stories"
    });
    if (record.items.length === 0) {
      alert("No data found for this date");
      return;
    }
    if (!record.items[0].expand) {
      alert("Data is Incomplete!")
      return;
    }
    record.items[0].date = new Date(record.items[0].date);
    record.items[0].copticDate = record.items[0].expand.copticDate;
    record.items[0].facts = record.items[0].expand.facts;
    record.items[0].icons = record.items[0].expand.icons;
    record.items[0].stories = record.items[0].expand.stories;
    setData(record.items[0]);
    // return record.items[0];
  }

  return (
    <>
      <Dialog>
        <DialogTrigger asChild>
          <div className='flex items-center justify-center'>
            <div className='flex items-center text-secondary font-bold justify-center bg-secondary-foreground rounded-full px-4 py-2'>
              <span className='text-sm flex items-center gap-2'>
                {data.date.toLocaleDateString()} | {data.copticDate?.month}{" "}
                {data.copticDate?.day} <ChevronDownIcon size={"20px"} />
              </span>
            </div>
          </div>
        </DialogTrigger>
        <DialogContent className='mx-auto w-fit rounded-lg'>
          <div className='w-full flex justify-center items-center'>
            <Calendar
              mode='single'
              defaultMonth={data.date}
              selected={data.date}
              onSelect={updateDate}
              className='self-center'
            />
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default DatePill;
