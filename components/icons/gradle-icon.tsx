import * as React from 'react'
import { SVGProps } from 'react'
const SvgComponent = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fillRule="nonzero"
    aria-label="Gradle"
    viewBox="0 100 512 412"
    {...props}
  >
    <path
      fill="currentColor"
      d="M427 132.7a61 61 0 0 0-85-1 6 6 0 0 0 0 9l7 8a6 6 0 0 0 8 1 35 35 0 0 1 46 53c-48 48-113-87-259-17a20 20 0 0 0-9 28l25 43a20 20 0 0 0 27 7h1l11-6a257 257 0 0 0 35-26 6 6 0 0 1 8 0 6 6 0 0 1 0 9 263 263 0 0 1-37 28l-11 6a31 31 0 0 1-15 4 32 32 0 0 1-28-16L126 219c-45 40-73 95-57.87 173.26a6 6 0 0 0 6 4.74h26.47a6 6 0 0 0 5.93-5.3 40 40 0 0 1 78.62 0 6 6 0 0 0 5.72 5.08h26.2a6 6 0 0 0 5.7-5.1 40 40 0 0 1 78.6 0 6 6 0 0 0 5.7 5h26a6 6 0 0 0 5.8-5.72c1-37 10-79 38.7-100 98-73 72-136 49.4-158.3zm-100 110-19-9a12 12 0 1 1 19 9z"
    />
  </svg>
)
export default SvgComponent
