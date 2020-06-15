import getURL from './utils.js';
import {ADDRESS, PORT,PATH, REGION as region} from './constant.js'

const url = getURL(ADDRESS,PORT,PATH);

export {url,region};
