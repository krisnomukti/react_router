import { Outlet } from 'react-router-dom';

export default function HostLayout() {
  return (
    <div>
      <Outlet />
    </div>
  );
}