import ListTab from "../../component/listTab";
import Wallet from "../../component/wallet";
import AddBalance from "../../component/addBalance/AddBalance";
import SummaryV3 from "../../component/summary/SummaryV3";
import EfficiencyV2 from "../../component/revenueFlow/EfficiencyV2";

function MyWallet() {
  return (
    <main className="w-full xl:px-12 px-6 pb-6 xl:pb-12 sm:pt-[156px] pt-[100px]">
      <div className="2xl:flex 2xl:space-x-[48px]">
        <section className="2xl:w-[424px]">
          <EfficiencyV2 />
          <AddBalance />
        </section>
        <div className="2xl:flex-1">
          <section className="w-full xl:flex xl:space-x-[24px]">
            <ListTab />
          </section>
          <div className="mt-6">
            <Wallet />
          </div>

          <SummaryV3 />
        </div>
      </div>
    </main>
  );
}
export default MyWallet;
