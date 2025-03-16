'use client';

import SmoothScrollWrapper from './smoothScrollWallpaper';
import Services from './service';

const ClientServicesWrapper = ({ services }: { services: any[] }) => {
  return (
    <SmoothScrollWrapper>
      <Services services={services} />
    </SmoothScrollWrapper>
  );
};

export default ClientServicesWrapper;
