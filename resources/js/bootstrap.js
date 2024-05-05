import axios from 'axios';
import Tooltip from 'bootstrap/js/src/tooltip';
import Modal from 'bootstrap/js/src/modal';

window.axios = axios;
window.Tooltip = Tooltip;
window.Modal = Modal;

window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
