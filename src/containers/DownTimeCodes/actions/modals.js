export const MODAL_OPEN = 'MODAL_OPEN';
export const MODAL_CLOSE = 'MODAL_CLOSE';

/**
 * @param key
 * @returns {{type: string, key: string}}
 */
export function openModal(key) {
  return {
    type: MODAL_OPEN,
    key: key
  }
}

/**
 * @param key
 * @returns {{type: string, key: string}}
 */
export function closeModal(key) {
  return {
    type: MODAL_CLOSE,
    key: key
  }
}