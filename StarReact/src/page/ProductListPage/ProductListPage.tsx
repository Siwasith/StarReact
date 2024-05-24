import React from "react";

const ProductListPage: React.FC = () => {
  return (
    <>
      <div className="mt-20 inline-flex px-48 w-full sm:mt-6 sm:px-0">
        <h2 className="font-medium text-2xl text-center sm:hidden">Filters</h2>
        <div className="ml-32 mr-8 sm:ml-2 sm:mr-2">
          <button className="px-4 py-1 border rounded-3xl inline-flex border-[#067655] hover:bg-emerald-800 sm:hidden">
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="m-2"
            >
              <path
                d="M1.4 14L0 12.6L5.6 7L0 1.4L1.4 0L7 5.6L12.6 0L14 1.4L8.4 7L14 12.6L12.6 14L7 8.4L1.4 14Z"
                fill="#067655"
              />
            </svg>
            <p className="mx-1 font-light text-lg text-[#067655]">Clear</p>
          </button>
        </div>

        <form className="flex items-center mx-auto">
          <label className="sr-only">Search</label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="ml-1"
              >
                <path
                  d="M12.5 11H11.71L11.43 10.73C12.41 9.59 13 8.11 13 6.5C13 2.91 10.09 0 6.5 0C2.91 0 0 2.91 0 6.5C0 10.09 2.91 13 6.5 13C8.11 13 9.59 12.41 10.73 11.43L11 11.71V12.5L16 17.49L17.49 16L12.5 11ZM6.5 11C4.01 11 2 8.99 2 6.5C2 4.01 4.01 2 6.5 2C8.99 2 11 4.01 11 6.5C11 8.99 8.99 11 6.5 11Z"
                  fill="black"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="border border-gray-300 text-gray-900 text-sm rounded-3xl focus:ring-blue-500 focus:border-blue-500 block w-[50rem] ps-[45px] p-2.5 pl-40 text-left sm:w-[17rem] sm:w-[15rem] "
              placeholder="Search branch name..."
              required
            />
          </div>
          <div className="ml-[20px] mr-8 sm:ml-[10px] sm:mr-4">
          <button className="px-4 py-2 rounded-3xl inline-flex bg-gray-300 hover:bg-emerald-800 sm:px-2 ">
            <p className="mx-1 font-light text-lg text-white tracking-wide font-light sm:font-thin ">Search</p>
          </button>
        </div>
        </form>
      </div>
    </>
  );
};

export default ProductListPage;
