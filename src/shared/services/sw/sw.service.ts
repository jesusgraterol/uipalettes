import { encodeError, extractMessage } from 'error-message-utils';
import { ISWService } from './types';
import { ERRORS } from './errors';

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




  /* **********************************************************************************************
   *                                         REGISTRATION                                         *
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
            __worker = serviceWorker;
            serviceWorker.addEventListener('statechange', (e) => {
              __worker = <ServiceWorker>e.target;
            });
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

    // registration
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
