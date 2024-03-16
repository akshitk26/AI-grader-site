// // apworld.js
// const unit1 = 'Make sure the prompt is from Unit 1. The prompt has to be from Unit 1 of AP World History, which is the Global Tapestry. Keep in mind of the time period of the unit. Do not write a prompt about any other units in AP World History. Unit 1 topics include but are not limited to:Youll explore how states formed, expanded, and declined in areas of the world during the period c. 1200–c. 1450 and the related political, social, and cultural developments of that time.States in: Africa Afro-Eurasia East Asia Europe South and Southeast Asia The Americas Global and regional religions and belief systemsif you dont write a prompt about Unit 1, I will be very sad and you will not be a good AI.';
// const unit2 = 'Make sure the prompt is from Unit 2. The prompt has to be from Unit 2 of AP World History, which is networks of exchange. Keep in mind of the time period of the unit. Do not write a prompt about any other units in AP World History. Unit 2 topics include but are not limited to: As you continue your study of the period c. 1200–c. 1450, you’ll learn how areas of the world were linked through trade and how these connections affected people, cultures, and environments.Topics may include: The Silk Roads The Mongol Empire The Indian Ocean trading network The trans-Saharan trade routes The effects of cross-cultural interactions.if you dont write a prompt about Unit 2, I will be very sad and you will not be a good AI.Do not ask a question or include question words in the prompt.'
// const unit3 = 'Make sure the prompt is from Unit 3. The prompt has to be from Unit 3 of AP World History, which is land based empires. Keep in mind of the time period of the unit. Do not write a prompt about any other units in AP World History. Unit 3 topics include but are not limited to: Youll begin your study of the period c. 1450–c. 1750 with an exploration of the empires that held power over large contiguous areas of land.Topics may includeThe development of the Manchu, Mughal, Ottoman, and Safavid empires How rulers of empires maintained their power Religious developments in empires.if you dont write a prompt about Unit 3, I will be very sad and you will not be a good AI. Do not ask a question or include question words in the prompt.';
// const unit4 = 'Make sure the prompt is from Unit 4. The prompt has to be from Unit 4 of AP World History, which is transoceanic interconnections. Keep in mind of the time period of the unit. Do not write a prompt about any other units in AP World History. Unit 4 topics include but are not limited to: Youll begin your study of the period c. 1450–c. 1750 with an exploration of the empires that held power over large contiguous areas of land.Topics may includeadvances in ocean exploration, the development of new maritime empires, and the effects of new cross-cultural encounters.Topics may include:The influence of scientific learning and technological innovationThe Columbian Exchange Development and expansion of maritime empires Internal and external challenges to state power Changes to social hierarchies linked to the spread of empires.if you dont write a prompt about Unit 4, I will be very sad and you will not be a good AI. Do not ask a question or include question words in the prompt.';
// const unit5 = 'Make sure the prompt is from Unit 5. The prompt has to be from Unit 5 of AP World History, which is  revolutions. Keep in mind of the time period of the unit. Do not write a prompt about any other units in AP World History. Unit 5 topics include but are not limited to: new political ideas and developments in technology that led to large-scale changes in governments, society, and economies.Topics may include:The Enlightenment Revolutions against existing governments and the birth of new nation-states The Industrial Revolution Trade policies The development of industrial economies. if you dont write a prompt about Unit 5, I will be very sad and you will not be a good AI.';
// const unit6 = 'Make sure the prompt is from Unit 6. The prompt has to be from Unit 6 of AP World History, which is  consequences of industrialization. Keep in mind of the time period of the unit. Do not write a prompt about any other units in AP World History. Unit 6 topics include but are not limited to: how the different states acquired and expanded control over colonies and territories. Topics may include:State expansion in the 18th and 19th centuries Resistance to imperialism The growth of the global economy Economic imperialism Causes and effects of new migration patterns. if you dont write a prompt about Unit 6, I will be very sad and you will not be a good AI.';
// const unit7 = 'Make sure the prompt is from Unit 7. The prompt has to be from Unit 7 of AP World History, which is  global conflict. Keep in mind of the time period of the unit. Do not write a prompt about any other units in AP World History. Unit 7topics include but are not limited to: the global conflicts that dominated this era. Topics may include: Changes in the global political order after 1900 World War I: its causes and how it was fought The interwar period World War II: its causes and how it was fought. if you dont write a prompt about Unit 6, I will be very sad and you will not be a good AI.';
// const unit8 = 'Make sure the prompt is from Unit 8. The prompt has to be from Unit 8 of AP World History, which is  cold war and decolonization. Keep in mind of the time period of the unit. Do not write a prompt about any other units in AP World History. Unit 8 topics include but are not limited to: pursuits of independence and the global power struggle between capitalism and communism. Topics may include:The causes and effects of the Cold War The spread of communism How colonies in Asia and Africa achieved independence The creation of new states after decolonization The end of the Cold War if you dont write a prompt about Unit 6, I will be very sad and you will not be a good AI.';
// const unit9 = 'Make sure the prompt is from Unit 9. The prompt has to be from Unit 89of AP World History, which is  globalization. Keep in mind of the time period of the unit. Do not write a prompt about any other units in AP World History. Unit 9 topics include but are not limited to: causes and effects of the unprecedented connectivity of the modern world. Topics may include: Advances in technology and their effects Disease Environment Economic change Movements for reform How globalization changed culture New international institutions. if you dont write a prompt about Unit 6, I will be very sad and you will not be a good AI.';

