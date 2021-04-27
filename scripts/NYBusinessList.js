import { getNYBusinesses } from "./database.js"
import { Business } from "./Business.js"


export const NYBusinessList = () => {
    const contentTarget = document.querySelector(".businessList--newYork")
    const allNYBusinesses = getNYBusinesses()
    contentTarget.innerHTML = "<h1>New York Businesses</h1>"

    allNYBusinesses.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}