import faqsData from "../data/faqsData";

export default {
    getFaqById : function(id) {
        return faqsData.filter(faqData => faqData.id === id)[0]
    },
    getFaqByNum : function(num) {
        return faqsData.filter(faqData => faqData.number === num)[0]
    },
    getFaqsByNums : function(num1,num2) {
        return faqsData.slice(num1, num2)
    },
    getFaqsByType : function(type) {
        let foundFaqs = faqsData.filter(faqData => faqData.type === type.toLowerCase())
        return {
            name: type,
            total: foundFaqs.length,
            faqs: foundFaqs
        }
        
    },
    getFaqsByTag : function(tag) {
        let foundFaqs =  faqsData.filter(faqData => faqData.tags.includes(tag))
        return {
            name: tag,
            total : foundFaqs.length,
            faqs: foundFaqs
        }
    },
    getFaqsByTags : function(tags) {
        let foundFaqs = faqsData.filter(faqData => faqData.tags.sort().toString() == tags.sort().toString());
        return {
            name: tags.join(" + "),
            total: foundFaqs.length,
            faqs: foundFaqs
        }
    }
}