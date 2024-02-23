import ListTab from "../../component/listTab";
import Wallet from "../../component/wallet";
import AddBalance from "../../component/addBalance/AddBalance";
import SummaryV3 from "../../component/summary/SummaryV3";
import EfficiencyV2 from "../../component/revenueFlow/EfficiencyV2";

function MyWallet() {
  return (
    <main className="w-full 2xl:grid 2xl:grid-cols-6 gap-4 xl:px-12 px-6 pb-6 xl:pb-12 sm:pt-[156px] pt-[100px]">
      <div className="xl:col-span-4">
        <ListTab />
      </div>

      <div className="mt-6 2xl:mt-0 xl:col-span-2">
        <Wallet />
      </div>

      <div className="mt-6 2xl:mt-0  col-span-2">
        <AddBalance />
      </div>

      <div className="col-span-2">
        <SummaryV3 />
      </div>

      <div className="col-span-2">
        <EfficiencyV2 />
      </div>
    </main>
  );
}

export default MyWallet;
