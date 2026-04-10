import { useState } from 'react'

function App() {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <>
      <header className="site-nav">
        <div className="site-nav-inner">
          <a className="nav-brand tap-target" href="#home">
            GenYXZ
          </a>
          <button
            aria-controls="nav-menu"
            aria-expanded={navOpen}
            className="nav-toggle tap-target"
            onClick={() => setNavOpen((value) => !value)}
            type="button"
          >
            ☰
          </button>
          <nav
            className={`nav-menu ${navOpen ? 'nav-menu-open' : ''}`}
            id="nav-menu"
          >
            <a href="#theme">Theme</a>
            <a href="#buttons">Buttons</a>
            <a href="#forms">Forms</a>
          </nav>
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl overflow-x-clip px-4 pt-28 pb-10 text-text-primary md:px-8">
        <section id="home" className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-wide text-secondary">
            Foundation Preview
          </p>
          <h1>Tailwind v4 global theme and components</h1>
          <p className="max-w-2xl text-text-secondary">
            This temporary preview validates theme tokens, global component
            styles, and mobile behavior before page content is added.
          </p>
          <div className="rounded-xl border border-border bg-surface p-4 md:p-6">
            <p className="mb-3 text-sm text-text-secondary">
              Utility token check
            </p>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-5">
              <div className="rounded-lg bg-primary p-4 text-center text-white">
                primary
              </div>
              <div className="rounded-lg bg-secondary p-4 text-center text-primary">
                secondary
              </div>
              <div className="rounded-lg bg-accent p-4 text-center text-primary">
                accent
              </div>
              <div className="rounded-lg border border-border bg-background p-4 text-center">
                background
              </div>
              <div className="rounded-lg bg-surface p-4 text-center text-text-secondary">
                surface
              </div>
            </div>
          </div>
        </section>

        <section id="theme" className="mt-10 space-y-3">
          <h2>Heading scale</h2>
          <h3>H3 Sample</h3>
          <h4>H4 Sample</h4>
          <h5>H5 Sample</h5>
          <h6>H6 Sample</h6>
          <p className="text-text-secondary">
            Link style check:{' '}
            <a href="#buttons" onClick={() => setNavOpen(false)}>
              jump to buttons
            </a>
          </p>
        </section>

        <section id="buttons" className="mt-10 space-y-3">
          <h2>Button variants</h2>
          <div className="flex flex-wrap gap-3">
            <button className="btn btn-primary" type="button">
              Primary
            </button>
            <button className="btn btn-secondary" type="button">
              Secondary
            </button>
            <button className="btn btn-outline" type="button">
              Outline
            </button>
            <button className="btn btn-ghost" type="button">
              Ghost
            </button>
          </div>
        </section>

        <section id="forms" className="mt-10 space-y-4">
          <h2>Form controls</h2>
          <div className="grid gap-4 md:grid-cols-2">
            <label className="form-field">
              <span className="field-label">Text input</span>
              <input className="tap-target" placeholder="Enter value" type="text" />
            </label>

            <label className="form-field">
              <span className="field-label">Select</span>
              <select className="tap-target" defaultValue="">
                <option value="" disabled>
                  Choose one
                </option>
                <option value="a">Option A</option>
                <option value="b">Option B</option>
              </select>
            </label>

            <label className="form-field md:col-span-2">
              <span className="field-label">Textarea</span>
              <textarea className="tap-target" placeholder="Message" rows={4} />
            </label>

            <label className="form-field md:col-span-2">
              <span className="field-label">Error state</span>
              <input
                className="is-error tap-target"
                defaultValue="Invalid value sample"
                type="text"
              />
            </label>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
