import { getBusinesses } from "./database.js"
import { Business } from "./Business.js"

const companySearchResultArticle = document.querySelector(".foundCompanies")

document
.querySelector("#companySearch")
.addEventListener("keypress", keyPressEvent => {
    if (keyPressEvent.charCode === 13) {
          
       const searchEntry = keyPressEvent.target.value.toLowerCase()

       const foundBusiness = allBusinesses.find(business => business.companyName.toLowerCase().includes(searchEntry))
       
       companySearchResultArticle.innerHTML = `
       <h2>
       ${foundBusiness.companyName}
       </h2>
       <section>
       ${foundBusiness.addressFullStreet}
       
       </section>
       <section>
       ${foundBusiness.addressCity},
       ${foundBusiness.addressStateCode}
       ${foundBusiness.addressZipCode}
       </section>
       `;
    }
});

const allBusinesses = getBusinesses()

export const BusinessList = () => {
    const contentTarget = document.querySelector(".businessList--allBusinesses")
    contentTarget.innerHTML = "<h1>Active Businesses</h1>"

    allBusinesses.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}