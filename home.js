(() => {
  const progress = document.querySelector(".home-scroll-progress");
  const updateProgress = () => {
    if (!progress) return;
    const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
    const amount = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
    progress.style.setProperty("--home-progress", amount);
  };
  updateProgress();
  window.addEventListener("scroll", updateProgress, { passive: true });
  window.addEventListener("resize", updateProgress);

  const revealItems = document.querySelectorAll("[data-reveal]");
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion || !("IntersectionObserver" in window)) return;

  document.body.classList.add("home-motion-ready");
  const observer = new IntersectionObserver((entries, activeObserver) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      activeObserver.unobserve(entry.target);
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });

  revealItems.forEach((item) => observer.observe(item));
})();