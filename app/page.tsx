'use client';

import React from 'react';

export default function Page() {
  return (
    <div>
      {/* ===== Header ===== */}
      <header className="header">
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '0.9rem 1rem',
          }}
        >
          <a href="#" className="brand" style={{ textDecoration: 'none' }}>
            <div className="brand-badge" style={{ background: 'none', borderRadius: 0 }}>
              <img
                src="/hearts in hands.png"
                alt="Hearts in Hands logo"
                style={{ width: '60px', height: '46px', objectFit: 'contain' }}
              />
            </div>
            <span style={{ fontWeight: 800, color: 'var(--burgundy)' }}>Hearts In Hands</span>
          </a>

          <nav className="nav">
            <a href="#mission">Mission</a>
            <a href="#team">Our team</a>
            <a href="#events">Events</a>
            <a href="#involved">Get Involved</a>
            <a href="#contact">Contact</a>
          </nav>

          <div style={{ display: 'flex', gap: '.5rem' }}>
            <a
              className="btn btn-olive"
              href="https://www.gofundme.com/f/help-us-raise-money-to-help-refugees-in-ottawa?attribution_id=sl:87e01799-18b3-4d2c-9cde-be42ab73a2f1&lang=en_CA&ts=1749045744&utm_campaign=fp_sharesheet&utm_content=amp13_t1-amp14_t2&utm_medium=customer&utm_source=copy_link&v=amp14_t2"
            >
              DONATE
            </a>
          </div>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="section alt" id="home">
        <div className="container grid grid-2" style={{ alignItems: 'center' }}>
          <div>
            <span className="badge" style={{ background: 'var(--pink)' }}>
              Community • Dignity • Care
            </span>
            <h1 className="h1" style={{ marginTop: '0.75rem' }}>
              Holding hearts, lending hands.
            </h1>
            <p style={{ marginTop: '1rem' }}>
              Hearts In Hands supports families, students and newcomers with practical help,
              cultural celebration, and community led events rooted in compassion.
            </p>
            <div style={{ marginTop: '1rem', display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
              <a className="btn btn-olive" href="#involved">See ways to help</a>
              <a className="btn btn-outline" href="#events">Explore events</a>
            </div>
          </div>

          <div style={{ justifySelf: 'center' }}>
            <div className="logo-ring">
              <div className="logo-inner">
                <img
                  src="/hearts in hands.png"
                  alt="Hearts in Hands logo"
                  style={{ width: '220px', height: '230px', objectFit: 'contain' }}
                />
                <div className="logo-chip">HIH</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Mission / About ===== */}
      <section className="section" id="mission">
        <div className="container grid" style={{ gridTemplateColumns: '1.2fr 1fr' }}>
          <div className="card">
            <h2 className="h2">Our Mission</h2>
            <p style={{ marginTop: '.75rem' }}>
              We build welcoming spaces and practical support systems so our neighbours can thrive —
              from food & essentials to student mentorship and cultural programming that honours
              Palestinian heritage and the diversity of our community.
            </p>
            <ul style={{ marginTop: '.75rem', paddingLeft: '1.25rem' }}>
              <li>Student & newcomer support</li>
              <li>Family essentials & dignity kits</li>
              <li>Cultural education & community events</li>
            </ul>
          </div>

          <aside className="card" style={{ background: 'var(--olive)', color: '#fff' }}>
            <p style={{ fontSize: '1.25rem', fontWeight: 700, margin: 0 }}>
              “When hearts hold hands, communities heal.”
            </p>
            <p style={{ opacity: 0.9, marginTop: '.5rem' }}>— Hearts In Hands</p>
          </aside>
        </div>
      </section>

      {/* ===== Events ===== */}
      <section className="section alt" id="events">
        <div className="container">
          <h2 className="h2">Events</h2>
          <div className="grid grid-3" style={{ marginTop: '1rem' }}>
            {[
              {
                title: 'STEM Workshops',
                body: (
                  <>
                    <p style={{ marginTop: '.75rem' }}>
                      We bring science to life for kids through fun, hands-on activities:
                    </p>
                    <ul style={{ marginTop: '.75rem', paddingLeft: '1.25rem' }}>
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
                    <p style={{ marginTop: '.75rem' }}>
                      Our bake sales raise funds to create and distribute care packages. All
                      proceeds go toward materials and gifts for refugee children. We sell:
                    </p>
                    <ul style={{ marginTop: '.75rem', paddingLeft: '1.25rem' }}>
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
                    <p style={{ marginTop: '.75rem' }}>
                      Each package includes fun and useful items for kids aged 5–12. We also
                      include personalized touches, stickers, and hand-packed gift bags with
                      handles. Examples:
                    </p>
                    <ul style={{ marginTop: '.75rem', paddingLeft: '1.25rem' }}>
                      <li>Writing tablets</li>
                      <li>Squishy toys</li>
                      <li>Rubik’s cubes</li>
                      <li>Bracelet bead kits</li>
                    </ul>
                  </>
                ),
              },
            ].map((p) => (
              <div key={p.title} className="card">
                <strong style={{ color: 'var(--burgundy)' }}>{p.title}</strong>
                <p style={{ marginTop: '.5rem' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Team ===== */}
      <section className="section" id="team">
        <div className="container">
          <h2 className="h2" style={{ textAlign: 'center' }}>Meet our co-founders</h2>

          {/* Yasmine (image left, text right) */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: '1fr 1.4fr',
              gap: '1.25rem',
              marginTop: '1.25rem',
              alignItems: 'center',
            }}
          >
            <div className="card" style={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Replace with: <img src="/yasmine.jpg" alt="Yasmine" style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'12px' }} /> */}
              <span style={{ opacity: 0.7 }}>Pic</span>
            </div>

            <div>
              <h3 className="h3" style={{ margin: 0 }}>Yasmine</h3>
              <p style={{ marginTop: '.5rem' }}>
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
          <div
            className="grid"
            style={{
              gridTemplateColumns: '1.4fr 1fr',
              gap: '1.25rem',
              marginTop: '1.5rem',
              alignItems: 'center',
            }}
          >
            <div>
              <h3 className="h3" style={{ margin: 0 }}>Jenna</h3>
              <p style={{ marginTop: '.5rem' }}>
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

            <div className="card" style={{ height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              {/* Replace with: <img src="/jenna.jpg" alt="Jenna" style={{ width:'100%', height:'100%', objectFit:'cover', borderRadius:'12px' }} /> */}
              <span style={{ opacity: 0.7 }}>Pic</span>
            </div>
          </div>

          {/* Divider */}
          <hr style={{ margin: '2rem 0', borderColor: '#e6d3d9' }} />

          <h3 className="h2" style={{ textAlign: 'center' }}>The team</h3>

          {/* Team grid (centered cards) */}
          <div
            className="grid"
            style={{
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: '1rem',
              marginTop: '1rem',
              justifyContent: 'center',
              justifyItems: 'center',
            }}
          >
            {[
              {
                name: 'Arij Karoui',
                role: 'Web Developer',
                desc:
                  'I’m Arij Karoui, a third-year Computer Science student who joined Hearts in Hands to spread good vibes and give back. I love hanging with my family and getting lost in a good book.',
              },
              {
                name: 'Usva',
                role: 'Social media',
                desc:
                  'Hi! I’m Usva & I’m a third year biomedical science student. I joined HIH to give back in a meaningful way and help spread positivity and support for those who need it most! Besides school I enjoy baking, painting & going on long walks.',
              },
              {
                name: 'Salma',
                role: 'Event planner',
                desc:
                  'Hi! I’m a fourth-year Biomedical Science student at the University of Ottawa. When I’m not in lectures or hitting the books, I love exploring cozy cafes with a good read in hand. I’m also a big fan of jasmine milk tea and can never resist a good K-drama binge ;)',
              },
            ].map((m) => (
              <div
                key={m.name}
                className="card"
                style={{
                  display: 'grid',
                  gap: '.5rem',
                  maxWidth: '280px',
                  justifyItems: 'center',
                  textAlign: 'center',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    aspectRatio: '1 / 1',
                    background: 'var(--cream)',
                    border: '1px solid #e6d3d9',
                    borderRadius: '12px',
                    display: 'grid',
                    placeItems: 'center',
                  }}
                >
                  {/* Replace with <img src="/team/arij.jpg" alt="Arij Karoui" .../> etc. */}
                  <span style={{ opacity: 0.6 }}>Pic</span>
                </div>

                <div>
                  <strong style={{ display: 'block' }}>{m.name}</strong>
                  <span style={{ display: 'block', opacity: 0.8 }}>{m.role}</span>
                  <p style={{ marginTop: '.35rem' }}>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Get Involved ===== */}
      <section className="section alt" id="involved">
        <div className="container" style={{ textAlign: 'center' }}>
          <h2 className="h2">Get involved</h2>
          <div
            style={{
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'center',
              gap: '2rem',
              flexWrap: 'wrap',
            }}
          >
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
                className="card"
                style={{
                  display: 'grid',
                  gap: '.5rem',
                  justifyItems: 'center',
                  textAlign: 'center',
                  maxWidth: '280px',
                }}
              >
                <strong style={{ color: 'var(--burgundy)' }}>{x.title}</strong>
                <p>{x.body}</p>
                <a className="btn btn-olive" href={x.href}>
                  {x.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== Contact / Newsletter ===== */}
      <section className="section" id="contact">
        <div className="container grid grid-2">
          <div>
            <h2 className="h2">Stay in the loop</h2>
            <p style={{ marginTop: '.5rem' }}>
              Get monthly updates about drives, cultural events and volunteer shifts.
            </p>
            <form className="card" style={{ marginTop: '1rem' }} onSubmit={(e) => e.preventDefault()}>
              <label>
                Email
                <input
                  type="email"
                  placeholder="you@example.com"
                  required
                  style={{
                    display: 'block',
                    width: '100%',
                    marginTop: '.4rem',
                    padding: '.6rem .8rem',
                    borderRadius: '12px',
                    border: '1px solid #e6d3d9',
                  }}
                />
              </label>
              <button className="btn btn-olive" style={{ marginTop: '0.75rem' }}>
                Subscribe
              </button>
            </form>
          </div>

          <div className="card">
            <h2 className="h2" style={{ marginBottom: '.5rem' }}>Contact</h2>
            <div style={{ display: 'grid', gap: '.5rem' }}>
              <span>📧 hheartsinhands@gmail.com</span>
              <span>📸 @heartsinhands</span>
              <p style={{ marginTop: '.5rem', opacity: 0.9 }}>
                Contact us by email and make sure to check us out on instagram.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div
          className="container"
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <span>© {new Date().getFullYear()} Hearts In Hands</span>
          <div style={{ display: 'flex', gap: '.5rem', alignItems: 'center' }}>
            <span className="badge">H.I.H.</span>
            <a className="btn btn-olive" href="https://www.instagram.com/hheartsinhands/">Instagram</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
