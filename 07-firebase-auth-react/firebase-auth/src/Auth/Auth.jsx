import { Outlet } from "react-router-dom";

export function Auth() {
  return (
    <>
      <h2>Panel Klienta</h2>
      <Outlet />;
    </>
  );
}
