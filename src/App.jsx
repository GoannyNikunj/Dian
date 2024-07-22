import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./layout/Layout";

import Loading from "@/components/Loading";

import Button from "./pages/dashboard/Button";
import Homepage from "./pages/dashboard/HomePage";
import WhatsappMarketingCompaign1 from "./pages/dashboard/WhatsappMarketingCompaign1";
import WhatsappMarketingCompaign2 from "./pages/dashboard/WhatsappMarketingCompaign2";
import WhatsappMarketingCompaign22 from "./pages/dashboard/WhatsappMarketingCompaign22";
import MarketingAnalytics from "./pages/utility/MarketingAnalytics";
import PlanPricing from "./pages/dashboard/PlanPricing.jsx";

const Register4 = lazy(() => import("./pages/auth/register4"));
const Register5 = lazy(() => import("./pages/auth/register5"));
const BasicTablePage2 = lazy(() => import("./pages/table/table-basic3"));
import Homepage2 from "./pages/dashboard/HomePage2";
import Admin01 from "./pages/table/react-tables/Admin01.jsx";
const ChatPage2 = lazy(() => import("./pages/app/chat/chat2.jsx"));
const PricingPage2 = lazy(() => import("./pages/utility/pricing2"));

const StatisticWidget2 = lazy(() => import("./pages/widget/statistic-widget2"));
const InvoicePreviewPage2 = lazy(() =>
  import("./pages/utility/invoice-preview2")
);
const InvoicePreviewPage3 = lazy(() =>
  import("./pages/utility/invoice-preview3")
);

function App2() {
  return (
    <main className="App  relative">
      <Routes>

      <Route
          path="/SignUp"
          element={
            <Suspense fallback={<Loading />}>
              <Register4 />
            </Suspense>
          }
        />

        <Route
          path="/SignIn"
          element={
            <Suspense fallback={<Loading />}>
              <Register5 />
            </Suspense>
          }
        />

        <Route path="/*" element={<Layout />}>
          <Route path="Homepage" element={<Homepage />} />
          <Route path="UserInsight" element={<Homepage2 />} />
          <Route path="api/restaurants/getEmployeesReviews/:id" element={<InvoicePreviewPage2 />} />
          <Route path="WhatsappMarketingCompaign1" element={<WhatsappMarketingCompaign1 />} />

          <Route path="WhatsappMarketingCompaign2" element={<WhatsappMarketingCompaign2 />} />
          <Route path="WhatsappMarketingCompaign22" element={<WhatsappMarketingCompaign22 />} />
          <Route path="CompetitorAnalysis" element={<StatisticWidget2 />} />
          <Route path="MarketingAnalytics" element={<MarketingAnalytics />} />
          <Route path="PlansPricing" element={<PlanPricing />} />
          <Route path="Invoices" element={<InvoicePreviewPage3 />} />
          <Route path="Inbox" element={<ChatPage2 />} />
          <Route path="Profile" element={<BasicTablePage2 />} />
          <Route path="Admin01" element={<Admin01/>}/>
          <Route path="Button" element={<Button />} />
          <Route path="subscription" element={<PricingPage2 />} />

        </Route>
      </Routes>
    </main>
  );
}

export default App2;

