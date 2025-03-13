import { getCurrentPerson } from "@/app/people/_data/person-store";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function PersonNotesTab() {
  const person = getCurrentPerson();
  if (!person) return;

  return (
    <div className="panel">
      <div className="panel-header flex justify-between">
        <h2 className="section-title">Notes</h2>
        <Button variant="outline" size="sm" className="button-hover shadow-sm">
          Add Note
        </Button>
      </div>
      {person.notes ? (
        <div className="bg-card rounded-lg border border-outline p-4 mt-2">
          <div className="flex justify-between">
            <div className="flex items-center">
              <FileText className="h-4 w-4 text-muted mr-2" />
              <h4 className="text-sm font-medium">General Notes</h4>
            </div>
            <span className="text-xs text-muted">
              Updated {new Date(person.updatedAt).toLocaleDateString()}
            </span>
          </div>
          <p className="text-sm mt-3">{person.notes}</p>
        </div>
      ) : (
        <p className="text-sm text-muted py-8 text-center">No notes found</p>
      )}
    </div>
  );
}
