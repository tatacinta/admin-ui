import React, { useState } from "react";
import Card from "../component/Card";
import MainLayout from "../component/Layout/MainLayout";
import bills from "../component/Data/bills";
import expensesBreakdowns from "../component/Data/expense";
import transactions from "../component/Data/transaction";
import "@fortawesome/fontawesome-free/css/all.min.css";
import CardBalance from "../component/Fragments/Dashboard/CardBalance";
import CardStatistic from "../component/Fragments/Dashboard/CardStatistic";
import CardGoal from "../component/Fragments/Dashboard/CardGoal";

const tabs = ["all", "revenue", "expense"];

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState("all");

  // State untuk pagination Recent Transaction
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4; // Menampilkan 4 transaksi per halaman

  // Fungsi untuk mendapatkan data yang akan ditampilkan pada halaman tertentu
  const indexOfLastTransaction = currentPage * itemsPerPage;
  const indexOfFirstTransaction = indexOfLastTransaction - itemsPerPage;
  const currentTransactions = transactions
    .filter((transaction) => {
      if (activeTab === "all") return true;
      return transaction.type.toLowerCase() === activeTab;
    })
    .slice(indexOfFirstTransaction, indexOfLastTransaction);

  const totalPages = Math.ceil(transactions.length / itemsPerPage);

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handleBack = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

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

  const transactionCard = currentTransactions.map((transaction) => (
    <div key={transaction.id} className="flex justify-between my-6">
      <div className="flex">
        <div className="bg-special-bg px-3 rounded-lg flex flex-col place-content-center">
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
          <CardBalance />
          <CardGoal />
          <Card title="Upcoming Bill">{billCard}</Card>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {/* Recent Transaction card dengan data transaksi */}
          <Card title="Recent Transaction">
            {transactionCard}
            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-300 p-2 rounded-lg"
                onClick={handleBack}
                disabled={currentPage === 1}
              >
                Back
              </button>
              <button
                className="bg-primary text-white p-2 rounded-lg"
                onClick={handleNext}
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </Card>

          <div className="space-y-6">
            <CardStatistic />
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
