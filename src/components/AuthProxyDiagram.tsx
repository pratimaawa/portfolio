// Request flow through the Next.js proxy. Uses currentColor / CSS vars so it follows the theme.
const boxes = [
  { x: 0, label: 'Browser', sub: 'no token in JS' },
  { x: 230, label: '/api/proxy/[...path]', sub: 'Next.js route handler' },
  { x: 460, label: 'Backend API', sub: 'expects Bearer token' },
];

export function AuthProxyDiagram() {
  return (
    <figure className="my-10">
      <div className="overflow-x-auto rounded-md border border-rule bg-surface p-4 sm:p-6">
        <svg
          viewBox="0 0 640 170"
          role="img"
          aria-labelledby="auth-diagram-title"
          className="h-auto w-full min-w-[520px] text-fg"
        >
          <title id="auth-diagram-title">
            The browser sends requests with an HttpOnly cookie to a Next.js
            proxy route, which reads the cookie and forwards the request to the
            backend with a Bearer token.
          </title>
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="9"
              refY="5"
              markerWidth="7"
              markerHeight="7"
              orient="auto-start-reverse"
            >
              <path d="M0 0 10 5 0 10z" fill="var(--accent)" />
            </marker>
          </defs>

          {boxes.map((b) => (
            <g key={b.label} transform={`translate(${b.x} 40)`}>
              <rect
                width="180"
                height="70"
                rx="6"
                fill="var(--bg)"
                stroke="var(--rule)"
              />
              <text
                x="90"
                y="32"
                textAnchor="middle"
                fontSize="14"
                fontWeight="500"
                fill="currentColor"
              >
                {b.label}
              </text>
              <text
                x="90"
                y="52"
                textAnchor="middle"
                fontSize="11"
                fill="var(--muted)"
                fontFamily="var(--font-geist-mono)"
              >
                {b.sub}
              </text>
            </g>
          ))}

          <g stroke="var(--accent)" strokeWidth="1.5" markerEnd="url(#arrow)">
            <line x1="182" y1="75" x2="226" y2="75" />
            <line x1="412" y1="75" x2="456" y2="75" />
          </g>
          <g
            fontSize="11"
            fill="var(--muted)"
            fontFamily="var(--font-geist-mono)"
            textAnchor="middle"
          >
            <text x="205" y="22">
              Cookie: auth_token
            </text>
            <line
              x1="205"
              y1="28"
              x2="205"
              y2="66"
              stroke="var(--rule)"
              strokeDasharray="3 3"
            />
            <text x="435" y="148">
              Authorization: Bearer …
            </text>
            <line
              x1="435"
              y1="84"
              x2="435"
              y2="136"
              stroke="var(--rule)"
              strokeDasharray="3 3"
            />
          </g>
        </svg>
      </div>
      <figcaption className="mt-3 text-sm text-muted">
        The proxy is the only path to the backend. The token lives in an
        HttpOnly cookie, so client-side JavaScript can never read it.
      </figcaption>
    </figure>
  );
}
