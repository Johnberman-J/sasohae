const giftQuestions = require("../../models/giftQuestions");

async function createGiftQuestions(req, res) {
    try {
        const {
            giftQuestionPersonality,
            giftQuestionEmotional,
            giftQuestionTrendy,
        } = req.body;
        await giftQuestions.create({
            giftQuestionPersonality,
            giftQuestionEmotional,
            giftQuestionTrendy,
        });
        res.status(201).send();
    } catch (err) {
        console.log(err);
        res.status(400).send(err);
    }
}

module.exports = createGiftQuestions;
