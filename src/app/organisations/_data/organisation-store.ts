"use client"

import { create } from 'zustand';
import { Organisation } from './organisation-schema';

type OrganisationStore = {
  currentOrganisation: Organisation | null;
  setCurrentOrganisation: (org: Organisation) => void;
};

const useOrganisationStore = create<OrganisationStore>((set) => ({
  currentOrganisation: null,
  setCurrentOrganisation: (org) => set({ currentOrganisation: org }),
}));

const getCurrentOrganisation = () =>
     useOrganisationStore((state) => state.currentOrganisation);

export { useOrganisationStore, getCurrentOrganisation }