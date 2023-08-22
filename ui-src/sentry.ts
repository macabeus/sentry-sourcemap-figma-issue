import * as Sentry from '@sentry/browser';
import { ExtraErrorData as ExtraErrorDataIntegration } from '@sentry/integrations';
import { BrowserTracing } from '@sentry/browser';

const sentryDSN = '';

if (!sentryDSN) {
  console.log('Missing to set Sentry DSN')
  debugger
}

Sentry.init({
  dsn: sentryDSN,
  environment: 'development',
  release: '0.0.1-development-test-sourcemap',
  tracesSampleRate: 1,
  integrations: [
    new ExtraErrorDataIntegration({
      depth: 5,
    }),
    new BrowserTracing({
      startTransactionOnPageLoad: false,
      startTransactionOnLocationChange: false,
      beforeNavigate: () => undefined,
    }),
  ],
});
