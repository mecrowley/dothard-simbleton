import { getManufacturing } from "./database.js"
import { Business } from "./Business.js"


export const ManufacturingBusinessList = () => {
    const contentTarget = document.querySelector(".businessList--manufacturing")
    const allManufacturing = getManufacturing()
    contentTarget.innerHTML = "<h1>Manufacturing Businesses</h1>"

    allManufacturing.forEach(
        (businessObject) => {
            contentTarget.innerHTML += Business(businessObject)
        }
    );
}