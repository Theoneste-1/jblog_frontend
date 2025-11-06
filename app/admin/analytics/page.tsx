"use client"

import { Card } from "@/components/ui/card"
import {
  LineChart,
  Line,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts"

const ANALYTICS_DATA = [
  { date: "Jan 1", visitors: 400, pageviews: 2400 },
  { date: "Jan 2", visitors: 300, pageviews: 1398 },
  { date: "Jan 3", visitors: 200, pageviews: 9800 },
  { date: "Jan 4", visitors: 278, pageviews: 3908 },
  { date: "Jan 5", visitors: 189, pageviews: 4800 },
]

export default function AdminAnalyticsPage() {
  return (
    <div className="container px-4 space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Analytics</h1>
        <p className="text-muted mt-1">Site traffic and engagement metrics</p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6">
          <h3 className="font-bold mb-4">Visitors & Page Views</h3>
          <ResponsiveContainer width="100%" height={300}>
            <AreaChart data={ANALYTICS_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="date" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip />
              <Legend />
              <Area type="monotone" dataKey="visitors" stackId="1" stroke="var(--primary)" fill="var(--primary)" />
              <Area type="monotone" dataKey="pageviews" stackId="1" stroke="var(--accent)" fill="var(--accent)" />
            </AreaChart>
          </ResponsiveContainer>
        </Card>

        <Card className="p-6">
          <h3 className="font-bold mb-4">Engagement Trend</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={ANALYTICS_DATA}>
              <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
              <XAxis dataKey="date" stroke="var(--muted-foreground)" />
              <YAxis stroke="var(--muted-foreground)" />
              <Tooltip />
              <Line type="monotone" dataKey="visitors" stroke="var(--primary)" dot={{ fill: "var(--primary)" }} />
            </LineChart>
          </ResponsiveContainer>
        </Card>
      </div>
    </div>
  )
}
