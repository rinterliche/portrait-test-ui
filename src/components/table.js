function AppTable() {
  return (
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3">
              AAPL
            </th>
            <th scope="col" class="px-6 py-3">
              Maximun
            </th>
            <th scope="col" class="px-6 py-3">
              Minimun
            </th>
            <th scope="col" class="px-6 py-3">
              Avarage
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <span className="font-bold">Price</span>
            </th>
            <td class="px-6 py-4">
              $1.500,00
            </td>
            <td class="px-6 py-4">
              $1.500,00
            </td>
            <td class="px-6 py-4">
              $1.500,00
            </td>
          </tr>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
              <span className="font-bold">Volume</span>
            </th>
            <td class="px-6 py-4">
              1000
            </td>
            <td class="px-6 py-4">
              1000
            </td>
            <td class="px-6 py-4">
              1000
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default AppTable
