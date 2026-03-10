import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import FormInput from "../../components/common/FormInput";
import { loginUser } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import FormDropdown from "../../components/common/FormDropdown";

const Login = () => {
  const dispatch = useDispatch();

  const { loading, error } = useSelector((state) => state.auth);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

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
    <div>
      <h2>Login</h2>

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
        {/* /// just for testing purpose, as dummyjson does not have user status field in login */}
        {/* <FormDropdown
          label="Status"
          name="status"
          register={register}
          errors={errors}
          rules={{
            required: "Status is required",
          }}
          //   defaultValue={user?.status}
          options={[
            { label: "Active", value: "active" },
            { label: "Inactive", value: "inactive" },
          ]}
        /> */}

        <button type="submit">{loading ? "Logging in..." : "Login"}</button>

        {error && <p style={{ color: "red" }}>{error}</p>}
      </form>
    </div>
  );
};

export default Login;
