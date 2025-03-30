import './LoadingOverlay.css';

const LoadingOverlay = ({ isLoading = true, size = 'medium', fullScreen = false }) => {
  if (!isLoading) return null;

  return (
    <div className={`loading-overlay ${fullScreen ? 'full-screen' : ''}`}>
      <div className={`modern-loader ${size}`}>
        <div className="loader-circle">
          <div className="inner-circle"></div>
        </div>
        <div className="pulse-dots">
          <div className="pulse-dot dot-1"></div>
          <div className="pulse-dot dot-2"></div>
          <div className="pulse-dot dot-3"></div>
        </div>
      </div>
    </div>
  );
};

export default LoadingOverlay;