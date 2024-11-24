import React, { useState } from "react";
import Card from "../component/Card";
import MainLayout from "../component/Layout/MainLayout";
import bills from "../component/Data/bills";
import expensesBreakdowns from "../component/Data/expense";
import transactions from "../component/Data/transaction";
import "@fortawesome/fontawesome-free/css/all.min.css";

const tabs = ["all", "revenue", "expense"];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  const billCard = bills.map((bill) => (
    <div key={bill.id} className="lg:flex justify-between pt-3 pb-3">
      <div className="flex">
        <div className="bg-special-bg me-3 px-4 rounded-lg flex flex-col justify-center">
          <span className="text-xs">{bill.month}</span>
          <span className="text-2xl font-bold">{bill.date}</span>
        </div>
        <div>
          <img className="h-6" src={`/assets/${bill.logo}`} alt={bill.name} />
          <span className="font-bold">{bill.name}</span>
          <br />
          <span className="text-xs">Last Charge - {bill.lastCharge}</span>
        </div>
      </div>
      <div className="flex flex-col justify-center">
        <span className="p-2 border rounded-lg font-bold text-center">
          ${bill.amount}
        </span>
      </div>
    </div>
  ));

  const expenseCard = expensesBreakdowns.map((expensesBreakdown) => (
    <div key={expensesBreakdown.id} className="flex pb-4 justify-between">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col justify-center">
          <i className={`fa ${expensesBreakdown.icon} text-3xl text-primary`} />
        </div>
        <div className="ms-4">
          <span className="text-gray-02">{expensesBreakdown.category}</span>
          <br />
          <span className="font-bold text-lg">${expensesBreakdown.amount}</span>
          <div className="flex items-center">
            <span className="text-gray-02">
              {expensesBreakdown.percentage}%
            </span>
            <i className={`fa ${expensesBreakdown.arrow} text-sm ms-2`} />
          </div>
        </div>
      </div>
    </div>
  ));

  const transactionCard = transactions
    .filter((transaction) => {
      if (activeTab === "all") return true;
      return transaction.type.toLowerCase() === activeTab;
    })
    .map((transaction) => (
      <div key={transaction.id} className="flex justify-between my-6">
        <div className="flex">
          <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
            {/* Menggunakan tag <i> untuk menampilkan ikon FontAwesome */}
            <i className={`fa ${transaction.icon} text-3xl text-primary`} />
          </div>
          <div className="ms-4">
            <span className="text-xl font-bold">
              {transaction.transactionName}
            </span>
            <br />
            <span className="text-gray-02">{transaction.shopName}</span>
          </div>
        </div>
        <div className="text-right">
          <span className="text-xl font-bold text-gray-02">
            ${transaction.amount}
          </span>
          <br />
          <span className="text-gray-02">{transaction.date}</span>
        </div>
      </div>
    ));

  return (
    <MainLayout type="dashboard">
      <div className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <Card title="Total Balance">
            <div>Content for Total Balance</div>
          </Card>
          <Card title="Goals">
            <div>Content for Goals</div>
          </Card>
          <Card title="Upcoming Bill">{billCard}</Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Card title="Recent Transaction">
            <div>
              <div className="mb-4 flex space-x-2">
                {tabs.map((tab) => (
                  <button
                    key={tab}
                    value={tab}
                    onClick={() => setActiveTab(tab)} // Update activeTab on click
                    className={
                      activeTab === tab
                        ? "px-4 font-bold border-b-4 border-primary text-primary"
                        : "px-4 font-bold text-gray-01"
                    }
                  >
                    {tab}
                  </button>
                ))}
              </div>
              {transactionCard}
            </div>
          </Card>

          <div className="space-y-6">
            <Card title="Statistics">
              <div>Content for Statistics</div>
            </Card>
            <Card title="Expenses Breakdown">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {expenseCard}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
