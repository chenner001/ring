/**
 * cococola Search \u8df3\u8f6c\u903b\u8f91\uff08\u5173\u952e\u8bcd\u5df2\u9690\u85cf\uff09
 */
const keywordMap = {
    "ss": "jewelry-card.html",
    "\u82CF\u665A": "sousuosuwan.html",
    "\u6C88\u591C": "shenyeweibo.html",
    "\u6C88\u6E05\u4E66": "news-shen.html",
    "\u9646\u9E23": "luming.html",
    "\u5170\u6EAA\u5927\u5B66": "lanxidaxue.html",
    "\u57CE\u5357\u5E9F\u5F03\u5DE5\u5382": "gongchang.html",
    "\u6797\u6E21": "lindubaike.html",
    "\u82CF\u5FF5": "sunian.html",
    "\u5170\u6EAA\u5E02\u6574\u5F62\u5916\u79D1": "zhengxingwaike.html",
    "\u5149\u66E6\u798F\u5229\u9662": "sousuoguangxi.html"
};

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('searchInput');
    const addressBar = document.getElementById('addressBar');

    if (searchInput) {
        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const keyword = searchInput.value.trim();
                searchInput.value = '';
                let matchedUrl = null;
                const lowerKeyword = keyword.toLowerCase();
                for (let [key, url] of Object.entries(keywordMap)) {
                    if (lowerKeyword === key.toLowerCase()) {
                        matchedUrl = url;
                        break;
                    }
                }
                if (matchedUrl) {
                    window.open(matchedUrl, '_blank');
                }
            }
        });
    }

    if (addressBar) {
        addressBar.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {}
        });
    }
});