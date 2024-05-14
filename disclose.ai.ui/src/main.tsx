import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import RouterManager from './app/RouterManager';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <div className="artboard artboard-demo">
      <RouterManager />
    </div>
  </StrictMode>
);
