import LegalBanner from "../components/legal/LegalBanner";

function TermsConditions() {
  return (
    <>
      <LegalBanner title="Terms & Conditions" />

      <section className="max-w-6xl mx-auto px-5 py-20">

        <div className="bg-white shadow-xl rounded-3xl p-10">

          <h2 className="text-4xl font-bold mb-8">
            Terms & Conditions
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            By accessing this website, you agree to comply with our terms
            and conditions.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Orders
          </h3>

          <p className="text-gray-600 leading-8">
            All orders are subject to availability and confirmation of the
            order price.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Payments
          </h3>

          <p className="text-gray-600 leading-8">
            Payments must be completed before products are shipped unless
            Cash on Delivery is selected.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Returns & Refunds
          </h3>

          <p className="text-gray-600 leading-8">
            Customers can request returns within the applicable return
            period, subject to our return policy.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Intellectual Property
          </h3>

          <p className="text-gray-600 leading-8">
            All website content, logos, images, and trademarks are the
            property of their respective owners.
          </p>

        </div>

      </section>
    </>
  );
}

export default TermsConditions;