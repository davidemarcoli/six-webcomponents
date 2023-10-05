import React, { Suspense, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { SixRoot, SixRootCollapsedPayload } from '@six-group/ui-library-react';
import React from 'react';

// components
import Home from './components/Home';

defineCustomElements();


function App() {
  const leftSidebar = useModalState(true);
  const rightSidebar = useModalState(false);
  const [, setSearch] = useState('');

  const handleCollapsed = ({ detail }: CustomEvent<SixRootCollapsedPayload>) => {
    if (detail.collapsed === leftSidebar.isOpen) {
      leftSidebar.setIsOpen(!detail.collapsed);
    }
  };

  return (
    <six-root onSix-root-collapsed={handleCollapsed}>
      <Header toggleMenu={leftSidebar.toggle} toggleSearch={setSearch} toggleNotifications={rightSidebar.toggle} />
      <LeftSidebar visible={leftSidebar.isOpen} />
      <RightSidebar visible={rightSidebar.isOpen} />
      <section slot="main">
        <Suspense fallback={<six-spinner />}>
          <Routes>
            <Route
              path="/"
              element={<Home toggleLeftSidebar={leftSidebar.toggle} toggleRightSidebar={rightSidebar.toggle} />}
            />
            <Route path="/users" element={<Users />} />
          </Routes>
        </Suspense>
      </section>
    </six-root>
  );
}

export default App
