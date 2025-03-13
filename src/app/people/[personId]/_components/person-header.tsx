"use client"
import { Button } from "@/components/ui/button";
import InfoTile from "@/components/ui/info-tile";
import { getCurrentPerson } from "../../_data/person-store";


export default function PersonHeader() {
  const person = getCurrentPerson();

  if(!person)
    return <h1>Person not found</h1>;
  
  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-4 items-center justify-between">
        <InfoTile 
            title={person.name} 
            metadata={[
                { label:"Role", value:"Consultant" }
            ]}
             />
        
        <div className="flex gap-3 text-sm">
          <Button variant="outline" className="bg-accent/80 text-on-surface">
            Edit
          </Button>
        </div>
      </div>
    </div>
  );
}

