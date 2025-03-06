import { Person } from "@/app/people/data/people-schema";
import { Mail, Phone } from "lucide-react";

export default function ContactItem({ contact }: { contact : Person}) {
    return (
      <div className="flex items-center bg-card p-3 rounded-lg border border-border-light hover-scale">
        <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent font-medium mr-3">
          {contact.name.split(" ").map(n => n[0]).join("")}
        </div>
        
        <div className="flex-1 min-w-0">
          <h4 className="font-medium text-sm">{contact.name}</h4>
          <p className="text-xs text-muted-foreground">{contact.title}</p>
        </div>
        
        <div className="flex space-x-2">
          <button className="p-2 rounded-full text-muted-foreground hover:text-on-surface hover:bg-highlight transition-colors" title={`Email ${contact.name}`}>
            <Mail className="h-4 w-4" />
          </button>
          <button className="p-2 rounded-full text-muted-foreground hover:text-on-surface hover:bg-highlight transition-colors" title={`Call ${contact.name}`}>
            <Phone className="h-4 w-4" />
          </button>
        </div>
      </div>
    )
}