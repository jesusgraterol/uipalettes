

/* ************************************************************************************************
 *                                             TYPES                                              *
 ************************************************************************************************ */

/**
 * SW Service
 * The singleton that will handle the Service Worker's state as well as its functionality.
 */
interface ISWService {
  // properties
  worker: ServiceWorker | undefined,
  registrationError: string | undefined,

  // registration
  register(path?: string): void
}




/* ************************************************************************************************
 *                                         MODULE EXPORTS                                         *
 ************************************************************************************************ */
export type {
  ISWService,
};
