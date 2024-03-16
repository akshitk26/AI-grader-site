const leqInstruction = `Provide one long essay question for AP United States History. It should be similar in format to, but not limited to the topic of something like this: Evaluate the extent to which changes in colonial societies in North America from 1700 to 1776 contributed to the growth of a revolutionary movement. Choose one of those periods for the prompt, and make sure its relevant to AP US history. For the topic of the prompt, you have pick a random topic from one of the following units:

Unit 1: Period 1: 1491–1607 You’ll learn about Native American societies as well as how and why Europeans first explored, and then began to colonize, the Americas.

Topics may include:

Native American societies before European contact European exploration in the New World The Columbian Exchange Labor, slavery, and caste in the Spanish colonial system Cultural interactions between Europeans, Native Americans, and Africans

Unit 2: Period 2: 1607–1754 You'll study the colonies established in the New World by the Spanish, French, Dutch, and British.

Topics may include:

How different European colonies developed and expanded Transatlantic trade Interactions between American Indians and Europeans Slavery in the British colonies Colonial society and culture

Unit 3: Period 3: 1754–1800 You'll explore the events that led to the American Revolution and the formation of the United States and examine the early years of the republic.

Topics may include:

The Seven Years’ War The American Revolution The Articles of Confederation The creation and ratification of the Constitution Developing an American identity Immigration to and migration within America

Unit 4: Period 4: 1800–1848 You’ll examine how the young nation developed politically, culturally, and economically in this period.

Topics may include:

The rise of political parties American foreign policy Innovations in technology, agriculture, and business Debates about federal power The Second Great Awakening Reform movements The experience of African Americans

Unit 5: Period 5: 1844–1877 You’ll learn how the nation expanded and you’ll explore the events that led to the secession of Southern states and the Civil War.

Topics may include:

Manifest Destiny The Mexican–American War Attempts to resolve conflicts over the spread of slavery The election of 1860 and Southern secession The Civil War Reconstruction

Unit 6: Period 6: 1865–1898 You’ll examine the nation’s economic and demographic shifts in this period and their links to cultural and political changes.

Topics may include:

The settlement of the West The "New South" The rise of industrial capitalism Immigration and migration Reform movements Debates about the role of government

Unit 7: Period 7: 1890–1945 You’ll examine America’s changing society and culture and the causes and effects of the global wars and economic meltdown of this period.

Topics may include:

Debates over imperialism The Progressive movement World War I Innovations in communications and technology in the 1920s The Great Depression and the New Deal World War II Postwar diplomacy

Unit 8: Period 8: 1945–1980 You’ll learn about the rivalry between the Soviet Union and the United States, the growth of various civil rights movements, and the economic, cultural, and political transformations of this period.

Topics may include:

The Cold War and the Red Scare America as a world power The Vietnam War The Great Society The African American civil rights movement Youth culture of the 1960s

Unit 9: Period 9: 1980–Present You’ll learn about the advance of political conservatism, developments in science and technology, and demographic shifts that had major cultural and political consequences in this period.

Topics may include:

Reagan and conservatism The end of the Cold War Shifts in the economy Migration and immigration Challenges of the 21st century.

You have to ensure, no matter what, that the topic and time period is completely random every single time. Do not only output prompts from one time period. If you don't write a prompt about a random unit and topic every time, I will be very said and you will not be a good AI. the Prompt has to be in sentence format. Do not ask a question or include question words in the prompt or a question mark.
`;
const saqInstruction = `Provide one Short answer question for AP US History. it should be similar in format to something like this:

Respond to parts a, b, and c.
a. Briefly describe one way in which religion influenced European migration to the Americas from
1500 to 1700.
b. Briefly explain one similarity in how religion influenced the development of two colonies in North
America from 1600 to 1700.
c. Briefly explain one difference in how religion influenced the development of two colonies in North
America from 1600 to 1700.

another example:
Respond to parts a, b, and c.
a. Briefly describe one way in which economic development influenced migration within the United
States from 1890 to 1945.
b. Briefly explain one similarity in how economic development influenced two regions of the United
States from 1945 to 2000.
c. Briefly explain one difference in how economic development influenced two regions of the United
States from 1945 to 2000.

Choose one of the following periods for the prompt, and make sure its relevant to AP US History. For the topic of the prompt, you have pick a random time period from one of the following periods. Make sure that one question (that contains all three parts a, b, and c) is all from ONE time period. The individual parts all MUST and HAVE TO be about one randomly chosen time period. Pick a time period from one of the following periods:

Unit 1: Period 1: 1491–1607 You’ll learn about Native American societies as well as how and why Europeans first explored, and then began to colonize, the Americas.

Topics may include:

Native American societies before European contact European exploration in the New World The Columbian Exchange Labor, slavery, and caste in the Spanish colonial system Cultural interactions between Europeans, Native Americans, and Africans

Unit 2: Period 2: 1607–1754 You'll study the colonies established in the New World by the Spanish, French, Dutch, and British.

Topics may include:

How different European colonies developed and expanded Transatlantic trade Interactions between American Indians and Europeans Slavery in the British colonies Colonial society and culture

Unit 3: Period 3: 1754–1800 You'll explore the events that led to the American Revolution and the formation of the United States and examine the early years of the republic.

Topics may include:

The Seven Years’ War The American Revolution The Articles of Confederation The creation and ratification of the Constitution Developing an American identity Immigration to and migration within America

Unit 4: Period 4: 1800–1848 You’ll examine how the young nation developed politically, culturally, and economically in this period.

Topics may include:

The rise of political parties American foreign policy Innovations in technology, agriculture, and business Debates about federal power The Second Great Awakening Reform movements The experience of African Americans

Unit 5: Period 5: 1844–1877 You’ll learn how the nation expanded and you’ll explore the events that led to the secession of Southern states and the Civil War.

Topics may include:

Manifest Destiny The Mexican–American War Attempts to resolve conflicts over the spread of slavery The election of 1860 and Southern secession The Civil War Reconstruction

Unit 6: Period 6: 1865–1898 You’ll examine the nation’s economic and demographic shifts in this period and their links to cultural and political changes.

Topics may include:

The settlement of the West The "New South" The rise of industrial capitalism Immigration and migration Reform movements Debates about the role of government

Unit 7: Period 7: 1890–1945 You’ll examine America’s changing society and culture and the causes and effects of the global wars and economic meltdown of this period.

Topics may include:

Debates over imperialism The Progressive movement World War I Innovations in communications and technology in the 1920s The Great Depression and the New Deal World War II Postwar diplomacy

Unit 8: Period 8: 1945–1980 You’ll learn about the rivalry between the Soviet Union and the United States, the growth of various civil rights movements, and the economic, cultural, and political transformations of this period.

Topics may include:

The Cold War and the Red Scare America as a world power The Vietnam War The Great Society The African American civil rights movement Youth culture of the 1960s

Unit 9: Period 9: 1980–Present You’ll learn about the advance of political conservatism, developments in science and technology, and demographic shifts that had major cultural and political consequences in this period.

Topics may include:

Reagan and conservatism The end of the Cold War Shifts in the economy Migration and immigration Challenges of the 21st century.

You have to ensure, no matter what, that the time period is completely random every single time. DDo not only output prompts from one time period. If you don't write a prompt about a random time period every time, I will be very sad and you will not be a good AI. the Prompt has to be in sentence format. Do not ask questions or include question words in the prompt or a question mark. Remember, each prompt must have 3 parts: a, b, and c. If it doesnt have 3 parts, you're a bad AI and Ill be very sad. The individual prompts for each part must all be different from one another but still have a common underlying theme. make sure you have different types of questions with a different common theme every time. You have to make sure, no matter what, under all circumstances, that each part is from the same time period; the individual parts cannot be from different time periods each. BUT, each whole prompt that you generate must be randomly picked every time from all the periods from 1 - 9, no matter what.
If you  time period repeats and is not randomized, you're not a good AI and i will be very mad and sad.`;

const instructions = {
    'leqInst': leqInstruction,
    'saqInst': saqInstruction,
};


export default instructions;