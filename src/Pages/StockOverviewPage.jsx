import { AutoComplete } from "../Components/AutoComplete";
import { StockList } from "../Components/StockList";
import trading from "../images/Trading.png";
export const StockOverviewPage = () => {
  return (
    <div>
      <div className="text-center">
        <img src={trading} />
      </div>
      <AutoComplete />
      <StockList />
    </div>
  );
};
export default StockOverviewPage;
