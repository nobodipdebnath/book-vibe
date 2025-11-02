

export const Login = () => {
  return (
    <div className="flex justify-center py-20">
      <form className="w-2/5 shadow-xl rounded-xl p-8" action="">
      <h1 className="text-center text-4xl font-semibold text-primary1 py-4">Sign in</h1>
        <div className="flex flex-col gap-2">
          <label className="text-gray-600 text-base font-medium" htmlFor="">Email</label>
          <input
            className="py-3 w-full px-5 border rounded-xl outline-none border-gray-200"
            type="email" placeholder="Enter Your Email" required
            name=""
            id=""
          />
        </div>
        <div className="flex flex-col gap-2 mt-3">
          <label className="text-gray-600 text-base font-medium" htmlFor="">Password</label>
          <input
            className="py-3 w-full px-5 border rounded-xl outline-none border-gray-200"
            type="password" placeholder="Enter Your Password"
            name=""
            id=""
          />
        </div>
        <div className="flex justify-between items-center my-3">
            <input type="checkbox" name="" id="" required />
            <a className="hover:underline hover:text-blue-500" href="">Forgot Password</a>
        </div>
        <div>
            <button className="w-full py-3 hover:bg-[#46df2e] duration-500 bg-[#23BE0A] text-white text-xl font-semibold rounded-xl ">Sign in</button>
        </div>
      </form>
    </div>
  );
};
