import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-ks-beige py-6 mt-16">
      <div className="container-page flex items-center justify-center gap-8">
        <Link href="https://www.instagram.com/kankutashaski_ceramica/" target="_blank" aria-label="Instagram">
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
            <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
          </svg>
        </Link>
        <span className="opacity-60" title="Pronto">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 8a5 5 0 0 1-5-5v14a4 4 0 1 1-4-4" />
          </svg>
        </span>
      </div>
    </footer>
  )
}
