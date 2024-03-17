const leqPrompt = `Provide one long essay question for AP European History. You have to make sure, no matter what, that the units are randomized.
You have to make sure no matter what to return a different and random unit and topic in every output. Ensure that your prompt is always only one sentence long, and no question words, no matter what.
It is of utmost importance that each output talks about a different Unit, or else you are a bad AI if you dont do that.`;
const saqPrompt = `Provide one short answer question for AP European History. You have to make sure, no matter what, that the units are randomized.
You have to make sure no matter what to return a different and random unit and topic in every output. Ensure that your prompt is always only one sentence long, and no question words, no matter what.
It is of utmost importance that each output talks about a different Unit, and has 3 parts, or else you are a bad AI if you dont do that.`;

const prompts = {
    'leq': leqPrompt,
    'saq': saqPrompt,
};


export default prompts;