import './globals.css'

export const metadata = {
  title: 'MCA SCADA Dashboard',
  description: 'SCADA progress and status dashboard',
}

export default function RootLayout({ children }) {
  return (
    <html lang="mn">
      <body>
        {children}
      </body>
    </html>
  )
}
