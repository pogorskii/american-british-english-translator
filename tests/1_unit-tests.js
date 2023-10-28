const chai = require("chai");
const assert = chai.assert;

const Translator = require("../components/translator.js");
const translator = new Translator();
const locale = ["american-to-british", "british-to-american"];
const spanRegex = /<\/?span[^>]*>/g;

suite("Unit Tests", () => {
  suite("American to British english tests", () => {
    test("Translate 'Mangoes are my favorite fruit.' to British English", (done) => {
      assert.equal(
        translator
          .translate("Mangoes are my favorite fruit.", locale[0])
          .replace(spanRegex, ""),
        "Mangoes are my favourite fruit."
      );
      done();
    });
    test("Translate 'I ate yogurt for breakfast.' to British English", (done) => {
      assert.equal(
        translator
          .translate("I ate yogurt for breakfast.", locale[0])
          .replace(spanRegex, ""),
        "I ate yoghurt for brekkie."
      );
      done();
    });
    test("Translate 'We had a party at my friend's condo.' to British English", (done) => {
      assert.equal(
        translator
          .translate("We had a party at my friend's condo.", locale[0])
          .replace(spanRegex, ""),
        "We had a party at my friend's flat."
      );
      done();
    });
    test("Translate 'Can you toss this in the trashcan for me?' to British English", (done) => {
      assert.equal(
        translator
          .translate("Can you toss this in the trashcan for me?", locale[0])
          .replace(spanRegex, ""),
        "Can you toss this in the bin for me?"
      );
      done();
    });
    test("Translate 'The parking lot was full.' to British English", (done) => {
      assert.equal(
        translator
          .translate("The parking lot was full.", locale[0])
          .replace(spanRegex, ""),
        "The car park was full."
      );
      done();
    });
    test("Translate 'Like a high tech Rube Goldberg machine.' to British English", (done) => {
      assert.equal(
        translator
          .translate("Like a high tech Rube Goldberg machine.", locale[0])
          .replace(spanRegex, ""),
        "Like a high tech Heath Robinson device."
      );
      done();
    });
    test("Translate 'To play hooky means to skip class or work.' to British English", (done) => {
      assert.equal(
        translator
          .translate("To play hooky means to skip class or work.", locale[0])
          .replace(spanRegex, ""),
        "To bunk off means to skip class or work."
      );
      done();
    });
    test("Translate 'No Mr. Bond, I expect you to die.' to British English", (done) => {
      assert.equal(
        translator
          .translate("No Mr. Bond, I expect you to die.", locale[0])
          .replace(spanRegex, ""),
        "No Mr Bond, I expect you to die."
      );
      done();
    });
    test("Translate 'Dr. Grosh will see you now.' to British English", (done) => {
      assert.equal(
        translator
          .translate("Dr. Grosh will see you now.", locale[0])
          .replace(spanRegex, ""),
        "Dr Grosh will see you now."
      );
      done();
    });
    test("Translate 'Lunch is at 12:15 today.' to British English", (done) => {
      assert.equal(
        translator
          .translate("Lunch is at 12:15 today.", locale[0])
          .replace(spanRegex, ""),
        "Lunch is at 12.15 today."
      );
      done();
    });
  });
  suite("British to American english tests", () => {
    test("Translate 'We watched the footie match for a while.' to American English", (done) => {
      assert.equal(
        translator
          .translate("We watched the footie match for a while.", locale[1])
          .replace(spanRegex, ""),
        "We watched the soccer match for a while."
      );
      done();
    });
    test("Translate 'Paracetamol takes up to an hour to work.' to American English", (done) => {
      assert.equal(
        translator
          .translate("Paracetamol takes up to an hour to work.", locale[1])
          .replace(spanRegex, ""),
        "Acetaminophen takes up to an hour to work."
      );
      done();
    });
    test("Translate 'First, caramelise the onions.' to American English", (done) => {
      assert.equal(
        translator
          .translate("First, caramelise the onions.", locale[1])
          .replace(spanRegex, ""),
        "First, caramelize the onions."
      );
      done();
    });
    test("Translate 'I spent the bank holiday at the funfair.' to American English", (done) => {
      assert.equal(
        translator
          .translate("I spent the bank holiday at the funfair.", locale[1])
          .replace(spanRegex, ""),
        "I spent the public holiday at the carnival."
      );
      done();
    });
    test("Translate 'I had a bicky then went to the chippy.' to American English", (done) => {
      assert.equal(
        translator
          .translate("I had a bicky then went to the chippy.", locale[1])
          .replace(spanRegex, ""),
        "I had a cookie then went to the fish-and-chip shop."
      );
      done();
    });
    test("Translate 'I've just got bits and bobs in my bum bag.' to American English", (done) => {
      assert.equal(
        translator
          .translate("I've just got bits and bobs in my bum bag.", locale[1])
          .replace(spanRegex, ""),
        "I've just got odds and ends in my fanny pack."
      );
      done();
    });
    test("Translate 'The car boot sale at Boxted Airfield was called off.' to American English", (done) => {
      assert.equal(
        translator
          .translate(
            "The car boot sale at Boxted Airfield was called off.",
            locale[1]
          )
          .replace(spanRegex, ""),
        "The swap meet at Boxted Airfield was called off."
      );
      done();
    });
    test("Translate 'Have you met Mrs Kalyani?' to American English", (done) => {
      assert.equal(
        translator
          .translate("Have you met Mrs Kalyani?", locale[1])
          .replace(spanRegex, ""),
        "Have you met Mrs. Kalyani?"
      );
      done();
    });
    test("Translate 'Prof Joyner of King's College, London.' to American English", (done) => {
      assert.equal(
        translator
          .translate("Prof Joyner of King's College, London.", locale[1])
          .replace(spanRegex, ""),
        "Prof. Joyner of King's College, London."
      );
      done();
    });
    test("Translate 'Tea time is usually around 4 or 4.30' to American English", (done) => {
      assert.equal(
        translator
          .translate("Tea time is usually around 4 or 4.30", locale[1])
          .replace(spanRegex, ""),
        "Tea time is usually around 4 or 4:30"
      );
      done();
    });
  });
  suite("Highlighted translation tests", () => {
    test("Translate 'Mangoes are my favorite fruit.' to British English", (done) => {
      assert.equal(
        translator.translate("Mangoes are my favorite fruit.", locale[0]),
        'Mangoes are my <span class="highlight">favourite</span> fruit.'
      );
      done();
    });
    test("Translate 'I ate yogurt for breakfast.' to British English", (done) => {
      assert.equal(
        translator.translate("I ate yogurt for breakfast.", locale[0]),
        'I ate <span class="highlight">yoghurt</span> for <span class="highlight">brekkie</span>.'
      );
      done();
    });
    test("Translate 'We watched the footie match for a while.' to American English", (done) => {
      assert.equal(
        translator.translate(
          "We watched the footie match for a while.",
          locale[1]
        ),
        'We watched the <span class="highlight">soccer</span> match for a while.'
      );
      done();
    });
    test("Translate 'Paracetamol takes up to an hour to work.' to American English", (done) => {
      assert.equal(
        translator.translate(
          "Paracetamol takes up to an hour to work.",
          locale[1]
        ),
        '<span class="highlight">Acetaminophen</span> takes up to an hour to work.'
      );
      done();
    });
  });
});
