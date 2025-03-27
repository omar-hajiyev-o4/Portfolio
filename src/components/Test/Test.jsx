function AnimationTest() {
    return (
      <div style={{ height: '200vh' }}>
        <div className="test-animation" 
          style={{ 
            opacity: 0, 
            transform: 'translateY(50px)',
            width: '100px', 
            height: '100px', 
            background: 'red' 
          }}
        >
          Test
        </div>
      </div>
    );
  }