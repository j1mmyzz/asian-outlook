"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const supabase = createClient();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleLogin(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setErrorMessage(error.message);
      alert(error.message);
      return;
    }

    window.location.href = "/admin";
  }

  return (
    <main className="mx-auto max-w-md px-6 py-20">
      <h1 className="mb-6 text-3xl font-bold">Admin Login</h1>

      <form
        onSubmit={handleLogin}
        className="space-y-4 rounded-xl border p-6"
        noValidate
      >
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className="w-full rounded border px-4 py-3"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            aria-describedby={errorMessage ? "login-error" : undefined}
            aria-invalid={errorMessage ? true : false}
          />
        </div>

        <div>
          <label htmlFor="password" className="mb-2 block text-sm font-medium">
            Password
          </label>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
            className="w-full rounded border px-4 py-3"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            aria-describedby={errorMessage ? "login-error" : undefined}
            aria-invalid={errorMessage ? true : false}
          />
        </div>

        <div
          id="login-error"
          aria-live="polite"
          className={errorMessage ? "text-sm text-red-600" : "sr-only"}
        >
          {errorMessage || " "}
        </div>

        <button
          type="submit"
          className="w-full rounded bg-black py-3 text-white"
        >
          Login
        </button>
      </form>
    </main>
  );
}
