import { useContext } from "react"

import { AppContext } from "../AppContext"

function AppTable() {
  const { appState } = useContext(AppContext)

  const { searchTerm, tickers, isLoadingTickers } = appState

  const showTickers = searchTerm !== "" && tickers.length > 0 && !isLoadingTickers
  const isInitialState = searchTerm === "" && tickers.length === 0 && !isLoadingTickers
  const isEmptyState = searchTerm !== "" && tickers.length === 0 && !isLoadingTickers

  return (
    <div className="relative overflow-x-auto">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 mb-20">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              {searchTerm || "-"}
            </th>
            <th scope="col" className="px-6 py-3">
              maximum
            </th>
            <th scope="col" className="px-6 py-3">
              minimum
            </th>
            <th scope="col" className="px-6 py-3">
              Avarage
            </th>
          </tr>
        </thead>

        <tbody>
          {isLoadingTickers &&
            <>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 animate-pulse"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 animate-pulse"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 animate-pulse"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 animate-pulse"></div>
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-32 animate-pulse"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 animate-pulse"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 animate-pulse"></div>
                </td>
                <td className="px-6 py-4">
                  <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-24 animate-pulse"></div>
                </td>
              </tr>
            </>
          }

          {isInitialState &&
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 text-center" colSpan="4">
                Use the form above for searching for tickers.
              </td>
            </tr>
          }

          {isEmptyState &&
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 text-center" colSpan="4">
                No tickers found for "{searchTerm}".
              </td>
            </tr>
          }

          {showTickers && tickers.map(ticker => {
            return <>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span className="font-bold">Price</span>
                </th>
                <td className="px-6 py-4">
                  {ticker.minimumPrice}
                </td>
                <td className="px-6 py-4">
                  {ticker.maximumPrice}
                </td>
                <td className="px-6 py-4">
                  {ticker.averagePrice}
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  <span className="font-bold">Volume</span>
                </th>
                <td className="px-6 py-4">
                  {ticker.minimumVolume}
                </td>
                <td className="px-6 py-4">
                  {ticker.maximumVolume}
                </td>
                <td className="px-6 py-4">
                  {ticker.averageVolume}
                </td>
              </tr>
              <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td colSpan="4"></td>
              </tr>
            </>
          })}
        </tbody>
      </table>
    </div>
  )
}

export default AppTable
