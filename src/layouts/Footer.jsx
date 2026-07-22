function Footer() {
  return (
    <footer className="bg-black text-white mt-20">

      <div className="max-w-7xl mx-auto px-4 py-12">

        <div className="grid md:grid-cols-4 gap-8">

          <div>
            <h2 className="text-3xl font-bold mb-4">
              NOISE
            </h2>

            <p>
              India's leading smartwatch and audio brand.
            </p>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Products
            </h3>

            <ul className="space-y-2">
              <li>Smart Watches</li>
              <li>Audio</li>
              <li>Accessories</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Support
            </h3>

            <ul className="space-y-2">
              <li>Contact Us</li>
              <li>Warranty</li>
              <li>Track Order</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">
              Newsletter
            </h3>

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 rounded text-black"
            />
          </div>

        </div>

      </div>

    </footer>
  );
}

export default Footer;