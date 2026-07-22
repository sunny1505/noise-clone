import { useState } from "react";
import { useAuth } from "../../context/AuthContext";

function LoginModal({ switchToRegister, closeModal }) {

  const { login } = useAuth();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email || !formData.password) {

      setError("Please fill all fields.");
      return;

    }

    const response = login(
      formData.email,
      formData.password
    );

    if (!response.success) {

      setError(response.message);
      return;

    }

    setSuccess("Login Successful!");

    setFormData({
      email: "",
      password: "",
    });

    setTimeout(() => {
      closeModal();
    }, 1200);

  };

  return (

    <form onSubmit={handleSubmit} className="space-y-5">

      <h2 className="text-3xl font-bold text-center">
        Welcome Back
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
        type="email"
        name="email"
        placeholder="Email Address"
        value={formData.email}
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

      <button
        type="submit"
        className="w-full bg-black text-white py-4 rounded-xl hover:bg-red-500 transition"
      >
        Login
      </button>

      <p className="text-center">

        Don't have an account?

        <button
          type="button"
          onClick={switchToRegister}
          className="ml-2 text-red-500 font-semibold"
        >
          Register
        </button>

      </p>

    </form>

  );

}

export default LoginModal;