import { Button } from "@/components/ui/button";
import { Building, FileText, Globe, Mail, Phone } from "lucide-react";
import ContactItem from "../contact-item";
import DealItem from "../deal-item";
import { OrganisationProps } from "../../page";

export default function OverviewTab({ organisation }: OrganisationProps) {
    return (
        <>
            <div className="grid grid-cols-2 gap-6">
                <div className="bg-card rounded-lg border border-border-light p-4">
                    <h3 className="font-medium mb-3">Contact Information</h3>

                    <div className="space-y-3">
                        {organisation.email && (
                            <div className="flex items-center">
                                <Mail className="h-4 w-4 text-muted-foreground mr-2" />
                                <a href={`mailto:${organisation.email}`} className="text-sm hover:text-accent">
                                    {organisation.email}
                                </a>
                            </div>
                        )}

                        {organisation.phone && (
                            <div className="flex items-center">
                                <Phone className="h-4 w-4 text-muted-foreground mr-2" />
                                <a href={`tel:${organisation.phone}`} className="text-sm hover:text-accent">
                                    {organisation.phone}
                                </a>
                            </div>
                        )}

                        {organisation.website && (
                            <div className="flex items-center">
                                <Globe className="h-4 w-4 text-muted-foreground mr-2" />
                                <a href={organisation.website} target="_blank" rel="noopener noreferrer" className="text-sm hover:text-accent">
                                    {organisation.website.replace(/^https?:\/\//, '')}
                                </a>
                            </div>
                        )}

                        <div className="flex items-center">
                            <Building className="h-4 w-4 text-muted-foreground mr-2" />
                            <span className="text-sm">
                                {organisation.address.street && `${organisation.address.street}, `}
                                {organisation.address.city}, {organisation.address.state} {organisation.address.zipCode}
                                {organisation.address.country && `, ${organisation.address.country}`}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="bg-card rounded-lg border border-border-light p-4">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium">Key Contacts</h3>
                        <Button variant="ghost" size="sm" className="h-7 text-xs">View All</Button>
                    </div>

                    <div className="space-y-2">
                        {organisation.contacts.slice(0, 2).map(contact => (
                            <ContactItem key={contact.id} contact={contact} />
                        ))}
                        {organisation.contacts.length === 0 && (
                            <p className="text-sm text-muted-foreground py-2">No contacts added yet</p>
                        )}
                    </div>
                </div>

                <div className="bg-card rounded-lg border border-border-light p-4">
                    <div className="flex items-center justify-between mb-3">
                        <h3 className="font-medium">Active Deals</h3>
                        <Button variant="ghost" size="sm" className="h-7 text-xs">View All</Button>
                    </div>

                    <div className="space-y-2">
                        {organisation.deals
                            .filter(deal => !['closed-won', 'closed-lost'].includes(deal.stageTitle))
                            .slice(0, 2)
                            .map(deal => (
                                <DealItem key={deal.id} deal={deal} />
                            ))}

                        {organisation.deals.filter(deal => !['closed-won', 'closed-lost'].includes(deal.stageTitle)).length === 0 && (
                            <p className="text-sm text-muted-foreground py-2">No active deals</p>
                        )}
                    </div>
                </div>

                <div className="bg-card rounded-lg border border-border-light p-4">
                    <h3 className="font-medium mb-3">Organisation Details</h3>

                    <div className="grid grid-cols-2 gap-3 text-sm">
                        <div>
                            <p className="text-muted-foreground">Industry</p>
                            <p>{organisation.industry || 'Not specified'}</p>
                        </div>

                        <div>
                            <p className="text-muted-foreground">Created</p>
                            <p>{new Date(organisation.createdAt).toLocaleDateString()}</p>
                        </div>

                        <div>
                            <p className="text-muted-foreground">Last Updated</p>
                            <p>{new Date(organisation.updatedAt).toLocaleDateString()}</p>
                        </div>

                        <div>
                            <p className="text-muted-foreground">ID</p>
                            <p className="font-mono text-xs">{organisation.id}</p>
                        </div>
                    </div>
                </div>
            </div>

            {organisation.notes && (
                <div className="bg-card rounded-lg border border-border-light p-4">
                    <div className="flex items-center mb-3">
                        <FileText className="h-4 w-4 text-crm-muted mr-2" />
                        <h3 className="font-medium">Notes</h3>
                    </div>
                    <p className="text-sm">{organisation.notes}</p>
                </div>
            )}
        </>
    )
}