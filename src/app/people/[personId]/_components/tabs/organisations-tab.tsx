import { getCurrentPerson } from "@/app/people/_data/person-store";
import { Button } from "@/components/ui/button";
import InfoTile from "@/components/ui/info-tile";

export default function PersonOrganisationsTab() {
  const person = getCurrentPerson();
  if (!person) return <>Person not found</>;

  return (
    <div className="panel">
      <div className="panel-header flex justify-between">
        <h2 className="section-title">All Organizations</h2>
        <Button variant="outline" size="sm" className="button-hover shadow-sm">
          Add Organisation
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
        {person.organisations.map((org) => (
          <div key={org.id} className="panel hover-scale">
            <InfoTile
              key={org.id}
              title={org.name}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
