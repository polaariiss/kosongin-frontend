"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function AdminLoginPage() {

  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState(false);

  const handleLogin = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      /* RESET ERROR */
      setError(false);

      /* DEMO ADMIN ACCOUNT */
      const adminEmail =
        "admin@kosongin.com";

      const adminPassword =
        "admin123";

      /* VALIDASI LOGIN */
      if (
        email === adminEmail &&
        password ===
          adminPassword
      ) {

        /* SAVE COOKIE */
        Cookies.set(
          "admin_token",
          "dummy_admin_token",
          {
            expires: 1,
          }
        );

        /* SAVE ADMIN DATA */
        localStorage.setItem(
          "admin_data",
          JSON.stringify({
            name: "Admin",
            email:
              adminEmail,
            role: "admin",
          })
        );

        /* REDIRECT */
        router.push(
          "/admin/dashboard"
        );

        return;
      }

      /* LOGIN GAGAL */
      setError(true);

    } catch (err) {
      console.log(err);

      setError(true);

    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F5F5F5] px-4">

      <div className="w-full max-w-[420px] bg-[#FFFAF9] p-8 rounded-2xl shadow-lg">

        {/* TITLE */}
        <h1 className="text-3xl font-heading font-bold text-center mb-3">
          Log in Admin
        </h1>

        {/* DESC */}
        <p className="text-black text-[14px] mb-6">
          Please enter your email and password to log in to your account.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleLogin}
        >

          {/* EMAIL */}
          <div className="mb-4">

            <label className="block mb-1 text-lg font-bold">
              Email/Username
            </label>

            <input
              type="email"
              placeholder="admin@kosongin.com"
              className={`w-full border-2 p-3 rounded-lg outline-none ${
                error
                  ? "border-red-400"
                  : "border-black"
              }`}
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
              required
            />

            {error && (
              <p className="text-red-500 text-sm mt-1 font-semibold ">
                Format email tidak valid. Coba periksa kembali.
              </p>
            )}

          </div>

          {/* PASSWORD */}
          <div className="mb-4">

            <label className="block mb-1 text-lg font-bold">
              Password
            </label>

            <input
              type="password"
              placeholder="Password"
              className={`w-full border-2 p-3 rounded-lg outline-none ${
                error
                  ? "border-red-400"
                  : "border-black"
              }`}
              value={password}
              onChange={(e) =>
                setPassword(
                  e.target.value
                )
              }
              required
            />

            {error && (
              <p className="text-red-500 text-sm mt-1 font-semibold">
                Format password tidak valid. Coba periksa kembali.
              </p>
            )}

          </div>

          {/* REMEMBER ME */}
          <div className="flex items-center justify-between mb-6">

            <label className="flex items-center gap-2 text-sm font-bold text-black">

              <input
                type="checkbox"
                className="w-4 h-4"
              />

              Remember me
            </label>

            <button
              type="button"
              className="text-sm font-bold text-black underline"
            >
              Forgot Password?
            </button>

          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#90BAB7] hover:bg-[#5A7A6D] text-black p-4 rounded-lg font-bold text-xl"
          >
            {loading
              ? "Loading..."
              : "Log in"}
          </button>

        </form>
      </div>
      {/* LOGIN USER */}
      <div className="w-full max-w-[420px] mt-4 flex justify-end">

        <button
          type="button"
          onClick={() =>
            router.push("/login")
          }
          className="text-sm font-bold text-black underline"
        >
          Log in sebagai User
        </button>

      </div>

    </div>
    
  );
}