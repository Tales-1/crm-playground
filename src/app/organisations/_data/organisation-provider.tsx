// components/organisation-provider.tsx
'use client';

import { useEffect } from 'react';
import { useOrganisationStore } from './organisation-store';
import { Organisation } from './organisation-schema';

export function OrganisationProvider({ 
  organisation,
  children 
}: { 
  organisation: Organisation;
  children: React.ReactNode;
}) {
  useEffect(() => {
    useOrganisationStore.setState({ currentOrganisation: organisation });
  }, [organisation]);

  return <>{children}</>;
}