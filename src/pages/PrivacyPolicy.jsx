import LegalBanner from "../components/legal/LegalBanner";

function PrivacyPolicy() {
  return (
    <>
      <LegalBanner title="Privacy Policy" />

      <section className="max-w-6xl mx-auto px-5 py-20">

        <div className="bg-white shadow-xl rounded-3xl p-10">

          <h2 className="text-4xl font-bold mb-8">
            Privacy Policy
          </h2>

          <p className="text-gray-600 leading-8 mb-6">
            Your privacy is important to us. This Privacy Policy explains
            how we collect, use and protect your personal information when
            you use our website.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Information We Collect
          </h3>

          <ul className="list-disc ml-8 space-y-3 text-gray-600">
            <li>Name and Contact Information</li>
            <li>Email Address</li>
            <li>Shipping Address</li>
            <li>Payment Details (Processed Securely)</li>
            <li>Order History</li>
          </ul>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            How We Use Your Information
          </h3>

          <p className="text-gray-600 leading-8">
            We use your information to process orders, improve our services,
            communicate with customers, and provide better shopping
            experiences.
          </p>

          <h3 className="text-2xl font-bold mt-10 mb-4">
            Data Security
          </h3>

          <p className="text-gray-600 leading-8">
            We implement industry-standard security measures to protect your
            personal information against unauthorized access.
          </p>

        </div>

      </section>
    </>
  );
}

export default PrivacyPolicy;