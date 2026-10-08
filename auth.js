(() => {
  const config = window.SUPABASE_CONFIG || {};
  const loginUrl = document.body.dataset.loginUrl || "login.html";
  const loginForm = document.querySelector("#auth-form");
  const status = document.querySelector("#auth-status");
  const submitButton = document.querySelector("#auth-submit");
  const protectedContent = [...document.querySelectorAll("[data-protected-content]")];
  const requiresAuth = document.body.dataset.authRequired === "true";
  const logoutButtons = document.querySelectorAll("[data-logout]");
  const setStatus = (message, kind = "info") => {
    if (!status) return;
    status.textContent = message;
    status.dataset.kind = kind;
  };

  if (!window.supabase || !config.projectUrl || !config.publishableKey) {
    if (requiresAuth) window.location.replace(loginUrl);
    if (loginForm) {
      setStatus("Supabase is not configured yet. Add the Project URL and publishable key to supabase-config.js.", "error");
      if (submitButton) submitButton.disabled = true;
    }
    return;
  }

  const client = window.supabase.createClient(config.projectUrl, config.publishableKey);

  if (requiresAuth) {
    client.auth.getSession().then(({ data, error }) => {
      if (error || !data.session) {
        window.location.replace(loginUrl);
        return;
      }
      protectedContent.forEach((item) => { item.hidden = false; });
    }).catch(() => window.location.replace(loginUrl));
    client.auth.onAuthStateChange((event) => {
      if (event === "SIGNED_OUT") window.location.replace(loginUrl);
    });
  }

  logoutButtons.forEach((button) => {
    button.addEventListener("click", async () => {
      button.disabled = true;
      const { error } = await client.auth.signOut();
      if (error) {
        button.disabled = false;
        setStatus(error.message, "error");
        return;
      }
      window.location.replace(loginUrl);
    });
  });

  if (!loginForm) return;

  let mode = "login";
  const modeButtons = document.querySelectorAll("[data-auth-mode]");
  const modeTitle = document.querySelector("#auth-mode-title");
  const updateMode = (nextMode) => {
    mode = nextMode;
    const signingUp = mode === "signup";
    if (modeTitle) modeTitle.textContent = signingUp ? "Create your account" : "Log in";
    if (submitButton) submitButton.textContent = signingUp ? "Create account" : "Log in";
    const password = loginForm.querySelector('[name="password"]');
    if (password) password.autocomplete = signingUp ? "new-password" : "current-password";
    modeButtons.forEach((button) => {
      const selected = button.dataset.authMode === mode;
      button.setAttribute("aria-pressed", String(selected));
    });
    setStatus("");
  };
  modeButtons.forEach((button) => button.addEventListener("click", () => updateMode(button.dataset.authMode)));
  updateMode("login");

  loginForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (!loginForm.reportValidity()) return;
    submitButton.disabled = true;
    setStatus(mode === "signup" ? "Creating your account…" : "Logging in…");
    const email = loginForm.elements.email.value.trim();
    const password = loginForm.elements.password.value;
    let result;

    if (mode === "signup") {
      result = await client.auth.signUp({
        email,
        password,
        options: { emailRedirectTo: new URL("index.html", window.location.href).href }
      });
    } else {
      result = await client.auth.signInWithPassword({ email, password });
    }

    submitButton.disabled = false;
    if (result.error) {
      setStatus(result.error.message, "error");
      return;
    }
    if (result.data.session) {
      window.location.replace("index.html");
      return;
    }
    if (mode === "signup") {
      setStatus("Check your email to confirm your account, then log in here.", "success");
    } else {
      setStatus("Log in completed without a session. Please try again.", "error");
    }
  });
})();
