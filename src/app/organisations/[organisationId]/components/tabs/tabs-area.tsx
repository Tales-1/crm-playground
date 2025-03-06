"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/_components/ui/tabs";
import { useState } from "react";
import { Organisation } from "../../../_data/organisation-schema";
import OverviewTab from "./overview-tab";
import DealsTab from "./deals-tab";
import ContactsTab from "./contacts-tab";
import NotesTab from "./notes-tab";

export default function OrganisationDetailsTabs({ organisation }: { organisation: Organisation }) {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1 overflow-hidden mt-2">
      <div className="px-6 border-t border-border-light pt-2">
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
          <OverviewTab organisation={organisation} />
        </TabsContent>

        <TabsContent value="deals" className="m-0 h-full animate-fade-in">
          <DealsTab organisation={organisation} />
        </TabsContent>

        <TabsContent value="contacts" className="m-0 h-full animate-fade-in">
          <ContactsTab organisation={organisation} />
        </TabsContent>

        <TabsContent value="notes" className="m-0 h-full animate-fade-in">
          <NotesTab organisation={organisation} />
        </TabsContent>
      </div>
    </Tabs>
  )
}