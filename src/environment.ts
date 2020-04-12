require('dotenv').config({
  path: './web-app/.env',
})

import { getWorkspaceRoot } from './services/workspace'

interface Environment {
  VERSION: string
  NODE_ENV: string
  LOG: boolean
  API_URL: string
  SENTRY_DSN: string | null
  WORKSPACE_ROOT: string
}

const environment: Environment = {
  VERSION: process.env.VERSION || 'unknown',
  NODE_ENV: process.env.NODE_ENV || 'production',
  LOG: (process.env.REACT_APP_LOG || '').toLowerCase() === 'true' && process.env.NODE_ENV !== 'production',
  API_URL: process.env.REACT_APP_GQL_URI || '',
  SENTRY_DSN: process.env.SENTRY_DSN || null,
  WORKSPACE_ROOT: getWorkspaceRoot(),
}

export default environment
