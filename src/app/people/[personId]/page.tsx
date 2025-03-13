import path from "path";
import { promises as fs } from "fs";
import { z } from "zod";
import { PersonSchema } from "../_data/people-schema";
import PersonHeader from "./_components/person-header";
import PersonDetails from "./_components/person-details";
import { PersonProvider } from "../_data/person-provider";

interface PersonDetailsPage {
  params: Promise<{ personId: string }>;
}

async function getPersonAsync(id: string) {
  const data = await fs.readFile(
    path.join(process.cwd(), "src/app/people/_data/people.json")
  );
  const people = JSON.parse(data.toString());
  const peopleArray = z.array(PersonSchema).parse(people);
  console.log(peopleArray)
  return peopleArray.find((person) => person.id == id);
}

export default async function PersonDetailsPage({ params }: PersonDetailsPage) {
  const id = (await params).personId;
  const person = await getPersonAsync(id);

  if (!person) return <h1>Person not found</h1>;

  return (
    <div className="p-5">
      <div className="flex flex-col gap-2">
        <PersonProvider person={person}>
            <PersonHeader />
            <PersonDetails />
        </PersonProvider>
      </div>
    </div>
  );
}
