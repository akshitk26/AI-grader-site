import apworld from './instructions/apworld';
import apush from './instructions/apush';
import aplang from './instructions/aplang';
import apeuro from './instructions/apeuro';

const instructions = {
    'worldLEQinst': () => apworld.leqInst,
    'worldSAQinst': () => apworld.saqInst,
    'apushLEQinst': () => apush.leqInst,
    'apushSAQinst': () => apush.saqInst,
    'euroLEQinst': () => apeuro.leqInst,
    'euroSAQinst': () => apeuro.saqInst,
    'argumentInst': () => aplang.argumentInst,
}

export default instructions;