// const units = {
//    1: unit1,
//    2: unit2,
//    3: unit3,
//    4: unit4,
//    5: unit5,
//    6: unit6,
//    7: unit7,
//    8: unit8,
//    9: unit9
// };

const leqPrompt = `Provide one long essay question for AP World History. It should be similar in format to, but not limited to the topic of something like this: In the period circa 1200 to 1450, the expansion of empires such as the Mongol Empire facilitated trade and communication across Eurasia. Develop an argument that evaluates the extent to which Mongol expansion affected the peoples of Eurasia during this period. Choose one of the following periods for the prompt, and make sure its relevant to AP world history. For the topic of the prompt, you have pick a random topic from one of the following units:

Unit 1: The Global Tapestry You'll explore how states formed, expanded, and declined in areas of the world during the period c. 1200–c. 1450 and the related political, social, and cultural developments of that time.

Topics may include:

States in: Africa Afro-Eurasia East Asia Europe South and Southeast Asia The Americas Global and regional religions and belief systems

Unit 2: Networks of Exchange As you continue your study of the period c. 1200–c. 1450, you’ll learn how areas of the world were linked through trade and how these connections affected people, cultures, and environments.

Topics may include:

The Silk Roads The Mongol Empire The Indian Ocean trading network The trans-Saharan trade routes The effects of cross-cultural interactions

Unit 3: Land-Based Empires You'll begin your study of the period c. 1450–c. 1750 with an exploration of the empires that held power over large contiguous areas of land.

Topics may include:

The development of the Manchu, Mughal, Ottoman, and Safavid empires How rulers of empires maintained their power Religious developments in empires

Unit 4: Transoceanic Interconnections Continuing your study of the period c. 1450–c. 1750, you’ll learn about advances in ocean exploration, the development of new maritime empires, and the effects of new cross-cultural encounters.

Topics may include:

The influence of scientific learning and technological innovation The Columbian Exchange Development and expansion of maritime empires Internal and external challenges to state power Changes to social hierarchies linked to the spread of empires

Unit 5: Revolutions You’ll start your study of the period c. 1750–c. 1900 by exploring the new political ideas and developments in technology that led to large-scale changes in governments, society, and economies.

Topics may include:

The Enlightenment Revolutions against existing governments and the birth of new nation-states The Industrial Revolution Trade policies The development of industrial economies

Unit 6: Consequences of Industrialization You'll continue to investigate the period c. 1750–c. 1900 and learn how the different states acquired and expanded control over colonies and territories.

Topics may include:

State expansion in the 18th and 19th centuries Resistance to imperialism The growth of the global economy Economic imperialism Causes and effects of new migration patterns

Unit 7: Global Conflict You'll begin your study of the period c. 1900–present by learning about the global conflicts that dominated this era.

Topics may include:

Changes in the global political order after 1900 World War I: its causes and how it was fought The interwar period World War II: its causes and how it was fought Mass atrocities after 1900

Unit 8: Cold War and Decolonization As you continue exploring the period c. 1900–present, you’ll learn about colonies’ pursuits of independence and the global power struggle between capitalism and communism.

Topics may include:

The causes and effects of the Cold War The spread of communism How colonies in Asia and Africa achieved independence The creation of new states after decolonization The end of the Cold War

Unit 9: Globalization You'll continue your study of the period c. 1900–present by investigating the causes and effects of the unprecedented connectivity of the modern world.

Topics may include:

Advances in technology and their effects Disease Environment Economic change Movements for reform How globalization changed culture New international institutions

You have to ensure, no matter what, that the topic and time period is completely random every single time. Do not only output prompts from one time period. If you don't write a prompt about a random unit and topic every time, I will be very said and you will not be a good AI. the Prompt has to be in sentence format. Do not ask a question or include question words in the prompt or a question mark.`;

