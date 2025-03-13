import { Button } from "@/components/ui/button";
import { Users } from "lucide-react";
import ContactItem from "../contact-item";
import { getCurrentOrganisation } from "@/app/organisations/_data/organisation-store";

export default function ContactsTab() {
  const organisation = getCurrentOrganisation();

  if (!organisation) return <h1>Organisation not found</h1>;
  
  return (
    <>
      <div className="mb-4 flex justify-between items-center">
        <h3 className="font-medium">Contacts</h3>
        <Button variant="secondary" size="sm">
          <Users className="h-4 w-4 mr-1" />
          Add Contact
        </Button>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {organisation.contacts.map((contact) => (
          <ContactItem key={contact.id} contact={contact} />
        ))}

        {organisation.contacts.length === 0 && (
          <p className="text-sm text-crm-muted col-span-2 py-8 text-center">
            No contacts found
          </p>
        )}
      </div>
    </>
  );
}
