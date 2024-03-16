

const leqPrompt = `Provide one long essay question for AP World history. You have to make sure, no matter what, that the units are randomized.
You have to make sure no matter what to return a different and random time period in every output.`;
const saqPrompt = `Provide one Short answer question for AP World history. You have to make sure, no matter what, that the units are randomized.
You have to make sure no matter what to return a different and random time period in every output. If you don't i will be very very sad and you wont be a good AI.`;
const prompts = {
    'leq': leqPrompt,
    'saq': saqPrompt,
};

export default prompts;