import React from "react";

const ExpensesPage = () => {
  return (
    <div className="flex justify-center min-h-screen bg-gray-100 p-4">
      <div className="w-full max-w-5xl bg-white p-6 rounded-lg shadow-lg">
        {/* Header */}
        <h1 className="text-xl font-bold text-gray-800 mb-4">Pengeluaran</h1>

        {/* Expenses Comparison */}
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Perbandingan Pengeluaran
          </h2>
          <div className="p-4 bg-gray-50 rounded-lg shadow-md">
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
              neque quam alias enim ullam deserunt ducimus consequatur cumque
              hic voluptatem totam ab quibusdam facilis distinctio ratione,
              sequi vel porro eum.
            </p>
          </div>
        </div>

        {/* Expenses Breakdown */}
        <div>
          <h2 className="text-lg font-semibold text-gray-700 mb-2">
            Rincian Pengeluaran
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                neque quam alias enim ullam deserunt ducimus consequatur cumque
                hic voluptatem totam ab quibusdam facilis distinctio ratione,
                sequi vel porro eum.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                neque quam alias enim ullam deserunt ducimus consequatur cumque
                hic voluptatem totam ab quibusdam facilis distinctio ratione,
                sequi vel porro eum.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                neque quam alias enim ullam deserunt ducimus consequatur cumque
                hic voluptatem totam ab quibusdam facilis distinctio ratione,
                sequi vel porro eum.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                neque quam alias enim ullam deserunt ducimus consequatur cumque
                hic voluptatem totam ab quibusdam facilis distinctio ratione,
                sequi vel porro eum.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                neque quam alias enim ullam deserunt ducimus consequatur cumque
                hic voluptatem totam ab quibusdam facilis distinctio ratione,
                sequi vel porro eum.
              </p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg shadow-md">
              <p className="text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                neque quam alias enim ullam deserunt ducimus consequatur cumque
                hic voluptatem totam ab quibusdam facilis distinctio ratione,
                sequi vel porro eum.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExpensesPage;

<Link
  to="/expenses"
  className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-200"
>
  <i className="icon-class mr-3"></i>
  Pengeluaran
</Link>;
