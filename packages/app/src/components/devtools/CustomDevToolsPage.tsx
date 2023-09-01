import {
    ConfigContent,
    ExternalDependenciesContent,
    InfoContent,
  } from '@backstage/plugin-devtools';
  import { DevToolsLayout } from '@backstage/plugin-devtools';
  import {
    devToolsConfigReadPermission,
    devToolsExternalDependenciesReadPermission,
    devToolsInfoReadPermission,
  } from '@backstage/plugin-devtools-common';
  import { RequirePermission } from '@backstage/plugin-permission-react';
  import React from 'react';
  
  const DevToolsPage = () => {
    return (
      <DevToolsLayout>
        <DevToolsLayout.Route path="info" title="Info">
          <RequirePermission permission={devToolsInfoReadPermission}>
            <InfoContent />
          </RequirePermission>
        </DevToolsLayout.Route>
        <DevToolsLayout.Route path="config" title="Config">
          <RequirePermission permission={devToolsConfigReadPermission}>
            <ConfigContent />
          </RequirePermission>
        </DevToolsLayout.Route>
        <DevToolsLayout.Route
          path="external-dependencies"
          title="External Dependencies"
        >
          <RequirePermission
            permission={devToolsExternalDependenciesReadPermission}
          >
            <ExternalDependenciesContent />
          </RequirePermission>
        </DevToolsLayout.Route>
      </DevToolsLayout>
    );
  };
  
  export const customDevToolsPage = <DevToolsPage />;