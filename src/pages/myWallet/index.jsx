import ListTab from "../../component/listTab";
import Wallet from "../../component/wallet";
import AddBalance from "../../component/addBalance/AddBalance";
import SummaryV3 from "../../component/summary/SummaryV3";
import EfficiencyV2 from "../../component/revenueFlow/EfficiencyV2";

function MyWallet() {
  return (
    <main className="w-full 2xl:grid  gap-8 grid-cols-12 xl:px-12 px-6 pb-6 xl:pb-12 sm:pt-[156px] pt-[100px]">
      <div className="col-span-7">
        <ListTab />
      </div>
      <div className="col-span-5">
        <Wallet />
      </div>
      <div className="col-span-5">
        <SummaryV3 />
      </div>
      <div className="col-span-7">
        <EfficiencyV2 />
      </div>
      <div className="col-span-6">
        <AddBalance />
      </div>
    </main>
  );
}

export default MyWallet;
