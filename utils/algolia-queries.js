const { getReadTime } = require("./RichTextWordCounter");

const pageQuery = `
{
   page: allContentfulArticle (sort: { fields: internalPublishDate, order: DESC }){
    nodes {
      type: __typename
      id: contentful_id
      title 
      description {
        description
      }
      author {
        name
				slug
      }
			publicationDate: internalPublishDate(formatString: "MMMM D, YYYY")
    	publicationDateShort: internalPublishDate(formatString: "MMM D, YYYY")
      slug
      categories {
        title
				slug
      }
      articleSections {
				wordCount
      }
      imageSmall: heroImage {
        gatsbyImageData
      }
      imageTall: featureImageTall {
        gatsbyImageData
      }
    }
  }
  videos: allContentfulVideo {
    nodes {
      type: __typename
      id
      title
      videoUrl
    }
  }
}
`;

function pageToAlgoliaRecord({ id, description, articleSections, ...rest }) {
  return {
    objectID: id,
    contentful_id: id,
    description: description && description.description,
    readTime: getReadTime(
      articleSections.reduce((prev, cur) => prev + cur.wordCount, 0)
    ),
    ...rest,
  };
}

function videoToAlgoliaRecord({ id, title, videoUrl, type }) {
  return {
    objectID: id,
    type,
    title,
    videoUrl,
  };
}

const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => [
      ...data.page.nodes.map(pageToAlgoliaRecord),
      ...data.videos.nodes.map(videoToAlgoliaRecord),
    ],
    index: process.env.GATSBY_ALGOLIA_INDEX_NAME,
  },
];

module.exports = queries;
