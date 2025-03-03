import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function Home() {

  const arrayList = [1, 2, 3, 4 ,5];

  return (
      // <main className="flex gap-8 row-start-2 items-center sm:items-start">
      //   <Image src={underMaintenance} alt="Under Maintenance" />
      //   </main>
      <main className="mx-8 px-2 grid place-items-center">
        <div className="mt-3 grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] w-full gap-x-4 gap-y-4">
          {arrayList.map(item => (
              <Card className={`bg-card rounded-lg border-t-[3px] shadow-2`}>
              <CardHeader className="text-center">
                <CardTitle className="text-sm">{item}</CardTitle>
                <CardDescription className="text-xs">Item</CardDescription>
              </CardHeader>
            </Card>
            ))}
        </div>
      </main>
  );
}
