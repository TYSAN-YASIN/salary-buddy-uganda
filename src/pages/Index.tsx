import { PhoneFrame } from "@/components/PhoneFrame";
import { Outlet } from "react-router-dom";

const Index = () => (
  <PhoneFrame>
    <Outlet />
  </PhoneFrame>
);

export default Index;
