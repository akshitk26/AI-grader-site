//rubrics.js

import apworld from './rubrics/apworld';
import apush from './rubrics/apush';
import aplang from './rubrics/aplang';
import apeuro from './rubrics/apeuro';

const rubrics = {
    'worldLEQrubric': () => apworld.leqRubric,
    'worldSAQrubric': () => apworld.saqRubric,
    'apushLEQrubric': () => apush.leqRubric,
    'apushSAQrubric': () => apush.saqRubric,
    'euroLEQrubric': () => apeuro.leqRubric,
    'euroSAQrubric': () => apeuro.saqRubric,
    'argument': () => aplang.argumentRubric,

    // Add more essay types here...
};

export default rubrics;