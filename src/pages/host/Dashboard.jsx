import { Outlet } from 'react-router-dom';

export default function Dashboard() {
  return (
    <div>
      <h1>Dashboard page</h1>
      <Outlet />
    </div>
  );
}
