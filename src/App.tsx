import React from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import LegacySeriesSection from './components/LegacySeriesSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error: Error | null }> {
  constructor(props: any) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', background: '#fee2e2', color: '#991b1b', fontFamily: 'monospace', whiteSpace: 'pre-wrap', zIndex: 9999, position: 'relative' }}>
          <h2>Runtime Error Captured:</h2>
          <p>{this.state.error?.toString()}</p>
          <pre>{this.state.error?.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

function App() {
  return (
    <ErrorBoundary>
      <LoadingScreen />
      <Navbar />
      <HeroSection />
      <LegacySeriesSection />
      <ContactSection />
      <Footer />
    </ErrorBoundary>
  );
}

export default App;

