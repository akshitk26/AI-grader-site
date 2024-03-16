const leqPrompt = `Provide one long essay question for AP United States history. You have to make sure, no matter what, that the units are randomized.
You have to make sure no matter what to return a different and random time period in every output. Ensure that your prompt is always only one sentence long, and no question words, no matter what.`;
const saqPrompt =  `Provide one Short answer question for AP United States history. You have to make sure, no matter what, that the units are randomized.
You have to make sure no matter what to return a different and random time period in every output. If you don't i will be very very sad and you wont be a good AI.`;

const prompts = {
    'leq': leqPrompt,
    'saq': saqPrompt,
};

export default prompts;