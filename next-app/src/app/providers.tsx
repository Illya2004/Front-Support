'use client'
import { persistor, store } from '@/store/store'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren, useState } from 'react'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'

export function Providers({ children }: PropsWithChildren) {
	const [client] = useState(
		new QueryClient({
			defaultOptions: {
				queries: {
					refetchOnWindowFocus: false,
				},
			},
		})
	)
	return (
		<Provider store={store}>
			<PersistGate persistor={persistor} loading={null}>
				<QueryClientProvider client={client}>{children}</QueryClientProvider>
			</PersistGate>
		</Provider>
	)
}
