import underMaintenance from '@/assets/under_maintenance.jpg';
import Image from 'next/image';


export function Maintenance(){
  return(
    <main className="grid place-items-center w-screen h-screen">
      <Image src={underMaintenance} alt="Under Maintenance" className='object-cover' />
    </main>
  )
}

export default function Home() {
  return (
      // <main className="flex gap-8 row-start-2 items-center sm:items-start">
      //   <Image src={underMaintenance} alt="Under Maintenance" />
      //   </main>
      <Maintenance />
  );
}