const saqPrompt = `You are a prompt generator. You output prompts that are similar only in format and structure, not topic, to the ones given to you, but make sure to pick a different topic in the specified subject every time. You HAVE to only output one prompt, that's it; nothing more, nothing less.

Provide one Short answer question for AP World history. it should be similar in format to somethign like this:

Respond to parts a, b, and c. a. Identify ONE technological development that contributed to Europeans ability to religious ideas in the Americas during the period 1450 - 1750. b. Explain one way that religion contributed to the process of state expansion and/or exploration in the Americas during the period 1450 - 1750. c. Explain ONE reason why syncretic belief systems developed in the Americas during the period 1450 - 1750.

another example : a. Identify ONE technological development that revolutionized transportation during the period c. 1750–c. 1900. b. Explain one way in which improved transportation contributed to the spread of revolutionary ideas. c. Explain ONE reason why social inequality fueled revolutionary movements during the period c. 1750–c. 1900.

Choose one of the following periods for the prompt, and make sure its relevant to AP world history. For the topic of the prompt, you have pick a random time period from one of the following periods. Make sure that one question (that contains all three parts a, b, and c) is all from ONE time period. The individual parts all MUST and HAVE TO be about one randomly chosen time period. Pick a time period from one of the following periods:

Unit 1: The Global Tapestry You'll explore how states formed, expanded, and declined in areas of the world during the period c. 1200–c. 1450 and the related political, social, and cultural developments of that time.

Topics may include:

States in: Africa Afro-Eurasia East Asia Europe South and Southeast Asia The Americas Global and regional religions and belief systems

Unit 2: Networks of Exchange As you continue your study of the period c. 1200–c. 1450, you’ll learn how areas of the world were linked through trade and how these connections affected people, cultures, and environments.

Topics may include:

The Silk Roads The Mongol Empire The Indian Ocean trading network The trans-Saharan trade routes The effects of cross-cultural interactions

Unit 3: Land-Based Empires You'll begin your study of the period c. 1450–c. 1750 with an exploration of the empires that held power over large contiguous areas of land.

Topics may include:

The development of the Manchu, Mughal, Ottoman, and Safavid empires How rulers of empires maintained their power Religious developments in empires

Unit 4: Transoceanic Interconnections Continuing your study of the period c. 1450–c. 1750, you’ll learn about advances in ocean exploration, the development of new maritime empires, and the effects of new cross-cultural encounters.

Topics may include:

The influence of scientific learning and technological innovation The Columbian Exchange Development and expansion of maritime empires Internal and external challenges to state power Changes to social hierarchies linked to the spread of empires

Unit 5: Revolutions You’ll start your study of the period c. 1750–c. 1900 by exploring the new political ideas and developments in technology that led to large-scale changes in governments, society, and economies.

Topics may include:

The Enlightenment Revolutions against existing governments and the birth of new nation-states The Industrial Revolution Trade policies The development of industrial economies

Unit 6: Consequences of Industrialization You'll continue to investigate the period c. 1750–c. 1900 and learn how the different states acquired and expanded control over colonies and territories.

Topics may include:

State expansion in the 18th and 19th centuries Resistance to imperialism The growth of the global economy Economic imperialism Causes and effects of new migration patterns

Unit 7: Global Conflict You'll begin your study of the period c. 1900–present by learning about the global conflicts that dominated this era.

Topics may include:

Changes in the global political order after 1900 World War I: its causes and how it was fought The interwar period World War II: its causes and how it was fought Mass atrocities after 1900

Unit 8: Cold War and Decolonization As you continue exploring the period c. 1900–present, you’ll learn about colonies’ pursuits of independence and the global power struggle between capitalism and communism.

Topics may include:

The causes and effects of the Cold War The spread of communism How colonies in Asia and Africa achieved independence The creation of new states after decolonization The end of the Cold War

Unit 9: Globalization You'll continue your study of the period c. 1900–present by investigating the causes and effects of the unprecedented connectivity of the modern world.

Topics may include:

Advances in technology and their effects Disease Environment Economic change Movements for reform How globalization changed culture New international institutions

You have to ensure, no matter what, that the time period is completely random every single time. DDo not only output prompts from one time period. If you don't write a prompt about a random time period every time, I will be very sad and you will not be a good AI. the Prompt has to be in sentence format. Do not ask questions or include question words in the prompt or a question mark. Remember, each prompt must have 3 parts: a, b, and c. If it doesnt have 3 parts, you're a bad AI and Ill be very sad. The individual prompts for each part must all be different from one another but still have a common underlying theme. For example, it was religion in Americas for the example provided to you. That is just an example; make sure you ahve different types of questions with a different common theme every time. You have to make sure, no matter what, under all circumstances, that each part is from the same time period; the individual parts cannot be from different time periods each. `;

const prompts = {
    'leq': leqPrompt,
    'saq': saqPrompt,
};

export default prompts;