import { AgentData } from "./database.js"
import { Agent } from "./Agent.js"


export const AgentList = () => {
    const contentTarget = document.querySelector(".agents")
    const allAgents = AgentData()
    contentTarget.innerHTML = "<h1>Purchasing Agents</h1>"

    allAgents.forEach(
        (agentObject) => {
            contentTarget.innerHTML += Agent(agentObject)
        }
    );
}