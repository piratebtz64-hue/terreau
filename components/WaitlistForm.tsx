"use client";

import { useState, FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: email.trim().toLowerCase() })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Une erreur est survenue");
      }

      setStatus("success");
      setMessage("Merci. Vous serez prévenu dès le lancement.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Une erreur est survenue. Réessayez.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-bone/20 bg-bone/10 px-6 py-8 text-center">
        <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-bone/20">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <p className="font-display text-xl tracking-tight">C’est noté</p>
        <p className="mt-2 text-sm text-bone/75">{message}</p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 font-mono text-xs text-bone/50 underline-offset-2 hover:text-bone hover:underline"
        >
          Inscrire une autre adresse
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="mt-2">
      <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
        <input
          type="email"
          name="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="votre@email.com"
          disabled={status === "loading"}
          className="w-full rounded-full border-0 bg-bone/15 px-6 py-3.5 text-sm text-bone placeholder:text-bone/45 transition focus:outline-none focus:ring-2 focus:ring-bone/35 disabled:opacity-60 sm:max-w-[280px]"
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="rounded-full bg-bone px-8 py-3.5 font-mono text-sm font-medium text-humus transition hover:bg-parchment active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Inscription…" : "Me prévenir"}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-4 font-mono text-xs text-red-200">{message}</p>
      )}

      <p className="mt-5 font-mono text-[11px] leading-relaxed text-bone/45">
        Un seul email de lancement. Vous pourrez vous désinscrire à tout moment.
      </p>
    </form>
  );
}
