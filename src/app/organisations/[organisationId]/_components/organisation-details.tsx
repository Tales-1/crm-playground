"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import { getCurrentOrganisation } from "../../_data/organisation-store";
import OverviewTab from "./tabs/overview-tab";
import DealsTab from "./tabs/deals-tab";
import ContactsTab from "./tabs/contacts-tab";
import NotesTab from "./tabs/notes-tab";

export default function OrganisationDetails() {
  const [activeTab, setActiveTab] = useState("overview");
  const organisation = getCurrentOrganisation();

  if(!organisation)
    return <h1>Organisation not found</h1>

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 overflow-hidden mt-2">
      <div className="px-6 border-t border-outline pt-2">
        <TabsList className="bg-transparent h-12 p-0 space-x-6">
          <TabsTrigger
            value="overview"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-on-surface px-0 pb-3.5"
          >
            Overview
          </TabsTrigger>
          <TabsTrigger
            value="deals"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-on-surface px-0 pb-3.5"
          >
            Deals ({organisation.deals.length})
          </TabsTrigger>
          <TabsTrigger
            value="contacts"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-on-surface px-0 pb-3.5"
          >
            Contacts ({organisation.contacts.length})
          </TabsTrigger>
          <TabsTrigger
            value="notes"
            className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-on-surface px-0 pb-3.5"
          >
            Notes
          </TabsTrigger>
        </TabsList>
      </div>

      <div className="flex-1 overflow-auto p-6">
        <TabsContent value="overview" className="m-0 h-full space-y-6 animate-fade-in">
          <OverviewTab />
        </TabsContent>

        <TabsContent value="deals" className="m-0 h-full animate-fade-in">
          <DealsTab />
        </TabsContent>

        <TabsContent value="contacts" className="m-0 h-full animate-fade-in">
          <ContactsTab />
        </TabsContent>

        <TabsContent value="notes" className="m-0 h-full animate-fade-in">
          <NotesTab />
        </TabsContent>
      </div>
    </Tabs>
  )
}