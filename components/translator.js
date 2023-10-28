const americanOnly = require("./american-only.js");
const americanToBritishSpelling = require("./american-to-british-spelling.js");
const britishOnly = require("./british-only.js");

const terms = [];
Object.keys(americanOnly).forEach((key) => {
  terms.push([key, americanOnly[key]]);
});
Object.keys(americanToBritishSpelling).forEach((key) => {
  terms.push([key, americanToBritishSpelling[key]]);
});
Object.keys(britishOnly).forEach((key) => {
  terms.push([britishOnly[key], key]);
});

class Translator {
  americanToBritish(text) {
    let translation = text;

    terms.forEach((term) => {
      const regexAmerican = new RegExp(`\\b${term[0]}\\b`, "g");
      const regexAmericanCap = new RegExp(
        `\\b${term[0].charAt(0).toUpperCase() + term[0].slice(1)}\\b`,
        "g"
      );

      translation = translation.replace(
        regexAmerican,
        `<span class="highlight">${term[1]}</span>`
      );
      translation = translation.replace(
        regexAmericanCap,
        `<span class="highlight">${
          term[1].charAt(0).toUpperCase() + term[1].slice(1)
        }</span>`
      );
    });

    const timeRegex = /(([0-9]|0[0-9]|1[0-9]|2[0-3]):([0-5][0-9]))/g;
    const times = translation.match(timeRegex);
    if (times) {
      times.forEach((time) => {
        translation = translation.replace(
          time,
          `<span class="highlight">${time.replace(":", ".")}</span>`
        );
      });
    }

    const titleRegex = /(mr|mrs|ms|mx|dr|prof)\./gi;
    const titles = translation.match(titleRegex);
    if (titles) {
      titles.forEach((title) => {
        translation = translation.replace(
          title,
          `<span class="highlight">${(
            title.charAt(0).toUpperCase() + title.slice(1)
          ).replace(".", "")}</span>`
        );
      });
    }

    return translation;
  }

  britishToAmerican(text) {
    const translation = text;

    terms.forEach((term) => {
      const regexBritish = new RegExp(`\\b${term[1]}\\b`, "g");
      const regexBritishCap = new RegExp(
        `\\b${term[1].charAt(0).toUpperCase() + term[1].slice(1)}\\b`,
        "g"
      );

      translation = translation.replace(
        regexBritish,
        `<span class="highlight">${term[0]}</span>`
      );
      translation = translation.replace(
        regexBritishCap,
        `<span class="highlight">${
          term[0].charAt(0).toUpperCase() + term[0].slice(1)
        }</span>`
      );
    });

    const timeRegex = /(([0-9]|0[0-9]|1[0-9]|2[0-3])(\.)([0-5][0-9]))/g;
    const times = translation.match(timeRegex);
    if (times) {
      times.forEach((time) => {
        translation = translation.replace(
          time,
          `<span class="highlight">${time.replace(".", ":")}</span>`
        );
      });
    }

    const titleRegex = /(mr|mrs|ms|mx|dr|prof)\s/gi;
    const titles = translation.match(titleRegex);
    if (titles) {
      titles.forEach((title) => {
        translation = translation.replace(
          title,
          `<span class="highlight">${(
            title.charAt(0).toUpperCase() + title.slice(1)
          ).replace(" ", ".")}</span> `
        );
      });
    }

    return translation;
  }

  translate(text, locale) {
    let translation;

    if (locale === "american-to-british") {
      translation = this.americanToBritish(text);
    }

    if (locale === "british-to-american") {
      translation = this.britishToAmerican(text);
    }

    if (translation === text) {
      translation = "Everything looks good to me!";
    }

    return translation;
  }
}

module.exports = Translator;
