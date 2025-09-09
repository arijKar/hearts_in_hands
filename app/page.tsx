'use client';

import React, { useState } from 'react';

export default function Page() {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[var(--beige)] text-[var(--dark-olive)]">
      {/* ===== Header ===== */}
      <header className="w-full sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-[#e6d3d9]/60 shadow-sm
                   h-12 sm:h-14 md:h-16 lg:h-20">
  <div className="site-container max-w-6xl flex items-center justify-between h-full
                  px-2 sm:px-3 md:px-4">
    {/* Brand */}
    <a href="#" className="flex items-center gap-2 sm:gap-2.5 no-underline outline-none group">
      <img
        src="/hearts-in-hands.png"
        alt="Hearts in Hands logo"
        className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10
                   object-contain rounded-lg ring-1 ring-[#e6d3d9]/60 group-hover:scale-105 transition-transform"
      />
      <span className="font-extrabold text-sm sm:text-base md:text-lg lg:text-xl
                       text-[var(--burgundy)] tracking-tight group-hover:opacity-90">
        Hearts In Hands
      </span>
    </a>

    {/* Desktop Nav */}
    <nav className="hidden md:flex items-center gap-3 lg:gap-5 text-xs lg:text-sm font-medium">
      <a href="#mission" className="hover:text-[var(--burgundy)] transition-colors">Mission</a>
      <a href="#team" className="hover:text-[var(--burgundy)] transition-colors">Our team</a>
      <a href="#events" className="hover:text-[var(--burgundy)] transition-colors">Events</a>
      <a href="#involved" className="hover:text-[var(--burgundy)] transition-colors">Get Involved</a>
      <a href="#contact" className="hover:text-[var(--burgundy)] transition-colors">Contact</a>
    </nav>

    {/* Donate */}
    <div className="hidden md:flex">
      <a
        className="btn btn-olive inline-flex items-center justify-center
                   px-2.5 py-1 text-xs rounded-lg shadow-sm
                   sm:px-3 sm:py-1.5 sm:text-sm
                   lg:px-4 lg:py-2
                   hover:shadow-md hover:-translate-y-0.5 transition-all"
        href="https://www.gofundme.com/f/help-us-raise-money-to-help-refugees-in-ottawa"
      >
        DONATE
      </a>
    </div>

    {/* Mobile hamburger */}
    <button
      className="md:hidden inline-flex items-center justify-center rounded-lg
                 px-2 py-1 sm:px-2.5 sm:py-1.5 bg-[var(--olive)] text-white"
      onClick={() => setOpen(!open)}
      aria-label="Open menu"
    >
      ☰
    </button>
  </div>

  {/* Mobile Menu (compact, only affects height on mobile when open) */}
  <div
    className={[
      "md:hidden border-t border-[#e6d3d9] bg-white origin-top overflow-hidden transition-transform duration-200",
      open ? "grid scale-y-100 opacity-100" : "grid scale-y-0 opacity-0 pointer-events-none",
    ].join(" ")}
  >
    <div className="site-container max-w-6xl px-3 py-2 sm:px-4 sm:py-3 grid gap-2 sm:gap-3 text-sm">
      <a href="#mission" className="py-0.5" onClick={() => setOpen(false)}>Mission</a>
      <a href="#team" className="py-0.5" onClick={() => setOpen(false)}>Our team</a>
      <a href="#events" className="py-0.5" onClick={() => setOpen(false)}>Events</a>
      <a href="#involved" className="py-0.5" onClick={() => setOpen(false)}>Get Involved</a>
      <a href="#contact" className="py-0.5" onClick={() => setOpen(false)}>Contact</a>
      <a
        className="btn btn-olive inline-flex items-center justify-center px-3 py-1.5 rounded-lg mt-1 text-sm shadow-sm hover:shadow-md transition-all"
        href="https://www.gofundme.com/f/help-us-raise-money-to-help-refugees-in-ottawa"
      >
        DONATE
      </a>
    </div>
  </div>
</header>


   
    
{/* ===== Hero ===== */}
<section
  id="home"
  className="relative overflow-hidden py-10 sm:py-12 md:py-16 bg-[var(--cream)]"
>
  {/* background accents */}
  <div className="absolute inset-0 -z-10 pointer-events-none">
    {/* soft blobs */}
    <div className="absolute -top-28 -left-24 w-80 h-80 rounded-full bg-[var(--pink)]/20 blur-3xl" />
    <div className="absolute -bottom-28 -right-24 w-96 h-96 rounded-full bg-[var(--olive)]/20 blur-3xl" />
    {/* dotted grid (a touch softer) */}
    <div className="absolute inset-0 opacity-[0.12] [background-image:radial-gradient(#ffffff80_1px,transparent_1px)] [background-size:20px_20px]" />
  </div>

  <div className="site-container max-w-6xl grid grid-cols-1 md:grid-cols-2 items-center gap-8 px-4">
    {/* copy */}
    <div>
      <span className="inline-block rounded-full px-3 py-1 text-xs md:text-sm font-semibold bg-[var(--pink)]/90 text-white shadow-sm ring-1 ring-white/60">
        Community • Dignity • Care
      </span>

      {/* gradient: burgundy -> light pink */}
      <h1 className="text-3xl md:text-5xl font-extrabold mt-3 leading-tight
                     bg-gradient-to-r from-[var(--burgundy)] via-[var(--deep-red)]/60 to-[var(--pink)]
                     bg-clip-text text-transparent">
        Holding hearts, lending hands.
      </h1>

      <p className="mt-4 leading-relaxed text-[var(--dark-olive)]/90 max-w-prose">
        Hearts In Hands supports families, students and newcomers with practical help,
        cultural celebration, and community led events rooted in compassion.
      </p>

      <div className="mt-4 flex flex-wrap gap-3">
        <a
          href="#involved"
          className="btn btn-olive px-4 py-2 rounded-xl shadow hover:shadow-md hover:-translate-y-0.5 transition-all"
        >
          See ways to help
        </a>
        <a
          href="#events"
          className="px-4 py-2 rounded-xl border border-[var(--olive)]/40 text-[var(--olive)] bg-white/60 hover:bg-white shadow-sm hover:shadow transition-all"
        >
          Explore events
        </a>
      </div>

      {/* tiny feature row */}
      <div className="mt-6 grid grid-cols-3 gap-4 text-xs text-[var(--dark-olive)]/80">
        <div className="flex items-center gap-2"><span>🤝</span><span>Volunteer-run</span></div>
        <div className="flex items-center gap-2"><span>🌿</span><span>Community first</span></div>
        <div className="flex items-center gap-2"><span>🎓</span><span>Student-led</span></div>
      </div>
    </div>

    {/* visual */}
    <div className="justify-self-center">
      {/* bigger frame so the PNG feels prominent */}
      <div className="relative w-[260px] sm:w-[280px] md:w-[320px] aspect-square">
        {/* glow halo */}
        <div className="absolute -inset-6 rounded-full bg-gradient-to-tr from-[var(--pink)]/30 to-[var(--olive)]/20 blur-2xl" />
        {/* inner plate */}
        <div className="absolute inset-0 rounded-full border-[6px] border-white shadow-[0_10px_40px_rgba(0,0,0,.08)] bg-gradient-to-br from-white to-[var(--cream)]" />
        {/* logo (absolute + grid ensures PERFECT centering) */}
        <div className="absolute inset-0 z-10 grid place-items-center animate-[float_6s_ease-in-out_infinite]">
          <img
            src="/hearts-in-hands.png"
            alt="Hearts in Hands logo"
            className="w-[86%] md:w-[88%] aspect-square object-contain drop-shadow"
          />
        </div>
        {/* badge */}
        <div className="absolute -right-2 -bottom-2 rounded-full px-2 py-1 text-[10px] font-semibold bg-[var(--burgundy)] text-white shadow-sm">
          HIH
        </div>
        {/* tiny animated dots */}
        <span className="absolute -top-1 left-8 w-3 h-3 rounded-full bg-[var(--pink)]/70 animate-pulse" />
        <span className="absolute top-10 -left-2 w-2.5 h-2.5 rounded-full bg-[var(--olive)]/70 animate-pulse" />
        <span className="absolute bottom-10 right-4 w-2 h-2 rounded-full bg-[var(--burgundy)]/60 animate-pulse" />
      </div>
    </div>
  </div>
</section>


     

      {/* ===== Mission / About ===== */}
      <section className="py-10" id="mission">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-6 px-4">
          <div className="bg-white rounded-2xl p-5 shadow-sm border border-[#e6d3d9] hover:shadow-md hover:-translate-y-0.5 transition-all">
            <h2 className="text-2xl md:text-3xl font-bold">Our Mission</h2>
            <p className="mt-3">
              We build welcoming spaces and practical support systems so our neighbours can thrive 
              from food & essentials to student mentorship and cultural programming that honours
              Palestinian heritage and the diversity of our community.
            </p>
            <ul className="mt-3 list-disc pl-5 space-y-1">
              <li>Student & newcomer support</li>
              <li>Family essentials & dignity kits</li>
              <li>Cultural education & community events</li>
            </ul>
          </div>

          <aside
              className="rounded-2xl p-5 md:p-6 shadow-sm border border-[#e6d3d9] text-white hover:shadow-md hover:-translate-y-0.5 transition-all bg-[var(--olive)]"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="text-xl md:text-2xl font-bold m-0">Our Collaborations</p>
                <span className="text-[10px] md:text-xs uppercase tracking-wide bg-white/15 px-2 py-1 rounded-full">
                  Community Partners
                </span>
              </div>

              {/* logos + labels (stacked, landscape logo area) */}
                <div className="mt-4 grid grid-cols-1 gap-4">
                  {/* Run for Palestine */}
                  <div className="group flex items-center gap-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors p-4">
                    {/* LANDSCAPE holder */}
                    <div className="shrink-0 w-[220px] sm:w-[240px] aspect-[16/9] rounded-xl bg-white grid place-items-center overflow-hidden shadow ring-1 ring-white/40 p-2">
                      <img
                        src="/rpf.png"  /* use your landscape logo here */
                        alt="Run for Palestine (Ottawa) logo"
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="min-w-0">
                      <div className="font-semibold leading-tight text-base md:text-lg">Run for Palestine (Ottawa)</div>
                      <div className="text-white/85 text-sm">Event collaboration</div>
                    </div>
                  </div>

                  {/* OCISO Youth Program */}
                    <div className="group flex items-center gap-4 rounded-xl bg-white/10 hover:bg-white/15 transition-colors p-4">
                      {/* LANDSCAPE holder */}
                      <div className="shrink-0 w-24 sm:w-28 md:w-32 aspect-square rounded-xl bg-white grid place-items-center overflow-hidden shadow ring-1 ring-white/40 p-2">
                        <img
                          src="/ociso-youth-program.png" // or 480x200 / 640x280
                          alt="OCISO Youth Program logo"
                          className="w-full h-full object-contain"
                        />
                      </div>
                      <div className="min-w-0">
                        <div className="font-semibold leading-tight text-base md:text-lg">OCISO Youth Program</div>
                        <div className="text-white/85 text-sm">Youth support partnership</div>
                      </div>
                    </div>

                </div>

            </aside>

        </div>
      </section>

      {/* ===== Events ===== */}
      <section className="py-10 bg-[var(--cream)]" id="events">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold">Events</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {[
              {
                title: 'STEM Workshops',
                body: (
                  <>
                    <p className="mt-3">
                      We bring science to life for kids through fun, hands-on activities:
                    </p>
                    <ul className="mt-3 list-disc pl-5 space-y-1">
                      <li>Egg Drop Challenge (for older kids)</li>
                      <li>DIY Water Filtration</li>
                      <li>Homemade Volcanoes (baking soda + vinegar reaction)</li>
                      <li>Slime Making (perfect for younger kids)</li>
                    </ul>
                  </>
                ),
              },
              {
                title: 'Community Fundraising',
                body: (
                  <>
                    <p className="mt-3">
                      Our bake sales raise funds to create and distribute care packages. All
                      proceeds go toward materials and gifts for refugee children. We sell:
                    </p>
                    <ul className="mt-3 list-disc pl-5 space-y-1">
                      <li>Freshly baked cookies</li>
                      <li>Creamy knafeh cups</li>
                      <li>Dubai chocolate strawberries</li>
                    </ul>
                  </>
                ),
              },
              {
                title: 'Care Packages ',
                body: (
                  <>
                    <p className="mt-3">
                      Each package includes fun and useful items for kids aged 5–12. We also
                      include personalized touches, stickers, and hand-packed gift bags with
                      handles. Examples:
                    </p>
                    <ul className="mt-3 list-disc pl-5 space-y-1">
                      <li>Writing tablets</li>
                      <li>Squishy toys</li>
                      <li>Rubik’s cubes</li>
                      <li>Bracelet bead kits</li>
                    </ul>
                  </>
                ),
              },
            ].map((p) => (
              <div key={p.title} className="bg-white rounded-2xl p-5 shadow-sm border border-[#e6d3d9] hover:shadow-md hover:-translate-y-0.5 transition-all">
                <strong className="text-[var(--burgundy)] underline decoration-transparent underline-offset-4 hover:decoration-[var(--burgundy)] transition-colors">{p.title}</strong>
                <div className="mt-2">{p.body}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Team ===== */}
      <section className="py-10" id="team">
        <div className="container mx-auto max-w-6xl px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center">Meet our co-founders</h2>

          {/* Yasmine (image left, text right) */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-5 mt-5 items-center">
            {/* image */}
            <figure className="relative w-full overflow-hidden rounded-2xl border border-[#e6d3d9] bg-[var(--cream)]/60 shadow-sm">
              {/* soft glow (optional) */}
              <div className="pointer-events-none absolute -inset-3 bg-gradient-to-tr from-[var(--pink)]/15 to-[var(--olive)]/10 blur-2xl" />
              <img
                src="/team/yasmine.png"
                alt="Yasmine Yassine"
                className="w-full h-full object-cover aspect-[4/5] md:aspect-[3/4]"
                loading="lazy"
              />
              <figcaption className="sr-only">Yasmine Yassine</figcaption>
            </figure>

            {/* text */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold m-0">Yasmine Yassine</h3>
              <p className="mt-2 leading-relaxed">
                Hi. I'm Yasmine, a 3rd year Translational and Molecular Medicine student at the
                University of Ottawa. Growing up, I spent my summers visiting my family in Palestinian
                refugee camps in Lebanon. Despite the resilience and strength of the people, I witnessed
                firsthand the daily challenges they have to overcome. These visits opened my eyes to the
                fact that although the children living in the camps are full of talent and potential,
                there is often a lack of opportunities for them to thrive simply because of their
                circumstances. This experience led and inspired me to co-found Hearts in Hands, a
                youth-led initiative in Ottawa dedicated to supporting refugee and newcomer children.
                Through this initiative, I hope to inspire and motivate youth arriving from all corners
                of the globe to find their fullest potential, discover their talents and thrive.
              </p>
            </div>
          </div>


          {/* Jenna (text left, image right) */}
          <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr] gap-5 mt-6 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold m-0">Jenna Abu-Dieh</h3>
              <p className="mt-2 leading-relaxed">
                Hi, my name is Jenna, and I’m in my third year at the University of Ottawa. Growing up,
                I never had the chance to visit my home country, Palestine. I came to know it through the
                stories, memories, and emotions my parents and grandparents shared; the love for a place
                they once called home, the grief for what was lost, and the hope that never faded. Here in
                Canada, I’ve met children who arrived as refugees, many from places like Gaza, Syria, and
                Lebanon, and I’ve realized something profound: they are no different from the children born
                here. They have the same dreams, talents, and potential, yet their journeys are often marked
                by challenges beyond their control. Too often, they are unfairly perceived as less capable,
                when in truth, they simply haven’t been given the same opportunities. This understanding led
                me to co-found Hearts in Hands (HIH). Based in Ottawa, our mission is simple but powerful:
                to place kindness, dignity, and opportunity directly into the hands of children who need it
                most. For me, HIH is more than an initiative — it’s a promise to bridge the gap between what
                is and what could be, one child, one family, one heart at a time.
              </p>
            </div>
            <div className="h-[300px] rounded-2xl border border-[#e6d3d9] bg-[var(--cream)]/70 grid place-items-center [background-image:radial-gradient(circle_at_30%_30%,rgba(127,141,59,.07),transparent_40%)]">
              <span className="opacity-70">Pic</span>
            </div>
          </div>

          {/* Divider */}
          <hr className="my-8 border-[#e6d3d9]" />

          <h3 className="text-2xl md:text-3xl font-bold text-center">The team</h3>

          {/* Team grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4 place-items-center items-stretch">
            {[
              {
                name: 'Arij Karoui',
                role: 'Web Developer',
                img: "/team/arij.png",
                desc: "Hi! I'm Arij, a third-year Computer Science student. As a Tunisian who grew up in Canada, I understand what it's like to build a sense ofhome in a new place, and I want to help children feel that same comfort here too. I also love spending time with my family and getting lost in a good book.",
              },
              {
                name: 'Usva Muhammad',
                role: 'Social media manager',
                img: "/team/usva.png",
                desc: "Hi! I'm Usva & I'm a third year Biomedical Sciences student. I joined HIH to give back in a meaningful way and help spread support for those who need it most. I hope to help create an environment that helps underserved communities feel seen, appreciated, and valued.",
              },
              {
                name: 'Salma Alsammak',
                role: 'Event coordinator',
                img: "/team/salma.png",
                desc: "Hi! I'm a fourth-year Biomedical Science student at the University of Ottawa.When I'm not in lectures or hitting the books, I love exploring cozy cafes with a good read in hand. I'm also a big fan of jasmine milk tea and can never resist a goodK-drama binge ;)",
              },
              {
                name: 'Heba Rafei',
                role: 'Volunteer coordinator',
                img: "/team/heba.png",
                desc: 'Hi! I’m Heba, a second-year Biomedical Science student at uOttawa. I’m Lebanese and joined HIH to help families, students, and newcomers feel supported and welcomed, while building a sense of belonging in the community. Outside of school I enjoy shopping with friends, going to the gym and spending time with family. ',
              },
            ].map((m) => (
              <div
                  key={m.name}
                  className="grid gap-2 max-w-[280px] justify-items-center text-center h-full rounded-2xl p-4 border border-[#e6d3d9] bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
                >
                  {/* image area */}
                  <div className="w-full aspect-[4/5] rounded-xl overflow-hidden border border-[#e6d3d9] bg-[var(--cream)]/70">
                    {m.img ? (
                      <img
                        src={m.img}
                        alt={m.name}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    ) : (
                      <div className="w-full h-full grid place-items-center text-[var(--dark-olive)]/60 text-sm">
                        Pic
                      </div>
                    )}
                  </div>

                  {/* text */}
                  <div>
                    <strong className="block">{m.name}</strong>
                    <span className="block opacity-80">{m.role}</span>
                    <p className="mt-2">{m.desc}</p>
                  </div>
                </div>

            ))}
          </div>
        </div>
      </section>

      {/* ===== Get Involved ===== */}
      <section className="py-10 bg-[var(--cream)]" id="involved">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold">Get involved</h2>
          <div className="mt-4 flex justify-center gap-8 flex-wrap">
            {[
              {
                title: 'Volunteer',
                body: 'Join an upcoming event or a weekly packing shift.',
                cta: 'Contact us',
                href: '#contact',
              },
              {
                title: 'Donate',
                body: 'Every dollar fuels local families, students and events.',
                cta: 'Give now',
                href:
                  'https://www.gofundme.com/f/help-us-raise-money-to-help-refugees-in-ottawa?attribution_id=sl:87e01799-18b3-4d2c-9cde-be42ab73a2f1&lang=en_CA&ts=1749045744&utm_campaign=fp_sharesheet&utm_content=amp13_t1-amp14_t2&utm_medium=customer&utm_source=copy_link&v=amp14_t2',
              },
            ].map((x) => (
              <div
                key={x.title}
                className="grid gap-2 justify-items-center text-center max-w-[280px] rounded-2xl p-5 border border-[#e6d3d9] bg-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all"
              >
                <strong className="text-[var(--burgundy)]">{x.title}</strong>
                <p>{x.body}</p>
                <a className="btn btn-olive inline-flex items-center justify-center px-4 py-2 rounded-xl" href={x.href}>
                  {x.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      
            {/* ===== Contact Us ===== */}
      <section id="contact" className="relative py-12">
        {/* soft background accents (optional but subtle) */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          <div className="absolute -top-24 -left-24 w-64 h-64 rounded-full bg-[var(--pink)]/12 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-[var(--olive)]/12 blur-3xl" />
        </div>

        <div className="site-container max-w-6xl px-4">
          <h2 className="text-center text-2xl md:text-3xl font-extrabold
                        bg-gradient-to-r from-[var(--burgundy)] to-[var(--pink)]
                        bg-clip-text text-transparent">
            Contact Us
          </h2>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Email */}
            <a
              href="mailto:hheartsinhands@gmail.com"
              className="group flex items-center justify-between rounded-2xl p-4
                        border border-[#e6d3d9] bg-white shadow-sm hover:shadow-md
                        transition-all hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-3">
                <span className="text-lg">📧</span>
                <span className="font-medium">hheartsinhands@gmail.com</span>
              </span>
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/hheartsinhands/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between rounded-2xl p-4
                        border border-[#e6d3d9] bg-white shadow-sm hover:shadow-md
                        transition-all hover:-translate-y-0.5"
            >
              <span className="flex items-center gap-3">
                <span className="text-lg">📸</span>
                <span className="font-medium">@heartsinhands</span>
              </span>
            </a>
          </div>
        </div>
      </section>


      {/* ===== Footer ===== */}
      <footer className="w-full border-t border-[#e6d3d9] bg-white/70 backdrop-blur">
        <div className="container mx-auto max-w-6xl flex items-center justify-between gap-4 flex-wrap px-4 py-4 text-[var(--dark-olive)]/80">
          <span>© {new Date().getFullYear()} Hearts In Hands</span>
          <div className="flex gap-2 items-center">
            <span className="inline-flex items-center rounded-full px-2 py-1 text-xs font-medium bg-white border border-[#e6d3d9]">H.I.H.</span>
            <a className="btn btn-olive inline-flex items-center justify-center px-4 py-2 rounded-xl" href="https://www.instagram.com/hheartsinhands/">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
