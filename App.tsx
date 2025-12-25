
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, useParams } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Detail from './pages/Detail';
import Player from './pages/Player';
import Search from './pages/Search';

// Helper component to pass params to pages
const DetailPageWrapper = () => {
  const { id } = useParams<{ id: string }>();
  return id ? <Detail bookId={id} /> : null;
};

const PlayerPageWrapper = () => {
  const { bookId, episodeId } = useParams<{ bookId: string, episodeId: string }>();
  return bookId && episodeId ? <Player bookId={bookId} episodeId={episodeId} /> : null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<DetailPageWrapper />} />
          <Route path="/player/:bookId/:episodeId" element={<PlayerPageWrapper />} />
          <Route path="/search" element={<Search />} />
          <Route path="/trending" element={<Home />} /> {/* Temporary redirect */}
          <Route path="/dub" element={<Home />} /> {/* Temporary redirect */}
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;
