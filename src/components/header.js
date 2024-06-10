function AppHeader() {
  return (
    <div className="flex justify-center py-10">
      <div className="flex flex-col text-center gap-5">
        <span className="text-6xl">💹</span>
        <h1 className="font-bold text-2xl">Stock Ticker Finder</h1>
        <p>You can search for stock tickers on this app which interacts with <a className="underline" href="https://polygon.io/" target="blank">Polygon IO</a> API to return information about stock tickers.</p>
      </div>
    </div>
  )
}

export default AppHeader
