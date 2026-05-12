"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Cookies from "js-cookie";
import api from "@/services/api";
import { jwtDecode } from "jwt-decode";

type DecodedToken = {
  id: string;
  role: string;
  exp: number;
};

export default function AdminLoginPage() {

  const router = useRouter();

  const [identifier, setIdentifier] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const handleLogin = async (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    try {

      setLoading(true);

      setError("");

      /* LOGIN SESUAI BACKEND */
      const response =
        await api.post(
          "/api/auth/login",
          {
            ...(identifier.includes("@")
              ? {
                  email:
                    identifier,
                }
              : {
                  nickname:
                    identifier,
                }),

            password,
          }
        );

      console.log(
        "LOGIN RESPONSE:",
        response.data
      );

      /* TOKEN */
      const accessToken =
        response.data.data
          .accessToken;

      /* DECODE TOKEN */
      const decoded =
        jwtDecode<DecodedToken>(
          accessToken
        );

      console.log(
        "DECODED TOKEN:",
        decoded
      );

      /* VALIDASI ROLE */
      if (
        decoded.role !==
        "admin"
      ) {

        setError(
          "Akun ini bukan admin."
        );

        return;
      }

      /* SAVE TOKEN */
      Cookies.set(
        "admin_token",
        accessToken,
        {
          expires: 1,
        }
      );

      /* SAVE ADMIN DATA */
      localStorage.setItem(
        "admin_data",
        JSON.stringify({
          id: decoded.id,
          role: decoded.role,
          identifier,
        })
      );

      /* REDIRECT */
      router.push(
        "/admin/dashboard"
      );

    } catch (err: any) {

      console.log(
        "LOGIN ERROR:"
      );

      console.log(err);

      console.log(
        "STATUS:"
      );

      console.log(
        err.response?.status
      );

      console.log(
        "DATA:"
      );

      console.log(
        err.response?.data
      );

      setError(
        err?.response?.data
          ?.message ||
          "Login admin gagal"
      );

    } finally {

      setLoading(false);

    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4">

      <div className="w-full max-w-[420px] bg-[#FFFAF9] p-8 rounded-2xl shadow-lg">

        {/* TITLE */}
        <h1 className="text-3xl font-heading font-bold text-center mb-3">
          Log in Admin
        </h1>

        {/* DESC */}
        <p className="text-black text-[14px] mb-6">
          Please enter your email or username and password to log in to your account.
        </p>

        {/* FORM */}
        <form
          onSubmit={handleLogin}
        >

          {/* EMAIL / USERNAME */}
          <div className="mb-4">

            <label className="block mb-1 text-lg font-bold">
              Email / Username
            </label>

            <input
              type="text"
              placeholder="admin@kosongin.com / superadmin"
              className={`w-full border-2 p-3 rounded-lg outline-none ${
                error
                  ? "border-red-400"
                  : "border-black"
              }`}
              value={identifier}
              onChange={(e) =>
                setIdentifier(
                  e.target.value
                )
              }
              required
            />

            {error && (
              <p className="text-red-500 text-sm mt-1 font-semibold">
                Email / Username atau password salah.
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

          {/* ERROR */}
          {error && (

            <div className="bg-red-100 text-red-600 text-sm p-3 rounded-lg mb-4">

              {error}

            </div>

          )}

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#90BAB7] hover:bg-[#7DA7A4] text-black p-4 rounded-lg font-bold text-xl transition-all"
          >

            {loading
              ? "Loading..."
              : "Log in"}

          </button>

        </form>

      </div>

      {/* LOGIN USER */}
      <div className="absolute bottom-6 right-6">

        <button
          onClick={() =>
            router.push("/login")
          }
          className="text-sm font-bold text-[#032119] underline"
        >
          Log in sebagai User
        </button>

      </div>

    </div>
  );
}