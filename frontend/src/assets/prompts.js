// prompts.js

import apworld from './prompts/apworld';
import apush from './prompts/apush';
import aplang from './prompts/aplang';

const worldLEQ = 'Provide one Long essay question for AP World History. It should be in similar format to, but not limited to the topic of something like this: In the period circa 1200 to 1450, the expansion of empires such as the Mongol Empire facilitated trade and communication across Eurasia. Develop an argument that evaluates the extent to which Mongol expansion affected the peoples of Eurasia during this period. You can choose any time period from 1200 to present day; the time periods are 1200 - 1450, 1450 - 1750, 1750 - 1900, and 1900 - present. Choose one of those periods for the prompt, and make sure its relevant to AP world history. Make prompts from the units of the Global tapestry, networks of exchange, land based empires, transoceanic interconnections, revolutions, industrialization, global conflict, cold war and deconolization, globalization.';
const worldSAQ = 'say a state';
const apushLEQ = 'say a president';
const apushSAQ = 'say a city';
const argument = 'say a fruit';

// Add more prompts here...

const prompts = {
    'worldLEQ': worldLEQ,
    'worldSAQ': worldSAQ,
    'apushLEQ': apushLEQ,
    'apushSAQ': apushSAQ,
    'argument': argument,
    // Add more essay types here...
};

export default prompts;