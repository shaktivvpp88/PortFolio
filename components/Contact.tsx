import React, { useState } from "react";
import { Reveal } from "./Reveal";

const Contact: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [hasSubmitted, setHasSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const baseUrl = process.env.API_BASE_URL || "";
      const res = await fetch(`${baseUrl}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Failed");

      setStatus("success");
      setHasSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-32 bg-dark relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-dark to-dark pointer-events-none"></div>

      <div className="container mx-auto px-6 max-w-6xl relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left Column */}
          <div>
            <Reveal>
              <h2 className="text-5xl md:text-7xl font-bold font-display text-primary-text mb-8 leading-[1.1]">
                Let's start a <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-pink-500 animate-gradient-x">
                  conversation.
                </span>
              </h2>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-secondary-text text-lg md:text-xl font-light mb-12 max-w-lg leading-relaxed">
                Interested in working together? I'm always open to discussing
                new projects, creative ideas, or opportunities to be part of
                your vision.
              </p>
            </Reveal>
          </div>

          {/* Right Column: Form */}
          <Reveal delay={0.3} width="100%">
            <div
              className="relative bg-white/60 dark:bg-card/30 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-neutral-200 dark:border-white/10 shadow-2xl overflow-hidden group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 transition-opacity duration-700 ${
                  isHovered ? "opacity-100" : ""
                }`}
              />

              <form className="space-y-6 relative z-10" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-secondary-text uppercase tracking-widest ml-1">
                      Name
                    </label>
                    <input
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Jane Doe"
                      required
                      className="w-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-4 text-primary-text placeholder-neutral-400 dark:placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-bold text-secondary-text uppercase tracking-widest ml-1">
                      Email
                    </label>
                    <input
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="jane@example.com"
                      required
                      className="w-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-4 text-primary-text placeholder-neutral-400 dark:placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-bold text-secondary-text uppercase tracking-widest ml-1">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell me about your project..."
                    required
                    className="w-full bg-neutral-100 dark:bg-white/5 border border-neutral-200 dark:border-white/10 rounded-xl px-4 py-4 text-primary-text placeholder-neutral-400 dark:placeholder-white/20 focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none transition-all"
                  />
                </div>

                <button
                  disabled={loading || hasSubmitted}
                  className={`w-full py-5 font-bold rounded-xl transition-all flex items-center justify-center gap-2
    ${
      hasSubmitted
        ? "bg-green-600 cursor-not-allowed"
        : "bg-gradient-to-r from-primary to-indigo-600 hover:opacity-90"
    }
    disabled:opacity-70
  `}
                >
                  {loading && "Sending..."}

                  {!loading && hasSubmitted && (
                    <>
                      <svg
                        className="w-5 h-5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      Sent
                    </>
                  )}

                  {!loading && !hasSubmitted && "Send Message"}
                </button>

                {status === "error" && (
                  <p className="text-red-500 text-sm text-center">
                    Something went wrong. Try again.
                  </p>
                )}
              </form>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default Contact;
