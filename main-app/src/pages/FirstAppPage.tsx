// FirstAppPage.tsx
import React, { Suspense } from "react";

const RemoteFirstApp = React.lazy(() => import("../../../first-app/src/App"));

const FirstAppPage: React.FC = () => (
  <Suspense fallback={<div>Loading First App...</div>}>
    <RemoteFirstApp />
  </Suspense>
);

export default FirstAppPage;
