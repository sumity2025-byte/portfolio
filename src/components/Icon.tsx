const P = {
  compass: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm4-14-2.5 5.5L8 16l2.5-5.5L16 8Z',
  chart: 'M3 20h18M7 20v-6M12 20V8M17 20v-9',
  gear: 'M12 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Zm8-3.5a8 8 0 0 0-.1-1.3l2-1.5-2-3.4-2.4 1a8 8 0 0 0-2.2-1.3L14.9 3h-4l-.4 2.5a8 8 0 0 0-2.2 1.3l-2.4-1-2 3.4 2 1.5a8 8 0 0 0 0 2.6l-2 1.5 2 3.4 2.4-1a8 8 0 0 0 2.2 1.3l.4 2.5h4l.4-2.5a8 8 0 0 0 2.2-1.3l2.4 1 2-3.4-2-1.5c.06-.43.1-.86.1-1.3Z',
  hammer: 'M15 4 4 15l3 3L18 7l-3-3Zm-1 5 4 4M3 21l3-3',
  store: 'M3 9.5 5 4h14l2 5.5M3 9.5h18M4 9.5V20h16V9.5M9 20v-6h6v6',
  factory: 'M3 21V10l5 3V10l5 3V9l5 3v9H3Zm4-4h2m3 0h2m3 0h1',
  globe: 'M12 22a10 10 0 1 0 0-20 10 10 0 0 0 0 20Zm0 0c3 0 5-4.5 5-10S15 2 12 2 7 6.5 7 12s2 10 5 10ZM2.5 9h19M2.5 15h19',
  plane: 'M10.5 13.5 3 11l18-7-7 18-2.5-7.5Zm0 0L21 4',
  layers: 'm12 3 9 5-9 5-9-5 9-5Zm9 9-9 5-9-5m18 4-9 5-9-5',
  cap: 'M2 8.5 12 4l10 4.5-10 4.5L2 8.5Zm0 0v5m5 2.6V12l5 2.2 5-2.2v4.1c0 1.3-2.2 2.4-5 2.4s-5-1.1-5-2.4Z',
  search: 'M11 18a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm5-2 5 5',
  clipboard: 'M9 4h6v3H9V4Zm-3 2h3m6 0h3v15H6V6m3 6h6m-6 4h4',
  rocket: 'M12 15c-2 0-3-1-3-3 0-2 1.5-5 3-7 1.5 2 3 5 3 7 0 2-1 3-3 3Zm0 0v6m-3-3 3-3 3 3',
  target: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-4.5a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM12 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z',
  ruler: 'm3 15 6-6 3 3 3-3 3 3-6 6-3-3-3 3-3-3Zm12-9 3-3 3 3-3 3',
  anchor: 'M12 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm0 0v13m-7-6c0 3.5 3 6 7 6s7-2.5 7-6M3 15h3m12 0h3',
  medal: 'M8 3h8l-2 6H10L8 3Zm4 6a5.5 5.5 0 1 0 0 11 5.5 5.5 0 0 0 0-11Zm0 3.5L12.7 14l1.6.1-1.2 1.2.3 1.6-1.4-.8-1.4.8.3-1.6L9.7 14.1l1.6-.1L12 12.5Z',
  users: 'M16 20v-1.5a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4V20M9.5 10.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM17 4.2a3.5 3.5 0 0 1 0 6.6M21 20v-1.4a4 4 0 0 0-3-3.9',
  'arrow-down': 'M12 4v16m0 0-6-6m6 6 6-6',
  'arrow-up': 'M12 20V4m0 0-6 6m6-6 6 6',
  'arrow-right': 'M4 12h16m0 0-6-6m6 6-6 6',
  'arrow-left': 'M20 12H4m0 0 6-6m-6 6 6 6',
  'arrow-up-right': 'M7 17 17 7M9 7h8v8',
  box: 'm12 3 8 4.5v9L12 21l-8-4.5v-9L12 3Zm0 0v18m8-13.5-8 4.5-8-4.5',
  mail: 'M3 6h18v12H3V6Zm0 0 9 7 9-7',
  phone: 'M6 3h3l2 5-2.5 1.5a12 12 0 0 0 6 6L16 13l5 2v3a2 2 0 0 1-2.2 2A17 17 0 0 1 4 5.2 2 2 0 0 1 6 3Z',
  linkedin: 'M4 9h3v11H4V9Zm1.5-6a1.8 1.8 0 1 0 0 3.6 1.8 1.8 0 0 0 0-3.6ZM10 9h3v1.6a3.5 3.5 0 0 1 3-1.7c2.5 0 4 1.6 4 4.6V20h-3v-5.6c0-1.5-.6-2.3-1.9-2.3-1.3 0-2.1.9-2.1 2.3V20h-3V9Z',
  github: 'M9 19c-4 1.2-4-2.2-6-2.7m12 5v-3.6a3 3 0 0 0-.9-2.4c3-.4 5-1.9 5-5.7a4.6 4.6 0 0 0-1.3-3.2 3.4 3.4 0 0 0-.1-3.2s-1.6-.4-3.7 1.4a11 11 0 0 0-6 0C6.9 2.4 5.3 2.8 5.3 2.8a3.4 3.4 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.2c0 3.8 2 5.3 5 5.7a3 3 0 0 0-.9 2.3V21',
  external: 'M14 4h6v6M20 4 11 13M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5',
  close: 'M5 5l14 14M19 5 5 19',
  plus: 'M12 5v14M5 12h14',
  download: 'M12 4v11m0 0 4.5-4.5M12 15l-4.5-4.5M4 19h16',
  copy: 'M9 9h10v11H9V9Zm-4 6H4V4h11v1',
  check: 'M4 12.5 9 18 20 6',
  clock: 'M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Zm0-13v5l3.5 2',
  spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6.3 6.3l2.8 2.8M14.9 14.9l2.8 2.8M17.7 6.3l-2.8 2.8M9.1 14.9l-2.8 2.8',
}

export type IconName = keyof typeof P

export default function Icon({
  name,
  size = 20,
  className = '',
  strokeWidth = 1.5,
  ...rest
}: {
  name: IconName
  size?: number
  className?: string
  strokeWidth?: number
} & Omit<React.SVGProps<SVGSVGElement>, 'name' | 'width' | 'height' | 'viewBox'>) {
  const d: string = P[name] ?? P.spark
  return (
    <svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <path d={d} />
    </svg>
  )
}
