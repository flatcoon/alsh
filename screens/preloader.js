(window.SCREENS = window.SCREENS || {})['screens/preloader.html'] = `
<div class="screen preloader-screen" style="background:var(--bg-primary)">

  <div style="
    position:absolute;
    left:50%;
    top:calc(50% - 28.5px);
    transform:translate(-50%, -50%);
    width:290px;
    height:327px;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    padding:29.727px 28.703px;
    box-sizing:border-box;
  ">
    <img
      src="images/mascot/preloader.svg"
      alt="Моти"
      style="width:100%;height:100%;object-fit:contain;transform:scaleY(-1);display:block"
    >
  </div>

  <div style="
    position:absolute;
    left:50%;
    top:71.4%;
    transform:translateX(-50%);
    width:180px;
  ">
    <div style="background:var(--bg-secondary);border-radius:var(--radius-full);height:4px;overflow:hidden">
      <div class="preloader-bar-fill" style="background:var(--icon-accent);height:4px;border-radius:var(--radius-full);width:0%"></div>
    </div>
  </div>

  <div style="position:absolute;bottom:0;left:0;right:0;height:env(safe-area-inset-bottom)"></div>

</div>
`;
