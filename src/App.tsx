import HomeView from './components/HomeView.tsx'
import useAccountData from './hooks/useAccountData.ts'

export default function App() {
  const { data, loading } = useAccountData()

  if (loading) return <p>Loading...</p>

  return <HomeView name={data?.user.name} />
}
