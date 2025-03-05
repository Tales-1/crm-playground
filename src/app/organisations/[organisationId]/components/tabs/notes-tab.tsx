import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
import { OrganisationProps } from "../../page";


export default function NotesTab({ organisation }: OrganisationProps) {
    return (
        <>
            <div className="mb-4 flex justify-between items-center">
                <h3 className="font-medium">Notes</h3>
                <Button variant="outline" size="sm" className="text-crm-text border-crm-border-light hover:bg-crm-highlight">
                    <FileText className="h-4 w-4 mr-1" />
                    Add Note
                </Button>
            </div>

            {organisation.notes ? (
                <div className="bg-crm-card/50 rounded-lg border border-crm-border-light p-4">
                    <div className="flex justify-between">
                        <div className="flex items-center">
                            <FileText className="h-4 w-4 text-crm-muted mr-2" />
                            <h4 className="text-sm font-medium">General Notes</h4>
                        </div>
                        <span className="text-xs text-crm-muted">Updated {new Date(organisation.updatedAt).toLocaleDateString()}</span>
                    </div>
                    <p className="text-sm mt-3">{organisation.notes}</p>
                </div>
            ) : (
                <p className="text-sm text-crm-muted py-8 text-center">No notes found</p>
            )}
        </>
    )
}