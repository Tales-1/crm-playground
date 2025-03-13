"use client"

import { create } from 'zustand';
import { Person } from './people-schema';

type PersonStore = {
  currentPerson: Person | null;
  setCurrentPerson: (person: Person) => void;
};

const usePersonStore = create<PersonStore>((set) => ({
  currentPerson: null,
  setCurrentPerson: (person) => set({ currentPerson: person }),
}));

const getCurrentPerson = () =>
     usePersonStore((state) => state.currentPerson);


export { usePersonStore, getCurrentPerson }
