import { Person } from "@/app/people/data/people-schema";
import { Mail, Phone } from "lucide-react";

export default function ContactItem({ contact }: { contact : Person}) {
    return (
      <div className="flex items-center p-3 rounded-lg border border-crm-border-light bg-crm-card/50 hover-scale">
        <div className="w-10 h-10 rounded-full bg-crm-accent/10 flex items-center justify-center text-crm-accent font-medium mr-3">
          {contact.name.split(" ").map(n => n[0]).join("")}
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm">{contact.name}</h4>
          <p className="text-xs text-crm-muted">{contact.title}</p>
        </div>
        
        <div className="flex space-x-2">
          <button className="p-2 rounded-full text-crm-muted hover:text-crm-text hover:bg-crm-highlight transition-colors" title={`Email ${contact.name}`}>
            <Mail className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-full text-crm-muted hover:text-crm-text hover:bg-crm-highlight transition-colors" title={`Call ${contact.name}`}>
            <Phone className="h-4 w-4" />
          </button>
        </div>
      </div>
    )
}