(window.SCREENS = window.SCREENS || {})['screens/onboarding.html'] = `
<div class="screen" style="background:var(--bg-primary)">

  <!-- Изображение: top 60px (высота хедера), высота 478px -->
  <div style="position:absolute;top:60px;left:0;width:100%;height:478px;overflow:hidden;pointer-events:none;transform:translateZ(0)">
    <img class="onboarding-slide-img" src="" alt=""
      style="position:absolute;width:100%;height:182.85%;top:-25.52%;left:0;display:block">
  </div>

  <!-- Хедер: белый, поверх изображения, z-index 2 -->
  <div style="position:absolute;top:0;left:0;right:0;z-index:2;background:var(--bg-primary)">
    <div style="display:flex;align-items:center;justify-content:space-between;padding:8px 4px;height:60px">
      <button class="onboarding-back-btn"
        style="display:none;width:44px;height:44px;border:none;background:transparent;cursor:pointer;border-radius:var(--radius-s);align-items:center;justify-content:center;padding:0;flex-shrink:0">
        <img src="icons/arrow-left.svg" width="24" height="24" alt="Назад">
      </button>
      <div style="flex:1"></div>
      <button class="onboarding-skip-btn"
        style="border:none;background:transparent;cursor:pointer;font-family:var(--font-family);font-size:var(--font-btn-size);font-weight:var(--font-btn-weight);color:var(--text-accent);padding:8px 12px;border-radius:var(--radius-s);height:44px;touch-action:manipulation;flex-shrink:0">
        Пропустить
      </button>
    </div>
  </div>

  <!-- Нижний блок: белый, прибит к низу экрана -->
  <div style="position:absolute;bottom:0;left:0;right:0;background:var(--bg-primary)">
    <div style="height:240px;display:flex;flex-direction:column;justify-content:space-between;padding:16px 16px 4px">

      <!-- Текст + точки -->
      <div style="display:flex;flex-direction:column;gap:16px;align-items:center">
        <div style="display:flex;flex-direction:column;gap:12px;width:100%">
          <div class="onboarding-title"
            style="font-size:var(--font-h1-size);font-weight:var(--font-h1-weight);line-height:var(--font-h1-lh);color:var(--text-primary);text-align:center">
          </div>
          <div class="onboarding-subtitle"
            style="font-size:var(--font-bodys-size);font-weight:var(--font-bodys-weight);line-height:var(--font-bodys-lh);color:var(--text-primary);text-align:center">
          </div>
        </div>
        <div class="onboarding-dots" style="display:flex;align-items:center;justify-content:center"></div>
      </div>

      <!-- Кнопка Дальше / Начать -->
      <button class="onboarding-next-btn"
        style="width:100%;height:56px;background:#333333;color:#ffffff;border:none;border-radius:var(--radius-m);font-family:var(--font-family);font-size:var(--font-btn-size);font-weight:var(--font-btn-weight);line-height:var(--font-btn-lh);cursor:pointer;touch-action:manipulation">
        Дальше
      </button>
    </div>

    <div style="height:env(safe-area-inset-bottom)"></div>
  </div>

</div>

<style>
.onboarding-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--text-disabled);
  margin: 0 4px;
  transition: all 0.2s ease;
  flex-shrink: 0;
}
.onboarding-dot.active {
  width: 24px;
  border-radius: 4px;
  background: var(--text-accent);
}
</style>
`;
