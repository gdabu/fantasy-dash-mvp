/**
 * RichTextWordCounter
 *
 * The functions use here are primarily used to calculate
 * the word count specifically for the Article Sections field
 * in the Article content type.
 *
 * https://app.contentful.com/spaces/az3stxsro5h5/content_types/article/fields
 *
 * Important: Generating word counts for any other field of any other content
 * type is untested and not guaranteed to work.
 *
 */

/**
 * countWords
 *
 * Counts the number of words there are in @param str
 *
 * @param {*} str
 * @returns
 */
function countWords(str) {
  return str.split(/\s+/).length;
}

/**
 * recursivelyGetContentValueWordCount
 *
 * Adds up all the words in every value property in a nested object array
 * Example @contentArray data structure
 * [{value},{content:[{value}]}]
 *
 * @param {*} contentArray
 * @param {*} wordCount
 * @returns
 */
function recursivelyGetContentValueWordCount(contentArray, wordCount) {
  contentArray.forEach((item) => {
    if (item.content)
      wordCount = recursivelyGetContentValueWordCount(item.content, wordCount);
    else if (item.value) wordCount += countWords(item.value.trim());
  });
  return wordCount;
}

/**
 * getRichTextReadTime
 *
 * Calculates the read time based on wordCount.
 *
 * @param {*} wordCount - number of words
 * @param {*} max - max read time allowed to be returned. If the calculatedReadTime is greater than @param max then `{max}+` is returned.
 * @returns
 */
function getReadTime(wordCount, max) {
  const calculatedReadTime = Math.ceil(wordCount / 200);

  if (!max) return calculatedReadTime;

  return readTime > max ? `${max}+` : calculatedReadTime;
}

/**
 * getWordCountFromRichText
 *
 * Acts as an entry point for recursivelyGetContentValueWordCount so that we can initialize wordCount to 0.
 *
 * @param {*} content
 * @returns
 */
function getWordCountFromRichText(content) {
  const contentNodes = JSON.parse(content);
  let wordCount = 0;

  return recursivelyGetContentValueWordCount(contentNodes.content, wordCount);
}

/**
 * getArticleSectionsReadTime
 *
 * Calculates the read time of an article's articleSections node.
 *
 * @param {*} articleSections
 * @returns
 */
function getArticleSectionsReadTime(articleSections) {
  let totalWordCount = 0;

  articleSections &&
    articleSections.map((section, index) => {
      const rawContent = section.content?.raw;
      totalWordCount +=
        rawContent !== undefined ? getWordCountFromRichText(rawContent) : 0;
    });

  return getReadTime(totalWordCount);
}

/**
 * getArticleSectionsWordCount
 *
 * Counts the number of words in an article's articleSections node.
 *
 * @param {*} articleSections
 * @returns
 */
function getArticleSectionsWordCount(articleSections) {
  let totalWordCount = 0;

  articleSections &&
    articleSections.map((section, index) => {
      const rawContent = section.content?.raw;
      totalWordCount +=
        rawContent !== undefined ? getWordCountFromRichText(rawContent) : 0;
    });

  return totalWordCount;
}

module.exports = {
  recursivelyGetContentValueWordCount,
  getArticleSectionsReadTime,
  getArticleSectionsWordCount,
  getReadTime,
  getWordCountFromRichText,
};
