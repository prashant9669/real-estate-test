import { ArrowRight, Facebook, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#02150E] mt-20 text-white">
      <div className="container mx-auto px-6 pt-16 pb-8">
        {/* TOP GRID */}
        <div className="grid gap-12 lg:grid-cols-[2fr_1fr_1fr_2fr]">
          {/* BRAND + ADDRESS */}
          <div>
            <div className="flex items-center gap-3">
              {/* Logo box – replace with real logo img if you have */}
              <div className="h-10 w-10 rounded-md border border-[#3FD797] flex items-center justify-center">
                <span className="text-xl font-bold text-[#3FD797]">R</span>
              </div>
              <div className="leading-tight">
                <p className="text-sm font-semibold tracking-wide">
                  PROTIVA
                </p>
                <p className="text-xs tracking-[0.15em] uppercase">
                  Grandview
                </p>
              </div>
            </div>

            <div className="mt-6 space-y-1 text-xs leading-relaxed text-slate-200">
              <p>Wema towers, 54 marina rd,</p>
              <p>lagos island, lagos 102273,</p>
              <p>Lagos, Nigeria</p>
            </div>

            <div className="mt-4 space-y-1 text-xs text-slate-200">
              <p>Info@protivaninja.com</p>
              <p>+234 9457894334</p>
            </div>
          </div>

          {/* MENU */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Menu</h4>
            <ul className="space-y-2 text-xs text-slate-200">
              <li>About Us</li>
              <li>Buy</li>
              <li>List Property</li>
              <li>Agents</li>
              <li>Contact Us</li>
            </ul>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Links</h4>
            <ul className="space-y-2 text-xs text-slate-200">
              <li>Property Developers</li>
              <li>Blog</li>
              <li>Privacy Policy</li>
              <li>Terms &amp; Conditions</li>
              <li>FAQ&apos;s</li>
            </ul>
          </div>

          {/* NEWSLETTER + SOCIAL */}
          <div className="flex flex-col items-start lg:items-end gap-6">
            <div className="max-w-sm text-right">
              <p className="text-sm font-medium">
                Let&apos;s keep in touch— Be the first to know what&apos;s coming
              </p>

              <div className="mt-4 rounded-2xl bg-[#122218] border border-white/10 px-6 py-4 flex items-center gap-3 w-full">
                <input
                  type="email"
                  placeholder="Email"
                  className="flex-1 bg-transparent text-xs text-slate-100 placeholder:text-slate-400 focus:outline-none"
                />
                <button className="h-9 w-9 rounded-full border border-[#3FD797] flex items-center justify-center hover:bg-[#3FD797]/10 transition">
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex gap-4">
              <button className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition">
                <Facebook className="h-4 w-4" />
              </button>
              <button className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition">
                <Instagram className="h-4 w-4" />
              </button>
              <button className="h-9 w-9 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/5 transition">
                <Youtube className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-10 border-t border-white/10 pt-4">
          <p className="text-center text-[11px] text-slate-300">
            © 2025 Protiva NINja. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
