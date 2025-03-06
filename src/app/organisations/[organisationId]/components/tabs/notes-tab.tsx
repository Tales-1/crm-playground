import { Button } from "@/_components/ui/button";
import { FileText } from "lucide-react";
import { OrganisationProps } from "../../page";


export default function NotesTab({ organisation }: OrganisationProps) {
    return (
        <>
            <div className="mb-4 flex justify-between items-center">
                <h3 className="font-medium">Notes</h3>
                <Button variant="secondary" size="sm">
                    <FileText className="h-4 w-4 mr-1" />
                    Add Note
                </Button>
            </div>

            {organisation.notes ? (
                <div className="bg-card rounded-lg border border-border-light p-4">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <FileText className="h-4 w-4 text-muted-foreground mr-2" />
                            <h4 className="text-sm font-medium">General Notes</h4>
                        </div>
                        <span className="text-xs text-muted-foreground">Updated {new Date(organisation.updatedAt).toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm mt-3">{organisation.notes}</p>
                </div>
            ) : (
                <p className="text-sm text-muted-foreground py-8 text-center">No notes found</p>
            )}
        </>
    )
}