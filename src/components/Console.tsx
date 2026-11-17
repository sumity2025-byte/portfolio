import type { CSSProperties } from 'react'
import SectionHead from './ui/SectionHead'
import { Reveal } from './ui/Reveal'
import GlassWorkspace, {
  type WorkspaceCashFlowPeriod,
  type WorkspaceGoal,
  type WorkspaceTransaction,
} from './ui/adjustable-glass-dashboard'

/**
 * Maps the portfolio's ember/bone palette onto the glass workspace's
 * Tailwind `--color-*` contract, so the embed inherits the host theme
 * instead of falling back to the browser's Canvas/CanvasText defaults.
 */
const PALETTE = {
  '--color-background': '#07080a',
  '--color-foreground': '#edeae4',
  '--color-card': '#0f1218',
  '--color-card-foreground': '#edeae4',
  '--color-popover': '#0a0c10',
  '--color-popover-foreground': '#edeae4',
  '--color-primary': '#ff6b3d',
  '--color-primary-foreground': '#07080a',
  '--color-secondary': '#161a22',
  '--color-secondary-foreground': '#edeae4',
  '--color-muted': '#161a22',
  '--color-muted-foreground': '#8a8f99',
  '--color-accent': '#ffa07a',
  '--color-accent-foreground': '#07080a',
  '--color-border': '#edeae4',
  '--color-input': '#0f1218',
  '--color-ring': '#ff6b3d',
} as CSSProperties

const GLASS = {
  blur: 26,
  opacity: 0.3,
  saturation: 1.25,
  tint: '#ff6b3d',
  edge: 0.6,
}

/**
 * ILLUSTRATIVE SAMPLE DATA ONLY.
 * Every figure below is invented for layout purposes so the component can be
 * seen working. None of it describes Sumit's finances, pay or outcomes.
 */
const TRANSACTIONS: WorkspaceTransaction[] = [
  { id: 't1', name: 'Vendor payout', category: 'Income', date: 'Today', amount: 4800, status: 'Completed' },
  { id: 't2', name: 'Dark-store ride audit', category: 'Travel', date: 'Today', amount: -18.5, status: 'Completed' },
  { id: 't3', name: 'Sample supplies', category: 'Shopping', date: 'Yesterday', amount: -86, status: 'Completed' },
  { id: 't4', name: 'Regional site visit', category: 'Travel', date: 'Nov 03', amount: -320, status: 'Pending' },
  { id: 't5', name: 'Warehouse rent', category: 'Home', date: 'Nov 01', amount: -1850, status: 'Completed' },
  { id: 't6', name: 'Pilot milestone', category: 'Income', date: 'Nov 01', amount: 6250, status: 'Completed' },
  { id: 't7', name: 'Sample groceries', category: 'Shopping', date: 'Oct 31', amount: -124.8, status: 'Completed' },
]

const GOALS: WorkspaceGoal[] = [
  { id: 'runway', name: 'Runway buffer', saved: 8400, target: 12000, color: '#ff6b3d' },
  { id: 'study', name: 'Study fund', saved: 2350, target: 5000, color: '#7da2ff' },
]

const CASH_FLOW: WorkspaceCashFlowPeriod[] = [
  {
    id: 'week',
    label: 'Week',
    description: 'Sample daily totals for the selected week.',
    points: [
      { label: 'Mon', income: 680, expenses: 112 },
      { label: 'Tue', income: 940, expenses: 188 },
      { label: 'Wed', income: 720, expenses: 84 },
      { label: 'Thu', income: 1120, expenses: 245 },
      { label: 'Fri', income: 760, expenses: 98 },
      { label: 'Sat', income: 340, expenses: 174 },
      { label: 'Sun', income: 240, expenses: 65 },
    ],
  },
  {
    id: 'month',
    label: 'Month',
    description: 'Sample totals across November. Each point is its labelled interval.',
    points: [
      { label: 'Nov 01', income: 560, expenses: 124 },
      { label: 'Nov 03', income: 660, expenses: 168 },
      { label: 'Nov 06', income: 575, expenses: 149 },
      { label: 'Nov 08', income: 840, expenses: 174 },
      { label: 'Nov 11', income: 785, expenses: 144 },
      { label: 'Nov 13', income: 995, expenses: 223 },
      { label: 'Nov 16', income: 940, expenses: 193 },
      { label: 'Nov 18', income: 1120, expenses: 238 },
      { label: 'Nov 21', income: 1010, expenses: 213 },
      { label: 'Nov 23', income: 1205, expenses: 258 },
      { label: 'Nov 26', income: 1135, expenses: 223 },
      { label: 'Nov 30', income: 1225, expenses: 292.3 },
    ],
  },
  {
    id: 'year',
    label: 'Year',
    description: 'Sample monthly totals for the year.',
    points: [
      { label: 'Jan', income: 7300, expenses: 4200 },
      { label: 'Feb', income: 8100, expenses: 3850 },
      { label: 'Mar', income: 7600, expenses: 4540 },
      { label: 'Apr', income: 9200, expenses: 3900 },
      { label: 'May', income: 8500, expenses: 4720 },
      { label: 'Jun', income: 10200, expenses: 4350 },
      { label: 'Jul', income: 9800, expenses: 5600 },
      { label: 'Aug', income: 11700, expenses: 4800 },
      { label: 'Sep', income: 10800, expenses: 6200 },
      { label: 'Oct', income: 12300, expenses: 5400 },
      { label: 'Nov', income: 11050, expenses: 2399.3 },
      { label: 'Dec', income: 13900, expenses: 6100 },
    ],
  },
]

export default function Console() {
  return (
    <section className="relative border-t border-white/[0.06] py-24 md:py-32">
      <div className="mx-auto max-w-[1240px] px-5 md:px-8">
        <SectionHead
          index="LAB"
          label="Interface study"
          title={
            <>
              A console built to be <span className="italic ember-text">felt.</span>
            </>
          }
          lede="A working glass dashboard I built to test material, motion and state under real interaction. Adjust the glass, switch views, export the ledger — all of it runs live."
          right={
            <span className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1.5 font-mono text-[9px] uppercase tracking-[0.14em] text-faint">
              <span className="h-1.5 w-1.5 rounded-full bg-ember" />
              Sample data
            </span>
          }
        />

        <Reveal>
          <div
            className="overflow-hidden rounded-[22px] border border-white/[0.08] bg-void/60"
            style={PALETTE}
          >
            <GlassWorkspace
              className="gw-embed"
              brand="Sumit Yadav"
              userName="Sumit"
              currency="INR"
              balance={28430.6}
              balanceChange={{ percent: 8.2, label: 'vs. last period' }}
              account={{ name: 'Operating account', lastFour: '4829' }}
              periodLabel="November 2026"
              cashFlowPeriods={CASH_FLOW}
              initialPeriodId="month"
              footerNote="Illustrative sample data — not financial records"
              savingsNote="Progress is calculated from the sample goals supplied to this demo."
              transactions={TRANSACTIONS}
              goals={GOALS}
              glass={GLASS}
              backgroundImage="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1600&q=80"
            />
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-5 font-mono text-[9.5px] uppercase leading-relaxed tracking-[0.13em] text-faint">
            Every number above is invented for layout. Nothing here is a real balance, payout or saving.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
