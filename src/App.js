import React, { Suspense } from 'react';
import { BrowserRouter as Router, } from 'react-router-dom'
import { Spin, Layout } from 'antd';
import Header from './navigation/header/header';

import Map from './components/map/mapComponent';
import ResultsTable from './components/results/resultsTable';


function App() {
  return (
    <Suspense fallback={
      <header className="App-header">
        Loading <Spin/>
      </header>}
      >
      <Router>
        <Layout className="layout">
          <Header/>
          <Layout.Content>
            <div className="layout-content" id="content">
       <Map/>
       <ResultsTable/>
            </div>
          </Layout.Content>
          <Layout.Footer className="layout-footer">
          
          </Layout.Footer>
        </Layout>
      </Router>
    </Suspense>
  );
}

export default App;
