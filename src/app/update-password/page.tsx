import { updatePassword } from "./action";
export default function updatePasswordPage() {
  return (
    <section className="flex items-center justify-center min-h-screen">
        <div className="space-y-4">
 <h1 className="uppercase font-extrabold text-3xl md:text-4xl ">
        Reset <span className="text-blue-900 ">Password</span>
      </h1>
      <form action={updatePassword} className="">
        <div>
          <label htmlFor="newpasswrd">Enter New Password</label>
          <input
            type="password"
            name="newpassword"
            id="newpassword"
            placeholder="new password"
            minLength={8}
            required
            className="w-full my-2 border border-blue-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>
        <div>
          <label htmlFor="confirmpassword" className="block mb-2 font-medium ">
            Confirm New Password
          </label>
          <input
            type="password"
            name="confirmpassword"
            id="confirmpassword"
            minLength={8}
            required
            placeholder="confirm password"
            className="w-full my-2 border border-blue-700 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
          />
        </div>
        <button
          type="submit"
          className="w-full cursor-pointer bg-blue-900 hover:bg-blue-800 transition text-white py-3 rounded-lg font-semibold"
        >
          Reset Password
        </button>
      </form>
        </div>
     
    </section>
  );
}
