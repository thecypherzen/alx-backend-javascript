/**
 * Resolves promises on a FCFS order
 *
 * @chinaDownload{promise<object>} - a promise
 * @uSDownload{promise<object>} - a promise
 * @returns{any} - the data from resolved promise
 */
export default function loadBalancer(chinaDownload, USDownload) {
  return Promise.race([chinaDownload, USDownload]);
}
