import { createContext, useState, useEffect } from "react";

export const WatchListContext = createContext();
//["GOOGL", "MSFT", "AMZN"]
const getdata = () => {
  const data = localStorage.getItem("watchList");
  if (data) {
    return data.split(",");
  }
  return ["GOOGL", "MSFT", "AMZN"];
};
export const WatchListContextProvider = ({ children }) => {
  const [watchList, setWatchList] = useState(
    // localStorage.getItem("watchList")?.split(",") || ["GOOGL", "MSFT", "AMZN"]
    getdata
  );

  useEffect(() => {
    localStorage.setItem("watchList", watchList);
  }, [watchList]);

  const addStock = (stock) => {
    if (watchList.indexOf(stock) === -1) {
      setWatchList([...watchList, stock]);
    }
  };

  const deleteStock = (stock) => {
    setWatchList(
      watchList.filter((el) => {
        return el !== stock;
      })
    );
  };

  return (
    <WatchListContext.Provider value={{ watchList, addStock, deleteStock }}>
      {children}
    </WatchListContext.Provider>
  );
};
export default WatchListContextProvider;
