import React from "react";

const RemoteSecondApp = React.lazy(() => import("../../../second-app/src/App"));

const SecondAppPage: React.FC = () => (
  <React.Suspense fallback={<div>Loading Second App...</div>}>
    <RemoteSecondApp />
  </React.Suspense>
);

export default SecondAppPage;
