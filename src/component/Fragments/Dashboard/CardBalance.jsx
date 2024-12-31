import { useState } from "react";
import Accounts from "../../Data/accounts";
import Card from "../../Card";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

const CardBalance = () => {
  // Menyimpan indeks data yang ditampilkan
  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 2; // Jumlah data per halaman

  // Mengambil data yang sesuai dengan startIndex dan itemsPerPage
  const displayedAccounts = Accounts.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  // Fungsi untuk menambah data yang ditampilkan
  const loadMore = () => {
    if (startIndex + itemsPerPage < Accounts.length) {
      setStartIndex(startIndex + itemsPerPage); // Maju ke halaman berikutnya
    }
  };

  // Fungsi untuk kembali ke data sebelumnya
  const goBack = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - itemsPerPage); // Kembali ke halaman sebelumnya
    }
  };

  // Membuat card balance dengan detail informasi
  const balanceCard = displayedAccounts.map((account) => (
    <div key={account.id} className="p-2">
      <div className="flex justify-between">
        <div className="text-2xl font-bold">${account.balance}</div>
        <div>
          <Link to="/balance">All account</Link>
        </div>
      </div>
      <div className="border-b-2 my-4"></div>
      <div className="flex justify-between bg-primary text-white p-4 rounded-md">
        <div>
          Account Type
          <br />
          <span className="text-xl font-bold">{account.accountType}</span>
          <br />
          {account.accountNumber}
        </div>
        <div className="flex flex-col justify-between">
          {/* Menampilkan logo menggunakan ikon Font Awesome */}
          {account.logo && (
            <FontAwesomeIcon
              icon={account.logo}
              className="ms-auto text-white text-4xl"
            />
          )}

          <div className="flex">
            <span className="text-xl font-bold">${account.balance}</span>
            <div className="bg-white max-w-min rounded-full ps-1 pt-1 ms-4">
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </div>
          </div>
        </div>
      </div>
    </div>
  ));

  if (balanceCard.length === 0) {
    console.error("balanceCard is empty");
  }

  return (
    <Card title="Total Balance">
      {balanceCard}
      <div className="flex justify-between mt-4">
        {/* Tombol Back */}
        {startIndex > 0 && (
          <button
            onClick={goBack}
            className="p-2 bg-secondary text-white rounded-md"
          >
            Back
          </button>
        )}

        {/* Tombol Next */}
        {startIndex + itemsPerPage < Accounts.length && (
          <button
            onClick={loadMore}
            className="p-2 bg-primary text-white rounded-md"
          >
            Next
          </button>
        )}
      </div>
    </Card>
  );
};

export default CardBalance;
