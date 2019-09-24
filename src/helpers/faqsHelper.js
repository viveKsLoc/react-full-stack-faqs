import faqsData from "./data/faqsData";

export default getFaqById = (id) => faqsData.filter(faqData => faqData.id === id)[0]

export default getFaqByNum = (number) => faqsData.filter(faqData => faqData.number === number)[0]

export default getFaqsByNums = (number1, number2) => faqsData.slice(number1, number2)

export default getFaqsByType = (type) => faqsData.filter(faqData => faqData.type === type)

export default getFaqsByTag = (tag) => faqsData.filter(faqData => faqData.tags.includes(tag))

export default getFaqsByTags = (tags) => faqsData.filter(faqData => faqData.tags.includes(tag))