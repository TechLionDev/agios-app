"use client";
import DatePill from "@/components/date-pill";
import Icons from "@/components/icons";
import Loading from "@/components/loading";
import { useEffect, useState } from "react";
function HomePage() {
  const [data, setData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      // let data = await fetch('https://api.agios.co/get/today').then(
      // (res) => res.json()
      // );
      let data = await fetch(
        "https://api.agios.co/occasions/get/6acpnuwkjb2x6wt"
      ).then((res) => res.json());
      data = data.data;
      data.date = new Date(data.date);
      setData(data);
      setLoading(false);
    })();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className='flex flex-col items-center gap-3'>
        <img src='/Header.svg' className='w-full pt-6 px-6' />
        <h1 className='font-bold text-2xl mx-auto w-5/6 p-2 text-center text-primary'>
          {data.name}
        </h1>
        <DatePill data={data} setData={setData} />
        <Icons data={data} setData={setData} />
      </div>
    </>
  );
}

export default HomePage;
