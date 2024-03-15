// apworld.js
const unit1 = '';
const unit2 = 'Make sure the prompt is from Unit 2. The prompt has to be from Unit 2 of AP World History, which is networks of exchange. Keep in mind of the time period of the unit. Do not write a prompt about any other units in AP World History. Unit 2 topics include but are not limited to: As you continue your study of the period c. 1200–c. 1450, you’ll learn how areas of the world were linked through trade and how these connections affected people, cultures, and environments.Topics may include: The Silk Roads The Mongol Empire The Indian Ocean trading network The trans-Saharan trade routes The effects of cross-cultural interactions.if you dont write a prompt about Unit 2, I will be very sad and you will not be a good AI. The prompt has to be in sentence format, commanding to do something. Do not ask a question or include question words in the prompt.'
const unit3 = '';
const unit4 = '';
const unit5 = '';
const unit6 = '';
const unit7 = '';
const unit8 = '';
const unit9 = '';
const unit10 = '';

const units = {
   1: unit1,
   2: unit2,
   3: unit3,
   4: unit4,
   5: unit5,
   6: unit6,
   7: unit7,
   8: unit8,
   9: unit9,
   10: unit10
};

const getRandomUnit = () => {
    const unitNumbers = Object.keys(units);
    const randomIndex = Math.floor(Math.random() * unitNumbers.length);
    const randomUnitNumber = unitNumbers[randomIndex];
    return units[randomUnitNumber];
};

export default getRandomUnit;