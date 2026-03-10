import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../components/common/FormInput";
import { loginUser } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import FormDropdown from "../../components/common/FormDropdown";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const payload = {
      username: data.username,
      password: data.password,
      expiresInMins: 30,
    };

    const result = await dispatch(loginUser(payload));

    if (result?.payload?.accessToken) {
      navigate("/");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl text-black font-bold text-center mb-6">
          Login
        </h2>

        <form onSubmit={handleSubmit(onSubmit)}>
          <FormInput
            label="Username"
            name="username"
            register={register}
            errors={errors}
            placeholder="Enter username"
            rules={{
              required: "Username is required",
            }}
          />

          <FormInput
            label="Password"
            name="password"
            type="password"
            register={register}
            errors={errors}
            placeholder="Enter password"
            rules={{
              required: "Password is required",
            }}
          />

          {/* Testing dropdown */}
          <FormDropdown
            label="Status"
            name="status"
            register={register}
            errors={errors}
            rules={{
              required: "Status is required",
            }}
            options={[
              { label: "Active", value: "active" },
              { label: "Inactive", value: "inactive" },
            ]}
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg transition"
          >
            {loading ? "Logging in..." : "Login"}
          </button>

          {error && (
            <p className="text-red-500 text-sm mt-3 text-center">{error}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Login;