import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { GetOffer } from "./pages/GetOffer";

export const Router = () => <BrowserRouter>
    <Routes>
        <Route path="/" element={<Home />}>
            <Route path="chci-nabidku" element={<GetOffer />} />
        </Route>
    </Routes>
</BrowserRouter>