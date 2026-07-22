import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function RegisterModal({ switchToLogin }) {

  const { register } = useAuth();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const [success, setSuccess] = useState("");

  const handleChange = (e) => {

    setFormData({

      ...formData,

      [e.target.name]: e.target.value,

    });

  };

  const handleSubmit = (e) => {

    e.preventDefault();

    setError("");

    setSuccess("");

    if (

      !formData.name ||

      !formData.email ||

      !formData.phone ||

      !formData.password ||

      !formData.confirmPassword

    ) {

      setError("Please fill all fields.");

      return;

    }

    if (formData.password !== formData.confirmPassword) {

      setError("Passwords do not match.");

      return;

    }

const response = register({
  id: Date.now(),
  name: formData.name,
  email: formData.email,
  phone: formData.phone,
  password: formData.password,
});

if (!response.success) {

  setError(response.message);

  return;

}

setSuccess("Registration Successful!");

setFormData({
  name: "",
  email: "",
  phone: "",
  password: "",
  confirmPassword: "",
});

setTimeout(() => {

  switchToLogin();

}, 1500);
  };

  return (

    <form
      onSubmit={handleSubmit}
      className="space-y-5"
    >

      <h2 className="text-3xl font-bold text-center">

        Create Account

      </h2>

      {error && (

        <div className="bg-red-100 text-red-600 p-3 rounded-xl">

          {error}

        </div>

      )}

      {success && (

        <div className="bg-green-100 text-green-700 p-3 rounded-xl">

          {success}

        </div>

      )}

      <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={formData.name}
        onChange={handleChange}
        className="w-full border rounded-xl p-4 outline-none focus:border-black"
      />

      <input
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
        onChange={handleChange}
        className="w-full border rounded-xl p-4 outline-none focus:border-black"
      />

      <input
        type="text"
        name="phone"
        placeholder="Mobile Number"
        value={formData.phone}
        onChange={handleChange}
        className="w-full border rounded-xl p-4 outline-none focus:border-black"
      />

      <input
        type="password"
        name="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        className="w-full border rounded-xl p-4 outline-none focus:border-black"
      />

      <input
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        value={formData.confirmPassword}
        onChange={handleChange}
        className="w-full border rounded-xl p-4 outline-none focus:border-black"
      />

      <button
        type="submit"
        className="w-full bg-black text-white py-4 rounded-xl hover:bg-red-500 transition"
      >

        Create Account

      </button>

      <p className="text-center">

        Already have an account?

        <button
          type="button"
          onClick={switchToLogin}
          className="text-red-500 ml-2 font-semibold"
        >

          Login

        </button>

      </p>

    </form>

  );

}

export default RegisterModal;