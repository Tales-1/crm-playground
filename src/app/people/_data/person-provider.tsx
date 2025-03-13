'use client';

import { useEffect } from 'react';
import { Person } from './people-schema';
import { usePersonStore } from './person-store';

export function PersonProvider({ 
  person,
  children 
}: { 
  person: Person;
  children: React.ReactNode;
}) {
  useEffect(() => {
    usePersonStore.setState({ currentPerson: person });
  }, [person]);

  return <>{children}</>;
}