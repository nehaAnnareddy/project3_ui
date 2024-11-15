<script>
    // Array of icon paths and labels
    const links = [
      { icon: 'src/assets/Envelope.png', text: 'Mail' },
      { icon: 'src/assets/News.png', text: 'For You' },
      { icon: 'src/assets/Bribery.png', text: 'Finance' },
      { icon: 'src/assets/Controller.png', text: 'Games' },
      { icon: 'src/assets/Ball.png', text: 'Sports' },
      { icon: 'src/assets/Film Slate.png', text: 'Entertainment' },
    ];
  </script>
  
  <div class="sidebar">
    <div class="menu-icon">
      <!-- Hamburger icon for expanding/collapsing the sidebar -->
      <svg width="800px" height="800px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="#4f17aa">
        <g id="SVGRepo_bgCarrier" stroke-width="0"/>
        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>
        <g id="SVGRepo_iconCarrier"> 
          <path fill="#4f17aa" fill-rule="evenodd" d="M19 4a1 1 0 01-1 1H2a1 1 0 010-2h16a1 1 0 011 1zm0 6a1 1 0 01-1 1H2a1 1 0 110-2h16a1 1 0 011 1zm-1 7a1 1 0 100-2H2a1 1 0 100 2h16z"/>
        </g>
      </svg>
    </div>
    {#each links as link}
      <div class="sidebar-item">
        <img src={link.icon} alt={link.text} class="icon" />
        <span class="text">{link.text}</span>
      </div>
    {/each}
  </div>
  
  <style>
    .sidebar {
      position: fixed; /* Keep sidebar fixed on scroll */
      top: 0;
      left: 0;
      background-color: #d9d9d9;
      color: white;
      width: 90px;
      height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding-top: 20px;
      box-sizing: border-box;
      z-index: 100; /* Ensure it stays above other content */
    }
  
    .menu-icon {
      margin-bottom: 20px;
      cursor: pointer;
    }
  
    svg {
      padding-top: 15px;
      width: 24px;
      height: 24px;
      color: #7c59a8;
    }
  
    .sidebar-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: 20px 0;
      cursor: pointer;
      text-align: center;
      width: 100%;
    }
  
    .icon {
      width: 24px; /* Adjust size to match your design */
      height: 24px;
      margin-bottom: 8px;
    }
  
    .text {
      font-size: 12px;
      color: #7c59a8;
    }
  </style>
  