import { FaFacebookF, FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Login = ({ handleSwitch }) => {
  const Navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Get user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    // Simple authentication check
    if (storedUser && storedUser.email === email && storedUser.password === password) {
            localStorage.setItem("isLoggedIn", "true");
      Navigate('/') // Save login state
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="w-full max-w-sm mx-auto bg-white p-8 shadow-lg transform transition-all hover:scale-105 hover:shadow-2xl rounded-3xl">
      <h1 className="text-3xl font-bold mb-6 text-gray-800 text-center text-blue-900">Sign in</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center mb-4">
          <a href="#" className="p-2 text-xl text-blue-700 transform hover:scale-110 transition-transform">
            <FaFacebookF />
          </a>
          <a href="#" className="p-2 text-xl text-red-500 transform hover:scale-110 transition-transform">
            <FaGoogle />
          </a>
          <a href="#" className="p-2 text-xl text-blue-500 transform hover:scale-110 transition-transform">
            <FaLinkedinIn />
          </a>
        </div>
        <p className="text-center mb-6 text-gray-600">Or use your email for login</p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          className="w-full mb-4 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          className="w-full mb-4 p-2 border-b-2 border-gray-300 focus:outline-none focus:border-indigo-600"
        />
        <button
          type="submit"
          className="w-full py-2 bg-[#a16207] text-white font-bold rounded-lg hover:bg-indigo-500 transition-all shadow-lg transform hover:translate-y-1"
        >
          Sign in
        </button>
        <p className="text-center mt-4 text-gray-600">
          Forgot your password?{" "}
          <a href="#" className="text-[#a16207]">
            Click here
          </a>
        </p>
      </form>
      <p className="text-center mt-6 text-gray-600">
        Don't have an account?{" "}
        <button
          onClick={handleSwitch}
          className="text-[#a16207] font-bold hover:underline"
        >
          Sign up
        </button>
      </p>
    </div>
  );
};

export default Login;
