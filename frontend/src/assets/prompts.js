// prompts.js
import apworld from './prompts/apworld';
import apush from './prompts/apush';
import aplang from './prompts/aplang';

// Add more prompts here...

const prompts = {
    'worldLEQ': () => apworld.leq,
    'worldSAQ': () => apworld.saq,
    'apushLEQ': () => apush.leq,
    'apushSAQ': () => apush.saq,
    'argument': () => aplang.argument,
    // Add more essay types here...
};

export default prompts;