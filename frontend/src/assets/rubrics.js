//rubrics.js

import apworld from './rubrics/apworld';
import apush from './rubrics/apush';
import aplang from './rubrics/aplang';
import apeuro from './rubrics/apeuro';

const rubrics = {
    'worldLEQ': () => apworld.leqRubric,
    'worldSAQ': () => apworld.saqRubric,
    'apushLEQ': () => apush.leqRubric,
    'apushSAQ': () => apush.saqRubric,
    'euroLEQ': () => apeuro.leqRubric,
    'euroSAQ': () => apeuro.saqRubric,
    'argument': () => aplang.argumentRubric,

    // Add more essay types here...
};

export default rubrics;