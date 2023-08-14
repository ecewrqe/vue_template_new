<template>
  <div id="app">
    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>
      Dismissible Alert!
    </b-alert>

    <b-button @click="showDismissibleAlert = true" variant="info" class="m-1"
      >Show dismissible alert ({{
        showDismissibleAlert ? "visible" : "hidden"
      }})</b-button
    >
    <div class="alert alert-primary" role="alert">
      <strong>Heads up!</strong> This alert needs your attention, but it's not
      super important.
    </div>

    <div>
      <a
        href="#"
        data-toggle="dropdown"
        title="drlantern@gotbootstrap.com"
        class="header-icon d-flex align-items-center justify-content-center ml-2"
        aria-expanded="false"
      >
        <img
          src="./assets/logo.png"
          class="profile-image rounded-circle"
          alt="Dr. Codex Lantern"
        />
        <!-- you can also add username next to the avatar with the codes below:
									<span class="ml-1 mr-1 text-truncate text-truncate-header hidden-xs-down">Me</span>
									<i class="ni ni-chevron-down hidden-xs-down"></i> -->
      </a>
      <div
        class="dropdown-menu dropdown-menu-animated dropdown-lg show"
        x-placement="top-start"
        style="
          position: absolute;
          top: 5px;
          left: 483px;
          will-change: top, left;
        "
      >
        <div
          class="dropdown-header bg-trans-gradient d-flex flex-row py-4 rounded-top"
        >
          <div class="d-flex flex-row align-items-center mt-1 mb-1 color-white">
            <span class="mr-2">
              <img
                src="img/demo/avatars/avatar-admin.png"
                class="rounded-circle profile-image"
                alt="Dr. Codex Lantern"
              />
            </span>
            <div class="info-card-text">
              <div class="fs-lg text-truncate text-truncate-lg">
                Dr. Codex Lantern
              </div>
              <span class="text-truncate text-truncate-md opacity-80"
                >drlantern@gotbootstrap.com</span
              >
            </div>
          </div>
        </div>
        <div class="dropdown-divider m-0"></div>
        <a href="#" class="dropdown-item" data-action="app-reset">
          <span data-i18n="drpdwn.reset_layout">Reset Layout</span>
        </a>
        <a
          href="#"
          class="dropdown-item"
          data-toggle="modal"
          data-target=".js-modal-settings"
        >
          <span data-i18n="drpdwn.settings">Settings</span>
        </a>
        <div class="dropdown-divider m-0"></div>
        <a href="#" class="dropdown-item" data-action="app-fullscreen">
          <span data-i18n="drpdwn.fullscreen">Fullscreen</span>
          <i class="float-right text-muted fw-n">F11</i>
        </a>
        <a href="#" class="dropdown-item" data-action="app-print">
          <span data-i18n="drpdwn.print">Print</span>
          <i class="float-right text-muted fw-n">Ctrl + P</i>
        </a>
        <div class="dropdown-multilevel dropdown-multilevel-left">
          <div class="dropdown-item">Language</div>
          <div class="dropdown-menu">
            <a
              href="#?lang=fr"
              class="dropdown-item"
              data-action="lang"
              data-lang="fr"
              >Français</a
            >
            <a
              href="#?lang=en"
              class="dropdown-item active"
              data-action="lang"
              data-lang="en"
              >English (US)</a
            >
            <a
              href="#?lang=es"
              class="dropdown-item"
              data-action="lang"
              data-lang="es"
              >Español</a
            >
            <a
              href="#?lang=ru"
              class="dropdown-item"
              data-action="lang"
              data-lang="ru"
              >Русский язык</a
            >
            <a
              href="#?lang=jp"
              class="dropdown-item"
              data-action="lang"
              data-lang="jp"
              >日本語</a
            >
            <a
              href="#?lang=ch"
              class="dropdown-item"
              data-action="lang"
              data-lang="ch"
              >中文</a
            >
          </div>
        </div>
        <div class="dropdown-divider m-0"></div>
        <a class="dropdown-item fw-500 pt-3 pb-3" href="page_login.html">
          <span data-i18n="drpdwn.page-logout">Logout</span>
          <span class="float-right fw-n">@codexlantern</span>
        </a>
      </div>
    </div>

    <div class="alert alert-success alert-dismissible fade show" role="alert">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close"
      >
        >
        <span aria-hidden="true"><i class="fal fa-times"></i></span>
      </button>
      <strong>Well Done!</strong> You successfully read this important alert
      message.
    </div>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
  </div>
</template>
<script>
export default {
  data() {
    return {
      showDismissibleAlert: false,
    };
  },
};
</script>
<style lang="scss">
// #app {
//   font-family: Avenir, Helvetica, Arial, sans-serif;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   text-align: center;
//   color: #2c3e50;
// }

// nav {
//   padding: 30px;

//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>
