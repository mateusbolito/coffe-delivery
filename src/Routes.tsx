import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/Home";
import { CompleteOrderPage } from "./pages/CompleteOrder";
import { DefaultLayout } from "./layouts/DefaultLayout";
import { OrderConfirmedPage } from "./pages/OrderConfirmed";

export function Router() {
 return (
<Routes>
<Route path="/" element={<DefaultLayout/>}> 
 <Route path="/" element={<HomePage/>} /> 
 <Route path="/CompleteOrder" element={<CompleteOrderPage/>} /> 
 <Route path="/OrderConfirmedPage" element={<OrderConfirmedPage/>} />
</Route>
</Routes>
);
}