import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import RouterStateManager from './app/RouterStateManager';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <div className="artboard artboard-demo">
      <RouterStateManager />
    </div>
  </StrictMode>
);
