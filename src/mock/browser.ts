import { setupWorker } from 'msw/browser'
import { handlers } from './handlers'

export function setupMsw() {
  if (
    import.meta.env.VITE_NODE_ENV === 'development' &&
    import.meta.env.VITE_USE_MSW === 'true'
  ) {
    const worker = setupWorker(...handlers)
    worker.start()
  }
}
