import ListTab from "../../component/listTab";
import Wallet from "../../component/wallet";
import AddBalance from "../../component/addBalance/AddBalance";
import SummaryV3 from "../../component/summary/SummaryV3";
import EfficiencyV2 from "../../component/revenueFlow/EfficiencyV2";

function MyWallet() {
  return (
    <main className="w-full 2xl:grid gap-8 grid-cols-7 xl:px-12 px-6 pb-6 xl:pb-12 sm:pt-[156px] pt-[100px]">
     
        <div className="col-span-4">
          <AddBalance />
        </div>
        <div className="col-span-3">
          <Wallet />
        </div>
        <div className="col-span-3">
          <SummaryV3 />
        </div>
        <div className="col-span-4">
          <EfficiencyV2 />
        </div>
        <div className="col-span-4">
          <ListTab />
        </div>

        <div className="col-span-3">
          <AddBalance />
        </div>
        <div className="col-span-4">
          <Wallet />
        </div>
        <div className="col-span-3">
          <SummaryV3 />
        </div>
        <div className="col-span-3">
          <EfficiencyV2 />
        </div>
     
     
    </main>
  );
}

export default MyWallet;
