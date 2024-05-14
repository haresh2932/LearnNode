const path = require("path");
const url=require("url")

const urlData=('https://www.amazon.in/gp/aw/d/B0CHXDVMVP/?_encoding=UTF8&pd_rd_plhdr=t&aaxitk=a945c770ceff805a4b90ee62cb5ae580&hsa_cr_id=0&qid=1715224754&sr=1-2-e0fa1fdd-d857-4087-adda-5bd576b25987&ref_=sbx_be_s_sparkle_mcd_asin_1_img&pd_rd_w=tK3NN&content-id=amzn1.sym.df9fe057-524b-4172-ac34-9a1b3c4e647d%3Aamzn1.sym.df9fe057-524b-4172-ac34-9a1b3c4e647d&pf_rd_p=df9fe057-524b-4172-ac34-9a1b3c4e647d&pf_rd_r=T0171JV1M11X6QD474KB&pd_rd_wg=TTyrt&pd_rd_r=948a0a6e-d817-41f9-bb54-5328ad52bf42')

console.log(url.parse(urlData));

const newUrl={
    protocol:'https:',
    host:'www.howks.com',
    search:'without-display-mobile',
    query:'pid=1234585',
    path:'/ap/GAGHGA'
}

console.log(url.format(newUrl));

const pathHerry=('https://www.herryS.com/product')
const pathRacky=('../go')

console.log(url.resolve(pathHerry,pathRacky));