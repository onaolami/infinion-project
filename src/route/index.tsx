import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../screen/homepage";
import { Profile } from "@/screen/profile";

export const RootNavigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/profile" element={<Profile/>} />
      </Routes>
    </BrowserRouter>
  );
};
