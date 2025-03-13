import { Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getCurrentPerson } from "@/app/people/_data/person-store";
import Link from "next/link";
import InfoTile from "@/components/ui/info-tile";
import DealItem from "@/app/organisations/[organisationId]/_components/deal-item";
import { Separator } from "@/components/ui/separator";

export default function PersonOverviewTab() {
  const person = getCurrentPerson();

  if (!person) return <h1>Person not found</h1>;

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-card rounded-lg border border-outline p-4">
          <h3 className="">Contact Information</h3>
          <div className="mt-2 space-y-2">
            {person.email && (
              <div className="flex items-center">
                <Mail className="h-4 w-4 text-muted mr-2" />
                <a
                  href={`mailto:${person.email}`}
                  className="text-sm hover:text-accent"
                >
                  {person.email}
                </a>
              </div>
            )}

            {person.phone && (
              <div className="flex items-center">
                <Phone className="h-4 w-4 text-muted mr-2" />
                <a
                  href={`tel:${person.phone}`}
                  className="text-sm hover:text-accent"
                >
                  {person.phone}
                </a>
              </div>
            )}
          </div>
        </div>

        <div className="bg-card rounded-lg border border-outline p-4">
          <div className="flex justify-between">
            <h3 className="">Organisations</h3>
            <Link href="#" className="text-sm text-primary hover:underline">
              View All
            </Link>
          </div>
          <div className="mt-3">
            {person.organisations.map((org) => (
              <InfoTile key={org.id} title={org.name} size="small" />
            ))}
          </div>
        </div>
      </div>

      <div
        className="bg-card rounded-lg border border-outline p-4"
        style={{ animationDelay: "200ms" }}
      >
        <div className="panel-header flex justify-between">
          <h2 className="section-title">Active Deals</h2>
          <Link href="#" className="text-sm text-primary hover:underline">
            View All
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
          {person.deals.map((deal) => (
            <DealItem key={deal.id} deal={deal} />
          ))}
        </div>
      </div>

      <div
        className="bg-card rounded-lg border border-outline p-4"
        style={{ animationDelay: "300ms" }}
      >
        <h3 className="font-medium mb-3">Person Details</h3>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div>
            <p className="text-muted">ID</p>
            <p className="font-mono text-xs">{person.id}</p>
          </div>
          <div>
            <p className="text-muted">Created</p>
            <p>{new Date(person.createdAt).toLocaleDateString()}</p>
          </div>

          <div>
            <p className="text-muted">Last Updated</p>
            <p>{new Date(person.updatedAt).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
