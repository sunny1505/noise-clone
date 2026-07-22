import EarbudsBanner from "../components/earbuds/EarbudsBanner";
import EarbudsProductGrid from "../components/earbuds/EarbudsProductGrid";
import { earbudsProducts } from "../data/earbudsProducts";

function Earbuds() {

  return (

    <>

      <EarbudsBanner />

      <div className="max-w-7xl mx-auto py-20">

        <EarbudsProductGrid
          products={earbudsProducts}
        />

      </div>

    </>

  );

}

export default Earbuds;