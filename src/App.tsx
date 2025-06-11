import { useEffect } from 'react'
import HomeView from './components/HomeView.tsx'
import useAccountData from './hooks/useAccountData.ts'
import useAccountSaver from './hooks/useAccountSaver.ts'
import type { AccountData } from './types/account.ts'

const defaultProfile: AccountData = { name: '' }

export default function App() {
  const { data, loading, error } = useAccountData()
  const save = useAccountSaver()

  useEffect(() => {
    if (error === 'profile.json not found') {
      save(defaultProfile)
    }
  }, [error, save])

  if (loading) return <p>Loading...</p>

  return <HomeView name={data?.name} />
}
