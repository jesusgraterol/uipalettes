import { encodeError, extractMessage } from 'error-message-utils';
import { IInstallerPromptOutcome, IBeforeInstallPromptEvent, ISWService } from './types';
import { ERRORS } from '../../errors';

/* ************************************************************************************************
 *                                         IMPLEMENTATION                                         *
 ************************************************************************************************ */
const SWServiceFactory = (): ISWService => {
  /* **********************************************************************************************
   *                                          PROPERTIES                                          *
   ********************************************************************************************** */

  // service worker's registration
  let __worker: ServiceWorker | undefined;
  let __registrationError: string | undefined;

  // app installer
  let __installer: IBeforeInstallPromptEvent | undefined;
  let __installerPromptOutcome: IInstallerPromptOutcome | undefined;
  let __appInstalled: boolean | undefined;
  const __runningInstalledApp: boolean = window.matchMedia('(display-mode: standalone)').matches;





  /* **********************************************************************************************
   *                                        APP INSTALLER                                         *
   ********************************************************************************************** */

  /**
   * Subscribes to the appinstalled which is fired by Chromium-based browsers and indicate when the
   * app has completed installing on the user's device. For more info visit:
   * https://web.dev/learn/pwa/detection
   */
  const __subscribeToInstallationState = () => {
    window.addEventListener(
      'appinstalled',
      () => {
        __appInstalled = true;
      },
      { once: true },
    );
  };

  /**
   * Triggers when the service worker is registered. It subscribes to the beforeinstallprompt which
   * is issued by browsers that support PWAs and provde the ability to trigger the browser's install
   * prompt. For more info visit:
   * https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps/How_to/Trigger_install_prompt
   * https://web.dev/learn/pwa/installation-prompt
   * https://stackoverflow.com/questions/50332119/is-it-possible-to-make-an-in-app-button-that-triggers-the-pwa-add-to-home-scree
   */
  const __initializeAppInstaller = () => {
    window.addEventListener(
      'beforeinstallprompt',
      (e: IBeforeInstallPromptEvent) => {
        // prevent the mini-infobar from appearing on mobile
        e.preventDefault();

        // store the event
        __installer = e;

        // listen to the installation state
        __subscribeToInstallationState();
      },
      { once: true },
    );
  };

  /**
   * Attempts to install the application on the user's device and stores the prompt's outcome.
   * @returns Promise<void>
   * @throws
   * - NO_APP_INSTALLER: if the beforeinstallprompt did not trigger
   *
   * More info:
   * https://web.dev/learn/pwa/installation-prompt
   */
  const installApp = async (): Promise<void> => {
    if (__installer && typeof __installer.prompt === 'function') {
      __installer.prompt();
      const { outcome } = await __installer.userChoice;
      __installerPromptOutcome = outcome;

      // the installer prompt can only be used once
      __installer = undefined;
    } else {
      throw new Error(encodeError('The app cannot be installed because the prompt event was not provided by the browser.', ERRORS.NO_APP_INSTALLER));
    }
  };





  /* **********************************************************************************************
   *                                 SERVICE WORKER REGISTRATION                                  *
   ********************************************************************************************** */

  /**
   * Attempts to register the Service Worker. If it is successful, it stores the registration
   * instance. Otherwise, it stores the error message.
   * @param path?
   */
  const register = (path: string = 'sw.js'): void => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register(path, { scope: '/' })
        .then((registration: ServiceWorkerRegistration) => {
          let serviceWorker: ServiceWorker | undefined;
          if (registration.installing) {
            serviceWorker = registration.installing;
          } else if (registration.waiting) {
            serviceWorker = registration.waiting;
          } else if (registration.active) {
            serviceWorker = registration.active;
          }
          if (serviceWorker) {
            // store the worker's instance
            __worker = serviceWorker;

            // update the instance whenever the state changes
            serviceWorker.addEventListener('statechange', (e) => {
              __worker = <ServiceWorker>e.target;
            });

            // init the app's installer
            __initializeAppInstaller();
          } else {
            console.log(registration);
            __registrationError = encodeError('The Service Worker\'s Registration is empty', ERRORS.EMPTY_SW_REGISTRATION);
          }
        })
        .catch((e) => {
          console.error(e);
          __registrationError = extractMessage(e);
        });
    } else {
      __registrationError = encodeError('The browser does not support Service Workers.', ERRORS.SW_NO_BROWSER_SUPPORT);
    }
  };





  /* **********************************************************************************************
   *                                         MODULE BUILD                                         *
   ********************************************************************************************** */
  return Object.freeze({
    // properties
    get worker() {
      return __worker;
    },
    get registrationError() {
      return __registrationError;
    },
    get installerPromptOutcome() {
      return __installerPromptOutcome;
    },
    get appInstalled() {
      return __appInstalled;
    },
    get runningInstalledApp() {
      return __runningInstalledApp;
    },

    // app installer
    installApp,

    // service worker registration
    register,
  });
};





/* ************************************************************************************************
 *                                        GLOBAL INSTANCE                                         *
 ************************************************************************************************ */
const SWService = SWServiceFactory();





/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export {
  SWService,
};
