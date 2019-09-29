import faqsData from "../data/faqsData";

export const getFaqById = (id) => faqsData.filter(faqData => faqData.id === id)[0]

export const getFaqByNum = (num) => faqsData.filter(faqData => faqData.number === num)[0]

export const getFaqsByNums = (num1,num2) => faqsData.slice(num1, num2)

export const getFaqsByType = (type) => {
    let foundFaqs = faqsData.filter(faqData => faqData.type === type.toLowerCase())
    return {
        name: type,
        total: foundFaqs.length,
        faqs: foundFaqs
    }
}

export const getFaqsByTag = (tag) => {
    let foundFaqs = faqsData.filter(faqData => faqData.tags.includes(tag))
    return {
        name: tag,
        total : foundFaqs.length,
        faqs: foundFaqs
    }
}

export const getFaqsByTags = (tags) => {
    let foundFaqs = faqsData.filter(faqData => faqData.tags.sort().toString() === tags.sort().toString());
    return {
        name: tags.join(" + "),
        total: foundFaqs.length,
        faqs: foundFaqs
    }
}
