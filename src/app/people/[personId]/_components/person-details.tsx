"use client"

import { useState } from "react";
import { getCurrentPerson } from "../../_data/person-store";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PersonOverviewTab from "./tabs/overview-tab";
import PersonDealsTab from "./tabs/deals-tab";
import ContactsTab from "@/app/organisations/[organisationId]/_components/tabs/contacts-tab";
import NotesTab from "./tabs/notes-tab";
import PersonOrganisationsTab from "./tabs/organisations-tab";

export default function PersonDetails() {
    const [activeTab, setActiveTab] = useState("overview");
    const person = getCurrentPerson();
  
    if(!person) return;
    
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
              Deals ({person.deals.length})
            </TabsTrigger>
            <TabsTrigger
              value="organisations"
              className="rounded-none border-b-2 border-transparent data-[state=active]:border-accent data-[state=active]:text-on-surface px-0 pb-3.5"
            >
              Organisations ({person.organisations.length})
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
            <PersonOverviewTab />
          </TabsContent>
  
          <TabsContent value="deals" className="m-0 h-full animate-fade-in">
            <PersonDealsTab />
          </TabsContent>
  
          <TabsContent value="organisations" className="m-0 h-full animate-fade-in">
            <PersonOrganisationsTab />
          </TabsContent>
  
          <TabsContent value="notes" className="m-0 h-full animate-fade-in">
            <NotesTab />
          </TabsContent>
        </div>
      </Tabs>
    )
  }